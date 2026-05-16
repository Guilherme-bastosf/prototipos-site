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
  },

  // ============================================================
  // PRÉDIOS
  // ============================================================
  {
    id: "P001",
    tipo: "venda",
    categoria: "predio",
    titulo: "Prédio Comercial 3 Andares",
    descricao: "Prédio comercial com 3 andares, 6 salas, recepção, estacionamento privativo e elevador. Ideal para escritórios, clínicas ou coworking. Localização privilegiada no centro.",
    bairro: "Centro",
    cidade: "Angra dos Reis",
    preco: 2800000,
    quartos: 0,
    suites: 0,
    banheiros: 6,
    vagas: 8,
    area: 450,
    maxHospedes: null,
    condominio: null,
    iptu: 1200,
    nota: null,
    status: "disponivel",
    destaque: true,
    amenidades: ["Elevador", "Estacionamento", "Recepção", "Ar condicionado central", "6 salas", "Portaria"],
    fotos: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    ]
  },

  {
    id: "P002",
    tipo: "aluguel",
    categoria: "predio",
    titulo: "Andar Corporativo 200m²",
    descricao: "Andar inteiro em prédio comercial moderno. 200m² de área útil, open space, 4 banheiros, copa e varanda. Vista para a baía. Pronto para ocupar.",
    bairro: "Centro",
    cidade: "Angra dos Reis",
    preco: 8500,
    quartos: 0,
    suites: 0,
    banheiros: 4,
    vagas: 4,
    area: 200,
    maxHospedes: null,
    condominio: 1800,
    iptu: 600,
    nota: null,
    status: "disponivel",
    destaque: false,
    amenidades: ["Vista baía", "Open space", "Copa", "Varanda", "Elevador", "Ar condicionado"],
    fotos: [
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80"
    ]
  },

  // ============================================================
  // ILHAS
  // ============================================================
  {
    id: "I001",
    tipo: "venda",
    categoria: "ilha",
    titulo: "Ilha Privativa 12.000m²",
    descricao: "Ilha privativa com 12 mil metros quadrados na Baía da Ilha Grande. Casa principal com 4 suítes, casa de caseiro, píer, heliponto e praia exclusiva. Mata atlântica preservada. Oportunidade única.",
    bairro: "Ilha Grande",
    cidade: "Angra dos Reis",
    preco: 15000000,
    quartos: 4,
    suites: 4,
    banheiros: 5,
    vagas: 0,
    area: 12000,
    maxHospedes: null,
    condominio: null,
    iptu: 2500,
    nota: null,
    status: "disponivel",
    destaque: true,
    amenidades: ["Ilha privativa", "Praia exclusiva", "Píer", "Heliponto", "Casa de caseiro", "Mata preservada", "Vista 360°", "Gerador"],
    fotos: [
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
    ]
  },

  {
    id: "I002",
    tipo: "temporada",
    categoria: "ilha",
    titulo: "Ilha Paradisíaca com Day Use",
    descricao: "Ilha exclusiva disponível para day use e temporada. Estrutura com deck, churrasqueira, cozinha equipada e área de lazer. Capacidade para até 20 pessoas. Inclui transporte de lancha.",
    bairro: "Baía da Ilha Grande",
    cidade: "Angra dos Reis",
    preco: 5500,
    quartos: 2,
    suites: 2,
    banheiros: 2,
    vagas: 0,
    area: 3000,
    maxHospedes: 20,
    condominio: null,
    iptu: null,
    nota: 5.0,
    status: "disponivel",
    destaque: true,
    amenidades: ["Ilha exclusiva", "Transporte lancha", "Deck", "Churrasqueira", "Cozinha equipada", "Praia privativa", "Caiaque", "Stand-up paddle"],
    fotos: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80"
    ]
  },

  {
    id: "I003",
    tipo: "venda",
    categoria: "ilha",
    titulo: "Ilha com Mansão Beira-Mar",
    descricao: "Ilha com mansão de luxo. 6 suítes, piscina infinity, píer para iate, helipad, quadra de tênis e praia de areia branca. Staff completo incluso na manutenção. A joia da Baía da Ilha Grande.",
    bairro: "Ilha Grande",
    cidade: "Angra dos Reis",
    preco: 35000000,
    quartos: 6,
    suites: 6,
    banheiros: 8,
    vagas: 0,
    area: 25000,
    maxHospedes: null,
    condominio: null,
    iptu: 5000,
    nota: null,
    status: "disponivel",
    destaque: true,
    amenidades: ["Ilha privativa", "Piscina infinity", "Píer para iate", "Helipad", "Quadra de tênis", "Praia privativa", "Staff completo", "6 suítes", "Gerador", "Dessalinizador"],
    fotos: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    ]
  }

];
