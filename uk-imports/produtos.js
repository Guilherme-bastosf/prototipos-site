/*
  UK IMPORTS — BANCO DE PRODUTOS
  Para editar: use o painel admin (/admin.html)
*/

const PRODUTOS = [
  // ========== iPHONE LACRADOS ==========
  {id:"L01",cat:"iphone-lacrado",nome:"iPhone 12",storage:"64GB",avista:2900,parcelado:3280,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=400&hei=400&fmt=png-alpha",cor:"Preto",destaque:false,status:"disponivel"},
  {id:"L02",cat:"iphone-lacrado",nome:"iPhone 13",storage:"128GB",avista:3750,parcelado:4240,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:false,status:"disponivel"},
  {id:"L03",cat:"iphone-lacrado",nome:"iPhone 14",storage:"128GB",avista:3950,parcelado:4470,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:false,status:"disponivel"},
  {id:"L04",cat:"iphone-lacrado",nome:"iPhone 15",storage:"128GB",avista:4450,parcelado:5030,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-black-select-202309?wid=400&hei=400&fmt=png-alpha",cor:"Preto",destaque:true,status:"disponivel"},
  {id:"L05",cat:"iphone-lacrado",nome:"iPhone 16",storage:"128GB",avista:4850,parcelado:5480,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-black-select-202409?wid=400&hei=400&fmt=png-alpha",cor:"Preto",destaque:true,status:"disponivel"},
  {id:"L06",cat:"iphone-lacrado",nome:"iPhone 16 Plus",storage:"128GB",avista:5350,parcelado:6045,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-plus-black-select-202409?wid=400&hei=400&fmt=png-alpha",cor:"Preto",destaque:false,status:"disponivel"},
  {id:"L07",cat:"iphone-lacrado",nome:"iPhone 17 Pro",storage:"256GB",avista:8150,parcelado:9250,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-desert-select-202409?wid=400&hei=400&fmt=png-alpha",cor:"Titânio",destaque:true,status:"disponivel"},
  {id:"L08",cat:"iphone-lacrado",nome:"iPhone 17 Pro Max",storage:"256GB",avista:8750,parcelado:9887,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-max-desert-select-202409?wid=400&hei=400&fmt=png-alpha",cor:"Titânio",destaque:true,status:"disponivel"},

  // ========== iPHONE SEMINOVOS ==========
  {id:"S01",cat:"iphone-semi",nome:"iPhone 12",storage:"64GB",avista:2150,parcelado:2285,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=400&hei=400&fmt=png-alpha",cor:"Preto",destaque:false,status:"disponivel"},
  {id:"S02",cat:"iphone-semi",nome:"iPhone 13",storage:"128GB",avista:2750,parcelado:3110,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:false,status:"disponivel"},
  {id:"S03",cat:"iphone-semi",nome:"iPhone 12 Pro",storage:"128GB",avista:2600,parcelado:2940,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=400&hei=400&fmt=png-alpha",cor:"Grafite",destaque:false,status:"disponivel"},
  {id:"S04",cat:"iphone-semi",nome:"iPhone 12 Pro Max",storage:"128GB",avista:3000,parcelado:3390,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=400&hei=400&fmt=png-alpha",cor:"Grafite",destaque:false,status:"disponivel"},
  {id:"S05",cat:"iphone-semi",nome:"iPhone 13 Pro",storage:"128GB",avista:3350,parcelado:3790,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=400&hei=400&fmt=png-alpha",cor:"Grafite",destaque:false,status:"disponivel"},
  {id:"S06",cat:"iphone-semi",nome:"iPhone 13 Pro Max",storage:"128GB",avista:3650,parcelado:4130,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=400&hei=400&fmt=png-alpha",cor:"Grafite",destaque:false,status:"disponivel"},
  {id:"S07",cat:"iphone-semi",nome:"iPhone 14",storage:"128GB",avista:2950,parcelado:3350,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-midnight-select-202209?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:true,status:"disponivel"},
  {id:"S08",cat:"iphone-semi",nome:"iPhone 14 Pro",storage:"128GB",avista:3850,parcelado:4350,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=400&hei=400&fmt=png-alpha",cor:"Roxo",destaque:true,status:"disponivel"},
  {id:"S09",cat:"iphone-semi",nome:"iPhone 14 Pro Max",storage:"128GB",avista:4550,parcelado:5150,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=400&hei=400&fmt=png-alpha",cor:"Roxo",destaque:false,status:"disponivel"},
  {id:"S10",cat:"iphone-semi",nome:"iPhone 15",storage:"128GB",avista:3550,parcelado:4100,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-black-select-202309?wid=400&hei=400&fmt=png-alpha",cor:"Preto",destaque:true,status:"disponivel"},
  {id:"S11",cat:"iphone-semi",nome:"iPhone 15 Pro",storage:"128GB",avista:4250,parcelado:4810,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-natural-select-202309?wid=400&hei=400&fmt=png-alpha",cor:"Titânio Natural",destaque:false,status:"disponivel"},
  {id:"S12",cat:"iphone-semi",nome:"iPhone 15 Pro Max",storage:"256GB",avista:5000,parcelado:5600,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-max-natural-select-202309?wid=400&hei=400&fmt=png-alpha",cor:"Titânio Natural",destaque:false,status:"disponivel"},

  // ========== APPLE WATCH ==========
  {id:"W01",cat:"watch",nome:"Apple Watch SE 2ª ger.",storage:"40mm",avista:2000,parcelado:2260,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-702702-702?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:false,status:"disponivel"},
  {id:"W02",cat:"watch",nome:"Apple Watch SE 2ª ger.",storage:"44mm",avista:2300,parcelado:2600,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-702702-702?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:false,status:"disponivel"},
  {id:"W03",cat:"watch",nome:"Apple Watch Series 11",storage:"42mm",avista:3650,parcelado:4150,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-702-702?wid=400&hei=400&fmt=png-alpha",cor:"Alumínio",destaque:true,status:"disponivel"},
  {id:"W04",cat:"watch",nome:"Apple Watch Series 11",storage:"46mm",avista:3750,parcelado:4300,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s10-702-702?wid=400&hei=400&fmt=png-alpha",cor:"Alumínio",destaque:false,status:"disponivel"},
  {id:"W05",cat:"watch",nome:"Apple Watch Ultra 2",storage:"49mm",avista:4950,parcelado:5693,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra-702-702?wid=400&hei=400&fmt=png-alpha",cor:"Titânio",destaque:true,status:"disponivel"},

  // ========== AIRPODS ==========
  {id:"A01",cat:"airpods",nome:"AirPods Pro 3",storage:"",avista:2400,parcelado:2600,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=png-alpha",cor:"Branco",destaque:true,status:"disponivel"},
  {id:"A02",cat:"airpods",nome:"AirPods 4ª geração",storage:"",avista:1500,parcelado:1717,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-4-hero-select-202409?wid=400&hei=400&fmt=png-alpha",cor:"Branco",destaque:false,status:"disponivel"},
  {id:"A03",cat:"airpods",nome:"AirPods Max",storage:"",avista:3850,parcelado:4350,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202409?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:true,status:"disponivel"},

  // ========== iPAD ==========
  {id:"P01",cat:"ipad",nome:"iPad 11",storage:"128GB",avista:3250,parcelado:3700,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-702-702?wid=400&hei=400&fmt=png-alpha",cor:"Prata",destaque:true,status:"disponivel"},
  {id:"P02",cat:"ipad",nome:"Apple Pencil 1ª ger.",storage:"iPad 9, 10",avista:1000,parcelado:1130,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-pencil-702-702?wid=400&hei=400&fmt=png-alpha",cor:"Branco",destaque:false,status:"disponivel"},
  {id:"P03",cat:"ipad",nome:"Apple Pencil 2ª ger.",storage:"iPad Air, Pro",avista:1000,parcelado:1130,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-pencil-2nd-702-702?wid=400&hei=400&fmt=png-alpha",cor:"Branco",destaque:false,status:"disponivel"},

  // ========== MACBOOK ==========
  {id:"M01",cat:"macbook",nome:"MacBook Air M1",storage:"256GB",avista:4550,parcelado:5150,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:false,status:"disponivel"},
  {id:"M02",cat:"macbook",nome:"MacBook Air M2",storage:"256GB",avista:5750,parcelado:6500,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:true,status:"disponivel"},
  {id:"M03",cat:"macbook",nome:"MacBook Air M3",storage:"256GB",avista:7900,parcelado:8930,img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20240304?wid=400&hei=400&fmt=png-alpha",cor:"Meia-noite",destaque:true,status:"disponivel"}
];

// CATEGORIAS
const CATEGORIAS = [
  {id:"iphone-lacrado",nome:"iPhone Lacrados",icon:"fa-mobile-screen",desc:"Novos, lacrados com nota fiscal"},
  {id:"iphone-semi",nome:"iPhone Seminovos",icon:"fa-mobile-screen-button",desc:"Seminovos com garantia"},
  {id:"watch",nome:"Apple Watch",icon:"fa-clock",desc:"Smartwatches Apple"},
  {id:"airpods",nome:"AirPods",icon:"fa-headphones",desc:"Fones Apple"},
  {id:"ipad",nome:"iPad & Pencil",icon:"fa-tablet-screen-button",desc:"Tablets e acessórios"},
  {id:"macbook",nome:"MacBook",icon:"fa-laptop",desc:"Notebooks Apple"}
];

// TEMAS SAZONAIS (muda automaticamente)
const TEMAS = [
  {inicio:"01-01",fim:"01-15",nome:"Ano Novo",emoji:"🎆",banner:"Comece o ano com um iPhone novo!",cor1:"#FFD700",cor2:"#1A1A1A"},
  {inicio:"02-01",fim:"02-28",nome:"Carnaval",emoji:"🎭",banner:"Carnaval de ofertas UK Imports!",cor1:"#8B00FF",cor2:"#FF6B00"},
  {inicio:"03-01",fim:"03-31",nome:"Março",emoji:"📱",banner:"Mês do consumidor: melhores preços!",cor1:"#C8102E",cor2:"#012169"},
  {inicio:"05-01",fim:"05-31",nome:"Dia das Mães",emoji:"💝",banner:"O melhor presente pra melhor mãe!",cor1:"#E91E63",cor2:"#9C27B0"},
  {inicio:"06-01",fim:"06-15",nome:"Dia dos Namorados",emoji:"💕",banner:"Surpreenda quem você ama!",cor1:"#E53935",cor2:"#FF1744"},
  {inicio:"08-01",fim:"08-15",nome:"Dia dos Pais",emoji:"👔",banner:"Presente de pai: iPhone novo!",cor1:"#1565C0",cor2:"#0D47A1"},
  {inicio:"09-01",fim:"09-30",nome:"Lançamento Apple",emoji:"🍎",banner:"Novos iPhones chegaram!",cor1:"#000000",cor2:"#333333"},
  {inicio:"11-15",fim:"11-30",nome:"Black Friday",emoji:"🖤",banner:"Black Friday UK: descontos insanos!",cor1:"#000000",cor2:"#FFD700"},
  {inicio:"12-01",fim:"12-31",nome:"Natal",emoji:"🎄",banner:"Natal UK Imports: presente perfeito!",cor1:"#C62828",cor2:"#2E7D32"}
];

function getTemaSazonal(){
  const hoje = new Date();
  const mm = String(hoje.getMonth()+1).padStart(2,'0');
  const dd = String(hoje.getDate()).padStart(2,'0');
  const atual = mm+'-'+dd;
  for(const t of TEMAS){
    if(atual >= t.inicio && atual <= t.fim) return t;
  }
  return {nome:"UK Imports",emoji:"🇬🇧",banner:"iPhones com nota fiscal e a menor taxa!",cor1:"#C8102E",cor2:"#012169"};
}
