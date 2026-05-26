/*
  CATÁLOGO DE PRODUTOS ·TEMPLATE LOJA DE iPHONES
  ================================================
  Arquivo de configuração: dados da loja + produtos + categorias + temas sazonais

  COMO PERSONALIZAR PARA NOVO CLIENTE:
  1. Edite o objeto LOJA com os dados do cliente
  2. Edite o array CATALOGO com produtos e preços
  3. Deploy no Netlify → pronto
*/

// ═══════════════════════════════════════════════════════════
// CONFIGURAÇÃO DA LOJA
// ═══════════════════════════════════════════════════════════
const LOJA = {
  nome: "Moura Cell",
  nomeDestaque: "Cell",
  slogan: "iPhones e Produtos Apple com a maior garantia do RJ",
  descricao: "Loja especializada em iPhones novos e seminovos. Aceitamos seu aparelho usado, entregamos em todo RJ e parcelamos em ate 18x. Maior garantia do RJ: 1 ano em seminovos.",

  instagram: "mouracell",
  instagramUrl: "https://instagram.com/mouracell",
  whatsapp: "5521999999999",
  whatsappLink: "https://wa.me/5521999999999",
  whatsappMsg: "Ola! Vi o catalogo online da Moura Cell e tenho interesse em um produto!",

  seguidores: "112 mil",
  clientesSatisfeitos: "5.000+",

  cores: {
    primaria: "#29B6F6",
    secundaria: "#0288D1",
    accent: "#4FC3F7",
    grad1: "#29B6F6",
    grad2: "#0277BD"
  },

  diferenciais: [
    { icone: "fa-file-invoice", texto: "Nota Fiscal" },
    { icone: "fa-shield-halved", texto: "Garantia 1 Ano" },
    { icone: "fa-credit-card", texto: "Ate 18x no Cartao" },
    { icone: "fa-truck-fast", texto: "Entrega em Todo RJ" },
    { icone: "fa-mobile-screen", texto: "Aceitamos Seu iPhone" },
    { icone: "fa-wrench", texto: "Assistencia Apple" }
  ],

  depoimentos: [
    { nome: "Lucas M.", texto: "Comprei meu iPhone 15 Pro lacrado, com NF e tudo certinho. Atendimento 10/10! Super recomendo a Moura Cell.", estrelas: 5, tempo: "2 semanas atras" },
    { nome: "Amanda S.", texto: "Fiz trade-in do meu iPhone 12 e saiu muito em conta o upgrade pro 16. Processo super rapido e seguro!", estrelas: 5, tempo: "1 mes atras" },
    { nome: "Rafael O.", texto: "Melhor preco que encontrei no RJ inteiro. Parcela em 18x e ainda entregam no shopping. Nota mil!", estrelas: 5, tempo: "3 semanas atras" },
    { nome: "Juliana P.", texto: "Segundo iPhone que compro com eles. Confianca total, produto sempre confere com o anunciado. Top demais!", estrelas: 5, tempo: "1 mes atras" },
    { nome: "Pedro H.", texto: "Peguei um seminovo em estado impecavel. Bateria 100%, zero risco. 1 ano de garantia real.", estrelas: 5, tempo: "2 semanas atras" },
    { nome: "Carla R.", texto: "Minha mae queria um iPhone e eu estava com medo de comprar online. Fui super bem atendida, chegou lacrado, com NF. Amei!", estrelas: 5, tempo: "1 semana atras" }
  ],

  faq: [
    { p: "Os produtos tem nota fiscal?", r: "Sim! Todos os nossos produtos, tanto novos quanto seminovos, acompanham nota fiscal eletronica." },
    { p: "Como funciona o parcelamento em ate 18x?", r: "Parcelamos no cartao de credito em ate 18x. O valor das parcelas e calculado automaticamente no catalogo. Consulte condicoes especiais via WhatsApp!" },
    { p: "Voces aceitam meu iPhone usado como entrada?", r: "Sim! Fazemos avaliacao do seu aparelho e abatemos o valor na compra do novo. Chame no WhatsApp para uma cotacao rapida." },
    { p: "Como funciona a entrega?", r: "Entregamos em todo o RJ com total seguranca. Voce confere o produto antes de finalizar o pagamento." },
    { p: "Os seminovos tem garantia?", r: "Sim! A Moura Cell oferece a maior garantia do RJ: 1 ano em seminovos. Todos passam por inspecao completa." },
    { p: "Posso pagar na entrega?", r: "Sim! Aceitamos pagamento no ato da entrega via Pix, cartao ou dinheiro. Voce so paga quando conferir o produto." }
  ],

  adminSenha: "moura2026",
  criadoPor: "Company Bastos",
  criadoPorUrl: "https://instagram.com/companybastos"
};


