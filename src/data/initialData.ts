import {
  CompanyConfig,
  ServiceItem,
  ProcessStep,
  BeforeAfterCase,
  PortfolioItem,
  TestimonialItem,
  Lead
} from '../types';

export const INITIAL_COMPANY_CONFIG: CompanyConfig = {
  name: 'Continent Fast Repair',
  tagline: 'Funilaria e Pintura Automotiva de Alta Precisão',
  phone: '+5548991678121',
  phoneDisplay: '(48) 99167-8121',
  whatsapp: '5548991678121',
  whatsappDisplay: '(48) 99167-8121',
  whatsappDefaultMessage: 'Olá! Gostaria de solicitar um orçamento para meu veículo na Continent Fast Repair.',
  email: 'contato@continentfastrepair.com.br',
  address: {
    street: 'R. Visconde Silveira, S/N',
    complement: 'Galpão Industrial',
    neighborhood: 'Jardim Eldorado',
    city: 'Palhoça',
    state: 'SC',
    zipCode: '88133-000',
    mapsUrl: 'https://maps.google.com/?q=R.+Visconde+Silveira,+Jardim+Eldorado,+Palho%C3%A7a+-+SC,+88133-000',
    embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.8879669528994!2d-48.669812!3d-27.645013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527376e1a49f7b1%3A0x7d6a54f0a2fa5b7b!2sR.+Visconde+Silveira+-+Jardim+Eldorado%2C+Palho%C3%A7a+-+SC!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr'
  },
  hours: {
    weekdays: '08:00 — 18:00',
    saturday: '08:00 — 15:00',
    sunday: 'Fechado'
  },
  instagram: 'https://instagram.com/continentfastrepair'
};

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'funilaria',
    number: '01',
    title: 'Funilaria Estrutural e Artesanal',
    shortDescription: 'Recuperação minuciosa e reparação estrutural de lataria e peças plásticas.',
    fullDescription: 'Restauração milimétrica da chapa metálica sem uso excessivo de massas plásticas. Utilizamos ferramentaria de repuxo capacitivo e gabaritos de medição para devolver os vincos e linhas originais desenhados pela montadora.',
    image: '/src/assets/images/body_repair_craft_1790632912968.jpg',
    highlights: [
      'Alinhamento geométrico de vincos originais',
      'Desamassamento com preservação de estrutura',
      'Mínima intervenção para evitar sobrepeso de material',
      'Soldas por ponto robotizado e proteção antiferrugem'
    ],
    equipment: 'Mesa de alinhamento com braço de tração hidráulica & Spotter Eletrônica',
    turnaroundTime: '24h a 72h conforme o diagnóstico'
  },
  {
    id: 'pintura',
    number: '02',
    title: 'Pintura Automotiva em Estufa',
    shortDescription: 'Processos de pintura com colorimetria computadorizada e cura térmica.',
    fullDescription: 'Cabine pressurizada com filtragem absoluta para impedir qualquer poeira ou micropartícula. Espectrofotometria digital para acerto exato da tonalidade da tinta, respeitando o efeito perolizado ou metálico de fábrica.',
    image: '/src/assets/images/paint_booth_process_1790632898682.jpg',
    highlights: [
      'Espectrômetro digital para fidelidade de tom',
      'Cabine de pintura com pressão positiva e cura em alta temperatura',
      'Vernizes de alto sólido com resistência UV extrema',
      'Acabamento com espessura uniforme calibrada com micrômetro'
    ],
    equipment: 'Cabine de pintura pressurizada de fluxo contínuo e pistolas HVLP',
    turnaroundTime: 'Prazos definidos pós-análise técnica'
  },
  {
    id: 'fast-repair',
    number: '03',
    title: 'Fast Repair & Micro Pintura',
    shortDescription: 'Solução rápida e precisa para danos pontuais em para-choques e laterais.',
    fullDescription: 'Metodologia exclusiva de reparação expressa que restringe a área trabalhada estritamente ao ponto de atrito. Ideal para ralados de meio-fio, pequenas batidas e lascas de pedra, mantendo o máximo de pintura original intacta.',
    image: '/src/assets/images/luxury_car_finish_1790632929410.jpg',
    highlights: [
      'Execução expressa para danos localizados',
      'Transição invisível de verniz sem marcas de emenda',
      'Preservação da maior parte da peça de fábrica',
      'Economia de tempo e custo preservando o valor do veículo'
    ],
    equipment: 'Lâmpadas de infravermelho de secagem rápida & polimento rotorbital',
    turnaroundTime: 'Possibilidade de entrega no mesmo dia ou 24h'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Avaliação & Diagnóstico',
    subtitle: 'Inspeção Dimensional',
    description: 'Análise minuciosa sob iluminação técnica para mapear a profundidade do impacto, alinhamento dos gaps e integridade das travas.',
    technicalDetail: 'Mapeamento de desvios milimétricos e orçamento detalhado sem surpresas.',
    timeframe: 'Imediato'
  },
  {
    number: '02',
    title: 'Desmontagem & Preparação',
    subtitle: 'Proteção de Adjacências',
    description: 'Remoção cirúrgica de peças adjacentes (frisos, faróis, borrachas) para garantir que a tinta alcance todas as dobras e cantos internos.',
    technicalDetail: 'Empacotamento estático anti-estática e lixamento a seco com aspiração contínua.',
    timeframe: 'Fase inicial'
  },
  {
    number: '03',
    title: 'Reparação & Conformação',
    subtitle: 'Trabalho de Chaparia',
    description: 'Retorno gradual da chapa aos pontos de ancoragem originais através de spotters controladas e martelos de acabamento fino.',
    technicalDetail: 'Uso de primer epóxi fosfatizante para proteção anticorrosiva vitalícia.',
    timeframe: 'Fase de chaparia'
  },
  {
    number: '04',
    title: 'Pintura em Cabine Climatizada',
    subtitle: 'Aplicação Hermética',
    description: 'Aplicação em ambiente de atmosfera controlada livre de impurezas, com formulação de tinta idêntica ao código de cor do veículo.',
    technicalDetail: 'Pistolas profissionais HVLP e ciclos térmicos de polimerização do verniz.',
    timeframe: 'Fase de estufa'
  },
  {
    number: '05',
    title: 'Polimento Técnico & Nivelamento',
    subtitle: 'Acabamento Espelhado',
    description: 'Nivelamento da textura da casca de laranja para correspondência idêntica com as demais peças originais do carro.',
    technicalDetail: 'Compostos de polimento de corte fino e boinas de lã merino / espuma alemã.',
    timeframe: 'Refinamento'
  },
  {
    number: '06',
    title: 'Inspeção Final & Entrega',
    subtitle: 'Padrão Continent',
    description: 'Checklist rigoroso de controle de qualidade sob luz de alta densidade e conferência de alinhamento com o cliente.',
    technicalDetail: 'Higienização da área tratada e entrega com veículo pronto para rodar.',
    timeframe: 'Validação'
  }
];

