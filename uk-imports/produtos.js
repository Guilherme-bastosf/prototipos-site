/*
  UK IMPORTS — CATÁLOGO DE PRODUTOS APPLE
  Estrutura: Modelo > Cores (com foto) > Memórias (com preço)
*/

const CATALOGO = [

  // ═══════════════════════════════════════
  // iPHONE LACRADOS
  // ═══════════════════════════════════════
  {
    id:"iphone-12",cat:"iphone-lacrado",modelo:"iPhone 12",lancamento:"2020",destaque:false,
    cores:[
      {nome:"Preto",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul",hex:"#023E73",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Verde",hex:"#D4EDBC",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-green-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Vermelho",hex:"#BF0013",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"64GB",avista:2900,parcelado:3280}
    ]
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
    memorias:[
      {gb:"128GB",avista:3750,parcelado:4240}
    ]
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
    memorias:[
      {gb:"128GB",avista:3950,parcelado:4470}
    ]
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
      {gb:"128GB",avista:4450,parcelado:5030}
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
      {gb:"128GB",avista:4850,parcelado:5480}
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
      {gb:"128GB",avista:5350,parcelado:6045}
    ]
  },
  {
    id:"iphone-17-pro",cat:"iphone-lacrado",modelo:"iPhone 17 Pro",lancamento:"2025",destaque:true,
    cores:[
      {nome:"Titânio Deserto",hex:"#BFA48E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-17-black-select-202509?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-17-white-select-202509?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-17-black-select-202509?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Branco",hex:"#F2F1EB",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-17-white-select-202509?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"256GB",avista:8150,parcelado:9250}
    ]
  },
  {
    id:"iphone-17-pro-max",cat:"iphone-lacrado",modelo:"iPhone 17 Pro Max",lancamento:"2025",destaque:true,
    cores:[
      {nome:"Titânio Deserto",hex:"#BFA48E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-17-black-select-202509?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-17-white-select-202509?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-17-black-select-202509?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Branco",hex:"#F2F1EB",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-17-white-select-202509?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"256GB",avista:8750,parcelado:9887}
    ]
  },

  // ═══════════════════════════════════════
  // iPHONE SEMINOVOS
  // ═══════════════════════════════════════
  {
    id:"semi-iphone-12",cat:"iphone-semi",modelo:"iPhone 12",lancamento:"2020",destaque:false,
    cores:[
      {nome:"Preto",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-white-select-2020?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"64GB",avista:2150,parcelado:2285}]
  },
  {
    id:"semi-iphone-12-pro",cat:"iphone-semi",modelo:"iPhone 12 Pro",lancamento:"2020",destaque:false,
    cores:[
      {nome:"Grafite",hex:"#54524F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Dourado",hex:"#FCEBD3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul Pacífico",hex:"#2D4E5C",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:2600,parcelado:2940}]
  },
  {
    id:"semi-iphone-12-pro-max",cat:"iphone-semi",modelo:"iPhone 12 Pro Max",lancamento:"2020",destaque:false,
    cores:[
      {nome:"Grafite",hex:"#54524F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Dourado",hex:"#FCEBD3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:3000,parcelado:3390}]
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
    memorias:[{gb:"128GB",avista:3350,parcelado:3790}]
  },
  {
    id:"semi-iphone-13-pro-max",cat:"iphone-semi",modelo:"iPhone 13 Pro Max",lancamento:"2021",destaque:false,
    cores:[
      {nome:"Grafite",hex:"#54524F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Dourado",hex:"#FCEBD3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-gold-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:3650,parcelado:4130}]
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
    memorias:[{gb:"128GB",avista:3850,parcelado:4350}]
  },
  {
    id:"semi-iphone-14-pro-max",cat:"iphone-semi",modelo:"iPhone 14 Pro Max",lancamento:"2022",destaque:false,
    cores:[
      {nome:"Roxo Profundo",hex:"#594F63",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-deeppurple-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Dourado",hex:"#F4E8CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-gold-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Preto Espacial",hex:"#403E3D",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-spaceblack-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:4550,parcelado:5150}]
  },
  {
    id:"semi-iphone-15",cat:"iphone-semi",modelo:"iPhone 15",lancamento:"2023",destaque:true,
    cores:[
      {nome:"Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-black-select-202309?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul",hex:"#D4E4EF",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-blue-select-202309?wid=470&hei=556&fmt=png-alpha"}
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
    memorias:[{gb:"128GB",avista:4250,parcelado:4810}]
  },
  {
    id:"semi-iphone-15-pro-max",cat:"iphone-semi",modelo:"iPhone 15 Pro Max",lancamento:"2023",destaque:false,
    cores:[
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-naturaltitanium-select?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-blacktitanium-select?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"256GB",avista:5000,parcelado:5600}]
  },

  // ═══════════════════════════════════════
  // APPLE WATCH
  // ═══════════════════════════════════════
  {
    id:"watch-se",cat:"watch",modelo:"Apple Watch SE",lancamento:"2ª ger.",destaque:false,
    cores:[
      {nome:"Meia-noite",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU93?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F5E6CE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU93?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"40mm",avista:2000,parcelado:2260},
      {gb:"44mm",avista:2300,parcelado:2600}
    ]
  },
  {
    id:"watch-s11",cat:"watch",modelo:"Apple Watch Series 11",lancamento:"2025",destaque:true,
    cores:[
      {nome:"Alumínio Meia-noite",hex:"#1C1C1E",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXL73?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Alumínio Prateado",hex:"#E0E0E0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXL73?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Alumínio Rosé",hex:"#E8CDBE",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXL73?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"42mm",avista:3650,parcelado:4150},
      {gb:"46mm",avista:3750,parcelado:4300}
    ]
  },
  {
    id:"watch-ultra2",cat:"watch",modelo:"Apple Watch Ultra 2",lancamento:"2024",destaque:true,
    cores:[
      {nome:"Titânio Natural",hex:"#C2B8A3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Titânio Preto",hex:"#3C3B3F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[
      {gb:"49mm",avista:4950,parcelado:5693}
    ]
  },

  // ═══════════════════════════════════════
  // AIRPODS
  // ═══════════════════════════════════════
  {
    id:"airpods-pro3",cat:"airpods",modelo:"AirPods Pro 3",lancamento:"2025",destaque:true,
    cores:[{nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=470&hei=556&fmt=png-alpha"}],
    memorias:[{gb:"",avista:2400,parcelado:2600}]
  },
  {
    id:"airpods-4",cat:"airpods",modelo:"AirPods 4ª geração",lancamento:"2024",destaque:false,
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

  // ═══════════════════════════════════════
  // iPAD
  // ═══════════════════════════════════════
  {
    id:"ipad-11",cat:"ipad",modelo:"iPad (11ª geração)",lancamento:"2025",destaque:true,
    cores:[
      {nome:"Prata",hex:"#E0E0E0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Azul",hex:"#4C7AA3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Rosa",hex:"#E8B4B8",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Amarelo",hex:"#F5E050",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDT3?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"128GB",avista:3250,parcelado:3700}]
  },
  {
    id:"pencil-1",cat:"ipad",modelo:"Apple Pencil 1ª ger.",lancamento:"iPad 9, 10",destaque:false,
    cores:[{nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0C2?wid=470&hei=556&fmt=png-alpha"}],
    memorias:[{gb:"",avista:1000,parcelado:1130}]
  },
  {
    id:"pencil-2",cat:"ipad",modelo:"Apple Pencil 2ª ger.",lancamento:"iPad Air, Pro",destaque:false,
    cores:[{nome:"Branco",hex:"#F5F5F0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU8F2?wid=470&hei=556&fmt=png-alpha"}],
    memorias:[{gb:"",avista:1000,parcelado:1130}]
  },

  // ═══════════════════════════════════════
  // MACBOOK
  // ═══════════════════════════════════════
  {
    id:"macbook-m1",cat:"macbook",modelo:"MacBook Air M1",lancamento:"2020",destaque:false,
    cores:[
      {nome:"Cinza Espacial",hex:"#7A7B7F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Dourado",hex:"#F9D4B7",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Prateado",hex:"#E0E0E0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"256GB",avista:4550,parcelado:5150}]
  },
  {
    id:"macbook-m2",cat:"macbook",modelo:"MacBook Air M2",lancamento:"2022",destaque:true,
    cores:[
      {nome:"Meia-noite",hex:"#2E3642",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F0E4D3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Cinza Espacial",hex:"#7A7B7F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Prateado",hex:"#E0E0E0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"256GB",avista:5750,parcelado:6500}]
  },
  {
    id:"macbook-m3",cat:"macbook",modelo:"MacBook Air M3",lancamento:"2024",destaque:true,
    cores:[
      {nome:"Meia-noite",hex:"#2E3642",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Estelar",hex:"#F0E4D3",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Cinza Espacial",hex:"#7A7B7F",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=470&hei=556&fmt=png-alpha"},
      {nome:"Prateado",hex:"#E0E0E0",img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=470&hei=556&fmt=png-alpha"}
    ],
    memorias:[{gb:"256GB",avista:7900,parcelado:8930}]
  }
];

// CATEGORIAS
const CATEGORIAS = [
  {id:"iphone-lacrado",nome:"iPhone Lacrados",icon:"fa-mobile-screen",emoji:"📱"},
  {id:"iphone-semi",nome:"iPhone Seminovos",icon:"fa-mobile-screen-button",emoji:"📲"},
  {id:"watch",nome:"Apple Watch",icon:"fa-clock",emoji:"⌚"},
  {id:"airpods",nome:"AirPods",icon:"fa-headphones",emoji:"🎧"},
  {id:"ipad",nome:"iPad & Pencil",icon:"fa-tablet-screen-button",emoji:"📟"},
  {id:"macbook",nome:"MacBook",icon:"fa-laptop",emoji:"💻"}
];

// TEMAS SAZONAIS
const TEMAS = [
  {inicio:"01-01",fim:"01-15",nome:"Ano Novo",emoji:"🎆",banner:"Comece o ano com um iPhone novo!",cor1:"#FFD700",cor2:"#1A1A1A"},
  {inicio:"02-01",fim:"02-28",nome:"Carnaval",emoji:"🎭",banner:"Carnaval de ofertas UK Imports!",cor1:"#8B00FF",cor2:"#FF6B00"},
  {inicio:"03-01",fim:"03-31",nome:"Consumidor",emoji:"🛒",banner:"Mês do consumidor: melhores preços!",cor1:"#C8102E",cor2:"#012169"},
  {inicio:"05-01",fim:"05-31",nome:"Dia das Mães",emoji:"💝",banner:"O melhor presente pra melhor mãe!",cor1:"#E91E63",cor2:"#9C27B0"},
  {inicio:"06-01",fim:"06-15",nome:"Namorados",emoji:"💕",banner:"Surpreenda quem você ama!",cor1:"#E53935",cor2:"#FF1744"},
  {inicio:"08-01",fim:"08-15",nome:"Dia dos Pais",emoji:"👔",banner:"Presente de pai: iPhone novo!",cor1:"#1565C0",cor2:"#0D47A1"},
  {inicio:"09-01",fim:"09-30",nome:"Lançamento",emoji:"🍎",banner:"Novos iPhones chegaram!",cor1:"#000000",cor2:"#333333"},
  {inicio:"11-15",fim:"11-30",nome:"Black Friday",emoji:"🖤",banner:"Black Friday UK: descontos insanos!",cor1:"#000000",cor2:"#FFD700"},
  {inicio:"12-01",fim:"12-31",nome:"Natal",emoji:"🎄",banner:"Natal UK Imports: presente perfeito!",cor1:"#C62828",cor2:"#2E7D32"}
];

function getTemaSazonal(){
  const h=new Date(),mm=String(h.getMonth()+1).padStart(2,'0'),dd=String(h.getDate()).padStart(2,'0'),a=mm+'-'+dd;
  for(const t of TEMAS){if(a>=t.inicio&&a<=t.fim)return t}
  return{nome:"UK Imports",emoji:"🇬🇧",banner:"iPhones com nota fiscal e a menor taxa!",cor1:"#C8102E",cor2:"#012169"};
}
