/*
╔══════════════════════════════════════════════════════════════╗
║  KT IMÓVEIS — BANCO DE IMÓVEIS                              ║
║  Para adicionar um imóvel: copie um bloco, cole abaixo       ║
║  e preencha os campos. Salve o arquivo e faça o deploy.      ║
╚══════════════════════════════════════════════════════════════╝
*/

const IMOVEIS = [

  // ============================================================
  // TEMPORADA
  // ============================================================
  {
    id: "T001",
    tipo: "temporada",          // temporada | venda | aluguel
    categoria: "casa",          // casa | apartamento | terreno | cobertura
    titulo: "Casa com Piscina e Vista Mar",
    descricao: "Ampla casa com 4 quartos, piscina privativa, churrasqueira e vista panorâmica para o mar. Ideal para famílias e grupos. Área de lazer completa com deck e jardim tropical.",
    bairro: "Praia Grande",
    cidade: "Angra dos Reis",
    preco: 850,                 // temporada = por noite | aluguel = mensal | venda = total
    quartos: 4,
    suites: 2,
    banheiros: 3,
    vagas: 2,
    area: 250,                  // m²
    maxHospedes: 10,            // só pra temporada
    condominio: null,           // null se não tiver
    iptu: null,
    nota: 4.9,                  // avaliação (só temporada)
    status: "disponivel",       // disponivel | reservado | vendido
    destaque: true,             // aparece na home
    amenidades: ["Piscina", "Churrasqueira", "Wi-Fi", "Ar condicionado", "Vista mar", "Estacionamento", "Cozinha equipada", "Área de lazer"],
    fotos: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ]
  },

  {
    id: "T002",
    tipo: "temporada",
    categoria: "casa",
    titulo: "Chalé Aconchegante na Montanha",
    descricao: "Chalé rústico e aconchegante em meio à natureza. Perfeito para casais e pequenas famílias que buscam tranquilidade. Churrasqueira, varanda e trilhas próximas.",
    bairro: "Bracuí",
    cidade: "Angra dos Reis",
    preco: 420,
    quartos: 2,
    suites: 1,
    banheiros: 1,
    vagas: 1,
    area: 90,
    maxHospedes: 5,
    condominio: null,
    iptu: null,
    nota: 4.8,
    status: "disponivel",
    destaque: true,
    amenidades: ["Churrasqueira", "Wi-Fi", "Varanda", "Cozinha equipada", "Trilhas", "Natureza"],
    fotos: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    ]
  },

  {
    id: "T003",
    tipo: "temporada",
    categoria: "casa",
    titulo: "Mansão Beira-Mar com Pier",
    descricao: "Mansão de luxo à beira-mar com pier privativo, piscina infinity, 5 suítes e vista deslumbrante. O ápice do conforto em Angra dos Reis. Staff incluso.",
    bairro: "Frade",
    cidade: "Angra dos Reis",
    preco: 1500,
    quartos: 5,
    suites: 5,
    banheiros: 4,
    vagas: 4,
    area: 450,
    maxHospedes: 14,
    condominio: null,
    iptu: null,
    nota: 5.0,
    status: "disponivel",
    destaque: true,
    amenidades: ["Piscina infinity", "Pier privativo", "Wi-Fi", "Ar condicionado", "Vista mar", "Churrasqueira", "Staff", "Cozinha gourmet", "Sauna"],
    fotos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ]
  },

  // ============================================================
  // VENDA
  // ============================================================
  {
    id: "V001",
    tipo: "venda",
    categoria: "casa",
    titulo: "Casa 4 Quartos com Vista Mar",
    descricao: "Casa espaçosa com 4 quartos, sendo 2 suítes, sala ampla com vista mar, cozinha planejada, área gourmet e piscina. Condomínio fechado com segurança 24h.",
    bairro: "Praia Grande",
    cidade: "Angra dos Reis",
    preco: 980000,
    quartos: 4,
    suites: 2,
    banheiros: 3,
    vagas: 2,
    area: 250,
    maxHospedes: null,
    condominio: 800,
    iptu: 350,
    nota: null,
    status: "disponivel",
    destaque: true,
    amenidades: ["Piscina", "Área gourmet", "Vista mar", "Condomínio fechado", "Segurança 24h", "Cozinha planejada"],
    fotos: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ]
  },

  {
    id: "V002",
    tipo: "venda",
    categoria: "casa",
    titulo: "Casa Duplex 3 Quartos",
    descricao: "Linda casa duplex em bairro tranquilo. 3 quartos, sendo 1 suíte master, varanda gourmet, quintal e garagem para 2 carros. Ótima localização.",
    bairro: "Jacuecanga",
    cidade: "Angra dos Reis",
    preco: 650000,
    quartos: 3,
    suites: 1,
    banheiros: 2,
    vagas: 2,
    area: 180,
    maxHospedes: null,
    condominio: null,
    iptu: 280,
    nota: null,
    status: "disponivel",
    destaque: true,
    amenidades: ["Varanda gourmet", "Quintal", "Garagem dupla"],
    fotos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    ]
  },

  {
    id: "V003",
    tipo: "venda",
    categoria: "cobertura",
    titulo: "Cobertura 2 Quartos Vista Baía",
    descricao: "Cobertura com vista panorâmica para a Baía da Ilha Grande. 2 quartos, 2 banheiros, varanda ampla e rooftop exclusivo. Prédio com elevador e portaria.",
    bairro: "Centro",
    cidade: "Angra dos Reis",
    preco: 520000,
    quartos: 2,
    suites: 1,
    banheiros: 2,
    vagas: 1,
    area: 95,
    maxHospedes: null,
    condominio: 650,
    iptu: 200,
    nota: null,
    status: "disponivel",
    destaque: false,
    amenidades: ["Vista baía", "Rooftop", "Elevador", "Portaria"],
    fotos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
    ]
  },

  {
    id: "V004",
    tipo: "venda",
    categoria: "terreno",
    titulo: "Terreno 600m² em Condomínio Fechado",
    descricao: "Terreno plano de 600m² em condomínio fechado no Frade. Infraestrutura completa, ruas asfaltadas, segurança 24h. Pronto para construir.",
    bairro: "Frade",
    cidade: "Angra dos Reis",
    preco: 320000,
    quartos: 0,
    suites: 0,
    banheiros: 0,
    vagas: 0,
    area: 600,
    maxHospedes: null,
    condominio: 400,
    iptu: 180,
    nota: null,
    status: "disponivel",
    destaque: true,
    amenidades: ["Condomínio fechado", "Segurança 24h", "Plano", "Infraestrutura completa"],
    fotos: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
    ]
  },

  // ============================================================
  // ALUGUEL ANUAL
  // ============================================================
  {
    id: "A001",
    tipo: "aluguel",
    categoria: "apartamento",
    titulo: "Apartamento 2 Quartos Mobiliado",
    descricao: "Apartamento totalmente mobiliado com 2 quartos, sala, cozinha americana e varanda. Prédio com portaria e perto da praia. Pronto para morar.",
    bairro: "Praia da Ribeira",
    cidade: "Angra dos Reis",
    preco: 1800,
    quartos: 2,
    suites: 0,
    banheiros: 1,
    vagas: 1,
    area: 75,
    maxHospedes: null,
    condominio: 450,
    iptu: 150,
    nota: null,
    status: "disponivel",
    destaque: true,
    amenidades: ["Mobiliado", "Portaria", "Varanda", "Perto da praia"],
    fotos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
    ]
  },

  {
    id: "A002",
    tipo: "aluguel",
    categoria: "casa",
    titulo: "Casa 3 Quartos com Quintal",
    descricao: "Casa ampla com 3 quartos, quintal espaçoso, garagem e bairro tranquilo. Ideal para famílias. Próximo a escolas e comércio.",
    bairro: "Japuíba",
    cidade: "Angra dos Reis",
    preco: 2200,
    quartos: 3,
    suites: 1,
    banheiros: 2,
    vagas: 2,
    area: 120,
    maxHospedes: null,
    condominio: null,
    iptu: 200,
    nota: null,
    status: "disponivel",
    destaque: true,
    amenidades: ["Quintal", "Garagem dupla", "Bairro tranquilo"],
    fotos: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
    ]
  }

];

/*
╔══════════════════════════════════════════════════════════════╗
║  COMO ADICIONAR UM NOVO IMÓVEL:                             ║
║                                                              ║
║  1. Copie um bloco acima (de { até },)                       ║
║  2. Cole antes do ];                                         ║
║  3. Mude o id (ex: V005, A003, T004)                        ║
║  4. Preencha todos os campos                                 ║
║  5. Para fotos: use links diretos de imagens                 ║
║     (Google Drive, Imgur, ou qualquer URL de imagem)          ║
║  6. Salve o arquivo e faça o deploy                          ║
║                                                              ║
║  TIPOS: "temporada" | "venda" | "aluguel"                    ║
║  CATEGORIAS: "casa" | "apartamento" | "terreno" | "cobertura"║
║  STATUS: "disponivel" | "reservado" | "vendido"              ║
╚══════════════════════════════════════════════════════════════╝
*/