export const INITIAL_BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'caso-lateral-sedan',
    title: 'Recuperação de Lateral e Vinco Posterior',
    vehicle: 'Sedan Esportivo Executivo',
    repairType: 'Funilaria Estrutural + Pintura Perolizada',
    description: 'Veículo com amassado profundo no para-lama traseiro e porta, com quebra do vinco de cintura. Chapa recomposta com repuxo eletrônico e pintura perolizada perfeitamente casada sem manchas.',
    beforeImage: '/src/assets/images/before_damage_car_1790632976984.jpg',
    afterImage: '/src/assets/images/after_damage_restored_1790632994339.jpg',
    completedDate: 'Reparo recente',
    details: [
      'Alinhamento do vão entre porta e para-lama restaurado com 3.2mm de tolerância',
      'Eliminação total de ondulação na chapa sem espessura pesada de massa',
      'Aplicação de primer poliuretano de alta aderência',
      'Pintura em estufa com cura térmica e polimento de corte ultra-fino'
    ]
  },
  {
    id: 'caso-parachoque-frente',
    title: 'Recuperação de Para-choque e Grade',
    vehicle: 'SUV Premium 4x4',
    repairType: 'Fast Repair Plástico + Nivelamento Térmico',
    description: 'Atrito dianteiro com deformação plástica e ralado severo no acabamento metálico. Peça restaurada termicamente e repintada sem marcas de emenda.',
    beforeImage: '/src/assets/images/before_damage_car_1790632976984.jpg',
    afterImage: '/src/assets/images/after_damage_restored_1790632994339.jpg',
    completedDate: 'Reparo recente',
    details: [
      'Solda plástica molecular e recuperação de presilhas internas',
      'Aditivação elastificante na base de tinta para evitar trincas futuras',
      'Ajuste milimétrico com farol e capô'
    ]
  }
];