// ═══════════════════════════════════════════════════════════
// CATÁLOGO DE PRODUTOS
// ═══════════════════════════════════════════════════════════
const CATALOGO_PADRAO = [

  // ─── iPHONE LACRADOS ──────────────────────────────────
  {
    id:"iphone-12",cat:"iphone-lacrado",modelo:"iPhone 12",lancamento:"2020",destaque:false,
    cores:[
      {nome:"Preto",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul",hex:"#023E73",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Verde",hex:"#D4EDBC",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Vermelho",hex:"#BF0013",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"64GB",avista:2900,parcelado:3280}]
  },
  {
    id:"iphone-13",cat:"iphone-lacrado",modelo:"iPhone 13",lancamento:"2021",destaque:false,
    cores:[
      {nome:"Meia-noite",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F5E6CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul",hex:"#275F7E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-blue-select-2021?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Rosa",hex:"#FADDD7",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Vermelho",hex:"#BF0013",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:3750,parcelado:4240}]
  },
  {
    id:"iphone-14",cat:"iphone-lacrado",modelo:"iPhone 14",lancamento:"2022",destaque:false,
    cores:[
      {nome:"Meia-noite",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F5E6CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-starlight-select-202209?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul",hex:"#A7C1D2",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-blue-select-202209?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Roxo",hex:"#E5DDEA",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-purple-select-202209?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Vermelho",hex:"#BF0013",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-red-select-202209?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:3950,parcelado:4470}]
  },
  {
    id:"iphone-15",cat:"iphone-lacrado",modelo:"iPhone 15",lancamento:"2023",destaque:true,
    cores:[
      {nome:"Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-black-select-202309?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul",hex:"#D4E4EF",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select-202309?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Verde",hex:"#D1E3C8",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-green-select-202309?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Amarelo",hex:"#F4E6C0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-yellow-select-202309?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Rosa",hex:"#F2D4CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"128GB",avista:4450,parcelado:5030},
      {gb:"256GB",avista:4950,parcelado:5600}
    ]
  },
  {
    id:"iphone-15-pro",cat:"iphone-lacrado",modelo:"iPhone 15 Pro",lancamento:"2023",destaque:true,
    cores:[
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Azul",hex:"#3D4F5C",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Branco",hex:"#F2F1EB",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-whitetitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blacktitanium-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"128GB",avista:5190,parcelado:5870},
      {gb:"256GB",avista:5690,parcelado:6430},
      {gb:"512GB",avista:6490,parcelado:7340}
    ]
  },
  {
    id:"iphone-15-pro-max",cat:"iphone-lacrado",modelo:"iPhone 15 Pro Max",lancamento:"2023",destaque:true,
    cores:[
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Azul",hex:"#3D4F5C",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Branco",hex:"#F2F1EB",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-whitetitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blacktitanium-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"256GB",avista:6390,parcelado:7220},
      {gb:"512GB",avista:7190,parcelado:8130},
      {gb:"1TB",avista:8490,parcelado:9600}
    ]
  },
  {
    id:"iphone-16",cat:"iphone-lacrado",modelo:"iPhone 16",lancamento:"2024",destaque:true,
    cores:[
      {nome:"Preto",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-black-select-202409?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-white-select-202409?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Rosa",hex:"#F2C4CF",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pink-select-202409?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Teal",hex:"#B0D4D1",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-teal-select-202409?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Ultramarino",hex:"#7B8EDE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-ultramarine-select-202409?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"128GB",avista:4990,parcelado:5640},
      {gb:"256GB",avista:5490,parcelado:6210}
    ]
  },
  {
    id:"iphone-16-plus",cat:"iphone-lacrado",modelo:"iPhone 16 Plus",lancamento:"2024",destaque:false,
    cores:[
      {nome:"Preto",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-plus-black-select-202409?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-plus-white-select-202409?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Rosa",hex:"#F2C4CF",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-plus-pink-select-202409?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Teal",hex:"#B0D4D1",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-plus-teal-select-202409?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Ultramarino",hex:"#7B8EDE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-plus-ultramarine-select-202409?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"128GB",avista:5490,parcelado:6210},
      {gb:"256GB",avista:5990,parcelado:6780}
    ]
  },
  {
    id:"iphone-16-pro",cat:"iphone-lacrado",modelo:"iPhone 16 Pro",lancamento:"2024",destaque:true,
    cores:[
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Deserto",hex:"#BFA48E",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-deserttitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-blacktitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Branco",hex:"#F2F1EB",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-whitetitanium-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"128GB",avista:6490,parcelado:7340},
      {gb:"256GB",avista:6990,parcelado:7900},
      {gb:"512GB",avista:7990,parcelado:9030},
      {gb:"1TB",avista:9490,parcelado:10730}
    ]
  },
  {
    id:"iphone-16-pro-max",cat:"iphone-lacrado",modelo:"iPhone 16 Pro Max",lancamento:"2024",destaque:true,
    cores:[
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-max-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Deserto",hex:"#BFA48E",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-max-deserttitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-max-blacktitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Branco",hex:"#F2F1EB",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-max-whitetitanium-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"256GB",avista:7990,parcelado:9030},
      {gb:"512GB",avista:8990,parcelado:10160},
      {gb:"1TB",avista:10490,parcelado:11860}
    ]
  },
  {
    id:"iphone-17-pro",cat:"iphone-lacrado",modelo:"iPhone 17 Pro",lancamento:"2025",destaque:true,
    cores:[
      {nome:"Prateado",hex:"#E0E0E0",img:"img/iphone-17-pro-silver.png"},
      {nome:"Laranja Cósmico",hex:"#D4764A",img:"img/iphone-17-pro-orange.png"},
      {nome:"Azul Intenso",hex:"#2A4B7C",img:"img/iphone-17-pro-blue.png"}
    ],
    memorias:[
      {gb:"256GB",avista:8490,parcelado:9600},
      {gb:"512GB",avista:9490,parcelado:10730}
    ]
  },
  {
    id:"iphone-17-pro-max",cat:"iphone-lacrado",modelo:"iPhone 17 Pro Max",lancamento:"2025",destaque:true,
    cores:[
      {nome:"Prateado",hex:"#E0E0E0",img:"img/iphone-17-pro-max-silver.png"},
      {nome:"Laranja Cósmico",hex:"#D4764A",img:"img/iphone-17-pro-max-orange.png"},
      {nome:"Azul Intenso",hex:"#2A4B7C",img:"img/iphone-17-pro-max-blue.png"}
    ],
    memorias:[
      {gb:"256GB",avista:9490,parcelado:10730},
      {gb:"512GB",avista:10490,parcelado:11860},
      {gb:"1TB",avista:11990,parcelado:13550}
    ]
  },

  // ─── iPHONE SEMINOVOS ─────────────────────────────────
  {
    id:"semi-iphone-12",cat:"iphone-semi",modelo:"iPhone 12",lancamento:"2020",destaque:false,
    cores:[
      {nome:"Preto",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"64GB",avista:2150,parcelado:2430},{gb:"128GB",avista:2450,parcelado:2770}]
  },
  {
    id:"semi-iphone-12-pro",cat:"iphone-semi",modelo:"iPhone 12 Pro",lancamento:"2020",destaque:false,
    cores:[
      {nome:"Grafite",hex:"#54524F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Dourado",hex:"#FCEBD3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul Pacífico",hex:"#2D4E5C",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:2600,parcelado:2940},{gb:"256GB",avista:2900,parcelado:3280}]
  },
  {
    id:"semi-iphone-13",cat:"iphone-semi",modelo:"iPhone 13",lancamento:"2021",destaque:false,
    cores:[
      {nome:"Meia-noite",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F5E6CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Rosa",hex:"#FADDD7",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:2750,parcelado:3110}]
  },
  {
    id:"semi-iphone-13-pro",cat:"iphone-semi",modelo:"iPhone 13 Pro",lancamento:"2021",destaque:false,
    cores:[
      {nome:"Grafite",hex:"#54524F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Dourado",hex:"#FCEBD3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-gold-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul Serra",hex:"#9BB5CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:3350,parcelado:3790},{gb:"256GB",avista:3650,parcelado:4130}]
  },
  {
    id:"semi-iphone-14",cat:"iphone-semi",modelo:"iPhone 14",lancamento:"2022",destaque:true,
    cores:[
      {nome:"Meia-noite",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F5E6CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-starlight-select-202209?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Roxo",hex:"#E5DDEA",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-purple-select-202209?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:2950,parcelado:3350}]
  },
  {
    id:"semi-iphone-14-pro",cat:"iphone-semi",modelo:"iPhone 14 Pro",lancamento:"2022",destaque:true,
    cores:[
      {nome:"Roxo Profundo",hex:"#594F63",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-deeppurple-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Dourado",hex:"#F4E8CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-gold-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Prateado",hex:"#F1F2ED",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-silver-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Preto Espacial",hex:"#403E3D",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-spaceblack-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:3850,parcelado:4350},{gb:"256GB",avista:4250,parcelado:4810}]
  },
  {
    id:"semi-iphone-14-pro-max",cat:"iphone-semi",modelo:"iPhone 14 Pro Max",lancamento:"2022",destaque:false,
    cores:[
      {nome:"Roxo Profundo",hex:"#594F63",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-deeppurple-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Dourado",hex:"#F4E8CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-gold-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Preto Espacial",hex:"#403E3D",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-spaceblack-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:4550,parcelado:5150},{gb:"256GB",avista:4950,parcelado:5600}]
  },
  {
    id:"semi-iphone-15",cat:"iphone-semi",modelo:"iPhone 15",lancamento:"2023",destaque:true,
    cores:[
      {nome:"Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-black-select-202309?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul",hex:"#D4E4EF",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select-202309?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Rosa",hex:"#F2D4CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pink-select-202309?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:3550,parcelado:4100}]
  },
  {
    id:"semi-iphone-15-pro",cat:"iphone-semi",modelo:"iPhone 15 Pro",lancamento:"2023",destaque:false,
    cores:[
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Azul",hex:"#3D4F5C",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-bluetitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blacktitanium-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:4250,parcelado:4810},{gb:"256GB",avista:4750,parcelado:5370}]
  },
  {
    id:"semi-iphone-15-pro-max",cat:"iphone-semi",modelo:"iPhone 15 Pro Max",lancamento:"2023",destaque:false,
    cores:[
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blacktitanium-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"256GB",avista:5300,parcelado:5990},{gb:"512GB",avista:6100,parcelado:6900}]
  },

  // ─── APPLE WATCH ──────────────────────────────────────
  {
    id:"watch-se",cat:"watch",modelo:"Apple Watch SE",lancamento:"3a ger.",destaque:false,
    cores:[
      {nome:"Meia-noite",hex:"#1C1C1E",img:"img/watch-se.png"},
      {nome:"Estelar",hex:"#F5E6CE",img:"img/watch-se-starlight.png"}
    ],
    memorias:[{gb:"40mm",avista:2000,parcelado:2260},{gb:"44mm",avista:2300,parcelado:2600}]
  },
  {
    id:"watch-s11",cat:"watch",modelo:"Apple Watch Series 11",lancamento:"2025",destaque:true,
    cores:[
      {nome:"Cinza Espacial",hex:"#6B6B6F",img:"img/watch-s11-spacegray.png"},
      {nome:"Prateado",hex:"#E0E0E0",img:"img/watch-s11-silver.png"},
      {nome:"Rose",hex:"#E8CDBE",img:"img/watch-s11.png"}
    ],
    memorias:[{gb:"42mm",avista:3650,parcelado:4150},{gb:"46mm",avista:3750,parcelado:4300}]
  },
  {
    id:"watch-ultra2",cat:"watch",modelo:"Apple Watch Ultra 2",lancamento:"2024",destaque:true,
    cores:[
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"img/watch-ultra.png"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"img/watch-ultra-black.png"}
    ],
    memorias:[{gb:"49mm",avista:4950,parcelado:5693}]
  },

  // ─── AIRPODS ──────────────────────────────────────────
  {
    id:"airpods-pro3",cat:"airpods",modelo:"AirPods Pro 3",lancamento:"2025",destaque:true,
    cores:[{nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=470&hei=556&fmt=png-alpha"}],
    memorias:[{gb:"",avista:2400,parcelado:2600}]
  },
  {
    id:"airpods-4",cat:"airpods",modelo:"AirPods 4a geracao",lancamento:"2024",destaque:false,
    cores:[{nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-hero-select-202409?wid=470&hei=556&fmt=png-alpha"}],
    memorias:[{gb:"",avista:1500,parcelado:1717}]
  },
  {
    id:"airpods-max",cat:"airpods",modelo:"AirPods Max",lancamento:"2024",destaque:true,
    cores:[
      {nome:"Meia-noite",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F5E6CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-starlight?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul",hex:"#7BA5C1",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-blue?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Laranja",hex:"#E8733A",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-orange?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Roxo",hex:"#8D6FA0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-202409-purple?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"",avista:3850,parcelado:4350}]
  },

  // ─── iPAD ─────────────────────────────────────────────
  {
    id:"ipad-11",cat:"ipad",modelo:"iPad (11a geracao)",lancamento:"2025",destaque:true,
    cores:[
      {nome:"Prata",hex:"#E0E0E0",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-2022-hero-silver-wifi-select?wid=400&hei=400&fmt=png-alpha"},
      {nome:"Azul",hex:"#4C7AA3",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-2022-hero-blue-wifi-select?wid=400&hei=400&fmt=png-alpha"},
      {nome:"Rosa",hex:"#E8B4B8",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-2022-hero-pink-wifi-select?wid=400&hei=400&fmt=png-alpha"},
      {nome:"Amarelo",hex:"#F5E050",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-2022-hero-yellow-wifi-select?wid=400&hei=400&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:3250,parcelado:3700}]
  },
  {
    id:"pencil-usbc",cat:"ipad",modelo:"Apple Pencil USB-C",lancamento:"iPad 10, Air",destaque:false,
    cores:[{nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUWA3?wid=400&hei=400&fmt=png-alpha"}],
    memorias:[{gb:"",avista:1000,parcelado:1130}]
  },
  {
    id:"pencil-pro",cat:"ipad",modelo:"Apple Pencil Pro",lancamento:"iPad Air, Pro",destaque:false,
    cores:[{nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MU8F2_AV1?wid=400&hei=400&fmt=png-alpha"}],
    memorias:[{gb:"",avista:1000,parcelado:1130}]
  },

  // ─── MACBOOK ──────────────────────────────────────────
  {
    id:"macbook-m1",cat:"macbook",modelo:"MacBook Air M1",lancamento:"2020",destaque:false,
    cores:[
      {nome:"Cinza Espacial",hex:"#7A7B7F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=400&hei=400&fmt=png-alpha"},
      {nome:"Prateado",hex:"#E0E0E0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-20220606?wid=400&hei=400&fmt=png-alpha"}
    ],
    memorias:[{gb:"256GB",avista:4550,parcelado:5150}]
  },
  {
    id:"macbook-m2",cat:"macbook",modelo:"MacBook Air M2",lancamento:"2022",destaque:true,
    cores:[
      {nome:"Meia-noite",hex:"#2E3642",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=400&hei=400&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F0E4D3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-starlight-select-20220606?wid=400&hei=400&fmt=png-alpha"},
      {nome:"Prateado",hex:"#E0E0E0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-20220606?wid=400&hei=400&fmt=png-alpha"}
    ],
    memorias:[{gb:"256GB",avista:5750,parcelado:6500}]
  },
  {
    id:"macbook-m3",cat:"macbook",modelo:"MacBook Air M3",lancamento:"2024",destaque:true,
    cores:[
      {nome:"Meia-noite",hex:"#2E3642",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=400&hei=400&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F0E4D3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-starlight-select-20220606?wid=400&hei=400&fmt=png-alpha"},
      {nome:"Prateado",hex:"#E0E0E0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-20220606?wid=400&hei=400&fmt=png-alpha"}
    ],
    memorias:[{gb:"256GB",avista:7900,parcelado:8930}]
  }
,

  // ─── OPORTUNIDADES (Trade-in / Usados com preço especial) ─
  {
    id:"oport-iphone-11",cat:"oportunidade",modelo:"iPhone 11",lancamento:"2019",destaque:false,
    estado:"Bateria 85% ·Tela impecável",
    cores:[
      {nome:"Preto",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"64GB",avista:1490,parcelado:1690}]
  },
  {
    id:"oport-iphone-12-mini",cat:"oportunidade",modelo:"iPhone 12 Mini",lancamento:"2020",destaque:false,
    estado:"Bateria 90% ·Sem marcas de uso",
    cores:[
      {nome:"Azul",hex:"#023E73",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"64GB",avista:1690,parcelado:1910}]
  },
  {
    id:"oport-iphone-13-128",cat:"oportunidade",modelo:"iPhone 13",lancamento:"2021",destaque:true,
    estado:"Bateria 92% ·Estado de novo",
    cores:[
      {nome:"Estelar",hex:"#F5E6CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:2290,parcelado:2590}]
  },
  {
    id:"oport-iphone-13-pro",cat:"oportunidade",modelo:"iPhone 13 Pro",lancamento:"2021",destaque:true,
    estado:"Bateria 88% ·Tela perfeita, traseira impecável",
    cores:[
      {nome:"Azul Serra",hex:"#9BB5CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:2790,parcelado:3150}]
  },
  {
    id:"oport-iphone-14-128",cat:"oportunidade",modelo:"iPhone 14",lancamento:"2022",destaque:true,
    estado:"Bateria 95% ·Usado 6 meses, como novo",
    cores:[
      {nome:"Meia-noite",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:2590,parcelado:2930}]
  },
  {
    id:"oport-iphone-14-pro-256",cat:"oportunidade",modelo:"iPhone 14 Pro",lancamento:"2022",destaque:true,
    estado:"Bateria 91% ·Perfeito estado, com caixa original",
    cores:[
      {nome:"Dourado",hex:"#F4E8CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-gold-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"256GB",avista:3690,parcelado:4170}]
  }
];


// ═══════════════════════════════════════════════════════════
// CATEGORIAS
// ═══════════════════════════════════════════════════════════
const CATEGORIAS = [
  {id:"oportunidade",nome:"Oportunidades",icon:"fa-fire",emoji:"🔥"},
  {id:"iphone-lacrado",nome:"iPhone Lacrados",icon:"fa-mobile-screen",emoji:"📱"},
  {id:"iphone-semi",nome:"iPhone Seminovos",icon:"fa-mobile-screen-button",emoji:"📲"},
  {id:"watch",nome:"Apple Watch",icon:"fa-clock",emoji:"⌚"},
  {id:"airpods",nome:"AirPods",icon:"fa-headphones",emoji:"🎧"},
  {id:"ipad",nome:"iPad & Pencil",icon:"fa-tablet-screen-button",emoji:"📟"},
  {id:"macbook",nome:"MacBook",icon:"fa-laptop",emoji:"💻"}
];

// SUB-FILTROS (versão do iPhone: Normal, Pro, Pro Max)
const VERSOES_IPHONE = [
  {id:"todos",nome:"Todos"},
  {id:"normal",nome:"Normal",match:m=>!m.includes("Pro")&&!m.includes("Plus")},
  {id:"plus",nome:"Plus",match:m=>m.includes("Plus")},
  {id:"pro",nome:"Pro",match:m=>m.includes("Pro")&&!m.includes("Max")},
  {id:"pro-max",nome:"Pro Max",match:m=>m.includes("Pro Max")}
];


// ═══════════════════════════════════════════════════════════
// TEMAS SAZONAIS (banner muda automaticamente)
// ═══════════════════════════════════════════════════════════
const TEMAS = [
  {inicio:"01-01",fim:"01-15",nome:"Ano Novo",emoji:"🎆",banner:"Comece o ano com um iPhone novo!",cor1:"#FFD700",cor2:"#1A1A1A"},
  {inicio:"02-01",fim:"02-28",nome:"Carnaval",emoji:"🎭",banner:"Carnaval de ofertas!",cor1:"#8B00FF",cor2:"#FF6B00"},
  {inicio:"03-01",fim:"03-31",nome:"Consumidor",emoji:"🛒",banner:"Mês do consumidor ·melhores preços!",cor1:"#1DB954",cor2:"#0D6B2F"},
  {inicio:"05-01",fim:"05-31",nome:"Dia das Mães",emoji:"💝",banner:"O melhor presente pra melhor mãe!",cor1:"#E91E63",cor2:"#9C27B0"},
  {inicio:"06-01",fim:"06-15",nome:"Namorados",emoji:"💕",banner:"Surpreenda quem você ama!",cor1:"#E53935",cor2:"#FF1744"},
  {inicio:"08-01",fim:"08-15",nome:"Dia dos Pais",emoji:"👔",banner:"Presente de pai: iPhone novo!",cor1:"#1565C0",cor2:"#0D47A1"},
  {inicio:"09-01",fim:"09-30",nome:"Lançamento",emoji:"🍎",banner:"Novos iPhones chegaram!",cor1:"#000000",cor2:"#333333"},
  {inicio:"11-15",fim:"11-30",nome:"Black Friday",emoji:"🖤",banner:"Black Friday ·descontos insanos!",cor1:"#000000",cor2:"#FFD700"},
  {inicio:"12-01",fim:"12-31",nome:"Natal",emoji:"🎄",banner:"Natal: o presente perfeito!",cor1:"#C62828",cor2:"#2E7D32"}
];

function getTemaSazonal(){
  const h=new Date(),mm=String(h.getMonth()+1).padStart(2,'0'),dd=String(h.getDate()).padStart(2,'0'),a=mm+'-'+dd;
  for(const t of TEMAS){if(a>=t.inicio&&a<=t.fim)return t}
  return{nome:LOJA.nome,emoji:"🏠",banner:LOJA.slogan,cor1:LOJA.cores.grad1,cor2:LOJA.cores.grad2};
}


// ═══════════════════════════════════════════════════════════
// CATÁLOGO ATIVO (localStorage do admin ou padrão)
// ═══════════════════════════════════════════════════════════
function getCatalogo(){
  try{
    const saved=localStorage.getItem('ihome_catalogo');
    if(saved){return JSON.parse(saved)}
  }catch(e){}
  return CATALOGO_PADRAO;
}

const CATALOGO = getCatalogo();
