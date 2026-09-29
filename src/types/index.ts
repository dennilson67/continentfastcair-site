export interface CompanyConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappDefaultMessage: string;
  email: string;
  address: {
    street: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    mapsUrl: string;
    embedMapUrl: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  instagram: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
  equipment: string;
  turnaroundTime: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technicalDetail: string;
  timeframe: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  vehicle: string;
  repairType: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  completedDate: string;
  details: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Funilaria' | 'Pintura' | 'Fast Repair' | 'Restauração';
  vehicle: string;
  year: string;
  image: string;
  span: 'normal' | 'tall' | 'wide';
  description: string;
  processSummary: string;
}

export interface Lead {
  id: string;
  createdAt: string;
  name: string;
  whatsapp: string;
  vehicleModel: string;
  vehicleYear: string;
  serviceType: string;
  message: string;
  photos: string[];
  status: 'NOVO' | 'EM CONTATO' | 'ORÇAMENTO' | 'APROVADO' | 'CONCLUÍDO' | 'PERDIDO';
  notes?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  vehicle: string;
  service: string;
  date: string;
  comment: string;
  rating: number;
}