export const INITIAL_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'trabalho-1',
    title: 'Alinhamento & Pintura de Lateral',
    category: 'Funilaria',
    vehicle: 'Sedan Graphite Metallic',
    year: '2026',
    image: '/src/assets/images/body_repair_craft_1790632912968.jpg',
    span: 'normal',
    description: 'Conformação de chapa metálica de alta resistência sem corte de lataria.',
    processSummary: 'Repuxo a frio · Primer epóxi · Nivelamento milimétrico'
  },
  {
    id: 'trabalho-2',
    title: 'Verniz Cerâmico & Cura em Estufa',
    category: 'Pintura',
    vehicle: 'Coupe Esportivo Preto',
    year: '2026',
    image: '/src/assets/images/paint_booth_process_1790632898682.jpg',
    span: 'tall',
    description: 'Pintura completa de capô e para-lama dianteiro em atmosfera estéril.',
    processSummary: 'Pressão positiva · Tinta bicamada · Secagem infravermelha'
  },
  {
    id: 'trabalho-3',
    title: 'Acabamento Espelhado e Polimento',
    category: 'Fast Repair',
    vehicle: 'Hatchback Premium',
    year: '2026',
    image: '/src/assets/images/luxury_car_finish_1790632929410.jpg',
    span: 'normal',
    description: 'Reparo de abrasão em canto de porta com correção óptica completa.',
    processSummary: 'Micro-lixamento 3000 · Boina alemã · Proteção selante'
  },
  {
    id: 'trabalho-4',
    title: 'Restauração de Frente & Geometria',
    category: 'Restauração',
    vehicle: 'Gran Turismo Silver',
    year: '2026',
    image: '/src/assets/images/hero_automotive_dark_1790632889035.jpg',
    span: 'wide',
    description: 'Remontagem e alinhamento milimétrico de frente após colisão moderada.',
    processSummary: 'Gabarito óptico · Calibração de faróis LED · Verniz de alto sólido'
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'depoimento-1',
    name: 'Carlos Eduardo M.',
    vehicle: 'Volkswagen Nivus 2024',
    service: 'Pintura de Para-choque e Paralama',
    date: 'Setembro 2026',
    comment: 'O trabalho feito na Continent foi impecável. A cor bateu perfeitamente com o resto da lataria e o alinhamento das peças ficou melhor do que quando tirei da concessionária. Recomendo de olhos fechados.',
    rating: 5
  },
  {
    id: 'depoimento-2',
    name: 'Juliana P. Silveira',
    vehicle: 'Jeep Compass 2023',
    service: 'Funilaria e Fast Repair de Porta',
    date: 'Agosto 2026',
    comment: 'Passei raspando numa coluna de garagem e achei que precisaria trocar a porta toda. A equipe da Continent recuperou o vinco original sem nenhuma onda e entregaram antes do prazo.',
    rating: 5
  },
  {
    id: 'depoimento-3',
    name: 'Rodrigo B. Santos',
    vehicle: 'BMW Série 3 2022',
    service: 'Recuperação de Lateral e Polimento Técnico',
    date: 'Julho 2026',
    comment: 'Oficina extremamente organizada, limpa e com atendimento direto pelo WhatsApp com fotos de cada etapa. Não tem aquele aspecto de oficina desorganizada, tudo muito técnico e refinado.',
    rating: 5
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-1',
    createdAt: '2026-09-27T14:32:00.000Z',
    name: 'Marcelo Vieira',
    whatsapp: '48998811223',
    vehicleModel: 'Toyota Corolla Cross',
    vehicleYear: '2024',
    serviceType: 'Funilaria e Pintura',
    message: 'Ralado no para-choque dianteiro direito e pequeno amassado na saia lateral.',
    photos: [],
    status: 'ORÇAMENTO',
    notes: 'Cliente enviou 3 fotos no WhatsApp. Orçamento enviado em 28/09.'
  },
  {
    id: 'lead-2',
    createdAt: '2026-09-28T09:15:00.000Z',
    name: 'Ana Paula Rocha',
    whatsapp: '48991234567',
    vehicleModel: 'Audi Q3',
    vehicleYear: '2023',
    serviceType: 'Fast Repair',
    message: 'Batidinha no estacionamento do shopping na tampa traseira.',
    photos: [],
    status: 'NOVO',
    notes: 'Aguardando contato pelo WhatsApp.'
  }
];
