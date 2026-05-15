import os, subprocess, re

r = subprocess.run(['cygpath','-w','/c/Users/basto/OneDrive/Prototipos de site/_deploy'], capture_output=True, text=True)
base = r.stdout.strip()

with open(os.path.join(base, 'logo_cb_b64.txt'), 'r') as f:
    logo = f.read().strip()
with open(os.path.join(base, 'favicon_cb_b64.txt'), 'r') as f:
    favicon = f.read().strip()
with open(os.path.join(base, 'index.html'), 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Favicon real
old_fav = """<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%231e3a5f'/><text x='16' y='22' text-anchor='middle' font-family='Arial' font-size='12' font-weight='900' fill='white'>CB</text></svg>">"""
new_fav = '<link rel="icon" type="image/png" href="' + favicon + '">'
html = html.replace(old_fav, new_fav)

# 2. Google Tags
gtag = '\n<!-- Google tag (gtag.js) -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17891107547"></script>\n<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","AW-17891107547");gtag("config","GT-MKRZ98BB");</script>'
if 'AW-17891107547' not in html:
    html = html.replace('<link rel="preconnect"', gtag + '\n<link rel="preconnect"')

# 3. Logo real - nav
html = html.replace(
    '<div class="nav-logo-mark">CB</div><div class="nav-logo-text">Company <span>Bastos</span></div>',
    '<img src="' + logo + '" alt="Company Bastos" style="height:32px">'
)

# 4. Logo real - loader
html = html.replace(
    '<div class="loader-mark">COMPANY <span>BASTOS</span></div><div class="loader-line"></div>',
    '<img src="' + logo + '" alt="Company Bastos" style="height:40px;animation:pulse 2s infinite">'
)

# 5. Logo real - footer
html = html.replace(
    '<div class="footer-brand"><div class="mark">CB</div><span>Company Bastos</span></div>',
    '<div class="footer-brand"><img src="' + logo + '" alt="Company Bastos" style="height:28px"></div>'
)

# 6. Remove "agora"
html = html.replace('perdendo dinheiro agora', 'perdendo dinheiro')

# 7. Prazo 5 dias
html = html.replace('<strong>7 dias</strong>', '<strong>5 dias</strong>')
html = html.replace('Pronto em dias, n\u00e3o meses', 'Pronto em 5 dias')

# 8. Real screenshots
stock_to_real = [
    ('photo-1585771724684-38269d6639fd?w=600&q=80" alt="Climar Angra"', 'image.thum.io/get/width/600/crop/400/https://climarangra.com" alt="Climar Angra"'),
    ('photo-1544551763-46a013bb70d5?w=600&q=80" alt="Pier Jet"', 'image.thum.io/get/width/600/crop/400/https://pierjet.com.br" alt="Pier Jet"'),
    ('photo-1460925895917-afdab827c52f?w=600&q=80" alt="Bastos Company"', 'image.thum.io/get/width/600/crop/400/https://bastoscompany.com.br" alt="Bastos Company"'),
]
for old, new in stock_to_real:
    html = html.replace(old, new)

# Replace Beach Fashion (appears twice with different alts)
html = re.sub(
    r'https://images\.unsplash\.com/photo-1469334031218-e382a71b716b\?w=600&q=80" alt="Beach Fashion"',
    'https://image.thum.io/get/width/600/crop/400/https://beachfashionib.com" alt="Beach Fashion"',
    html
)

# Replace prototype screenshots
protos = {
    'LN Modas': 'ln-modas',
    'GB Grifes': 'gb-grifes',
    'RV Moda': 'rv-moda-feminina',
    'Recompor Casa': 'recompor-casa',
    'Sans\u00e3o': 'sansao-suplementos',
    'Dra. Dhara': 'dra-dhara',
    'Planejados': 'planejados-andrade',
    'Bastos Reboque': 'bastos-reboque',
    "Gram": 'gramart',
    'KT Im\u00f3veis': 'vivian-torres',
    'Shaw Designer': 'shaw-designer',
}
for alt, slug in protos.items():
    pattern = r'https://images\.unsplash\.com/[^"]*" alt="' + re.escape(alt)
    replacement = 'https://image.thum.io/get/width/600/crop/400/https://preview.metodobastos.com.br/' + slug + '/" alt="' + alt
    html = re.sub(pattern, replacement, html, count=1)

# 9. Remove travessoes
html = html.replace(' \u2014 ', ' | ')

# 10. Email
html = html.replace('contatoguilhermebastosf@gmail.com', 'contatocompanybastos@gmail.com')

# 11. Title fix
html = html.replace('Sites Profissionais que Vendem \u2014 Cria\u00e7\u00e3o de Sites', 'Sites Profissionais que Vendem')

# 12. Add pricing section if not present
if 'R$ 1.497' not in html:
    pricing = '<section class="section" id="investimento" style="background:var(--dark);text-align:center;padding:90px 28px"><div class="section-header reveal"><span class="stag"><i class="fas fa-tag"></i> Investimento</span><h2 class="stitle">Quanto custa ter um <span>site profissional</span></h2><p class="sdesc">Menos do que voc\u00ea imagina. E o prot\u00f3tipo \u00e9 gr\u00e1tis.</p></div><div class="container"><div style="background:var(--card);border:2px solid var(--sky);border-radius:24px;padding:48px 40px;max-width:500px;margin:0 auto;position:relative" class="reveal"><div style="position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--sky);color:var(--dark);padding:6px 20px;border-radius:50px;font-size:.68rem;font-weight:700;letter-spacing:1.5px">MAIS ESCOLHIDO</div><h3 style="font-family:var(--font-display);font-size:1.2rem;color:var(--sky);margin-top:8px">Site Profissional Completo</h3><div style="font-family:var(--font-display);font-size:3.5rem;color:var(--white);font-weight:700;margin:20px 0 8px">R$ 1.497<small style="font-size:1rem;color:var(--gray);font-weight:400">,00</small></div><p style="color:var(--gray);font-size:.88rem;margin-bottom:24px">Pagamento \u00fanico. Sem mensalidade.</p><ul style="list-style:none;text-align:left;margin-bottom:28px"><li style="padding:10px 0;border-bottom:1px solid var(--border);font-size:.85rem;color:var(--light);display:flex;align-items:center;gap:10px"><i class="fas fa-check" style="color:var(--green)"></i> Pesquisa de 5+ concorrentes</li><li style="padding:10px 0;border-bottom:1px solid var(--border);font-size:.85rem;color:var(--light);display:flex;align-items:center;gap:10px"><i class="fas fa-check" style="color:var(--green)"></i> Design exclusivo e personalizado</li><li style="padding:10px 0;border-bottom:1px solid var(--border);font-size:.85rem;color:var(--light);display:flex;align-items:center;gap:10px"><i class="fas fa-check" style="color:var(--green)"></i> 100% responsivo</li><li style="padding:10px 0;border-bottom:1px solid var(--border);font-size:.85rem;color:var(--light);display:flex;align-items:center;gap:10px"><i class="fas fa-check" style="color:var(--green)"></i> WhatsApp integrado</li><li style="padding:10px 0;border-bottom:1px solid var(--border);font-size:.85rem;color:var(--light);display:flex;align-items:center;gap:10px"><i class="fas fa-check" style="color:var(--green)"></i> SEO otimizado para Google</li><li style="padding:10px 0;border-bottom:1px solid var(--border);font-size:.85rem;color:var(--light);display:flex;align-items:center;gap:10px"><i class="fas fa-check" style="color:var(--green)"></i> Dom\u00ednio pr\u00f3prio + hospedagem</li><li style="padding:10px 0;border-bottom:1px solid var(--border);font-size:.85rem;color:var(--light);display:flex;align-items:center;gap:10px"><i class="fas fa-check" style="color:var(--green)"></i> Prot\u00f3tipo GR\u00c1TIS antes de pagar</li><li style="padding:10px 0;font-size:.85rem;color:var(--light);display:flex;align-items:center;gap:10px"><i class="fas fa-check" style="color:var(--green)"></i> Entrega em at\u00e9 5 dias \u00fateis</li></ul><a href="https://wa.me/5521984122143?text=Oi! Quero contratar o site profissional!" class="btn btn-blue" style="width:100%;justify-content:center" target="_blank"><i class="fab fa-whatsapp"></i> Quero Meu Site</a></div></div></section>\n'
    html = html.replace('<section class="section process"', pricing + '<section class="section process"')

with open(os.path.join(base, 'index.html'), 'w', encoding='utf-8') as f:
    f.write(html)

print(f"DONE! Size: {len(html)} chars")
print("Corrections applied:")
print("- Logo Company Bastos REAL (nav, loader, footer)")
print("- Favicon REAL")
print("- Google Tags: AW-17891107547 + GT-MKRZ98BB")
print("- Removed 'agora' from headline")
print("- Prazo: 5 dias")
print("- Price: R$1.497,00 with investment section")
print("- Real screenshots via thum.io")
print("- Removed travessoes")
print("- Email: contatocompanybastos@gmail.com")
