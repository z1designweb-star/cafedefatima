
import { Product, SubscriptionPlan } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Unique Clássico',
    brand: 'Unique Cafés',
    origin: 'Sul de Minas',
    description: 'Um café equilibrado com notas de chocolate e caramelo, corpo aveludado e acidez cítrica moderada.',
    price: 45.90,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    notes: ['Chocolate', 'Caramelo', 'Nozes']
  },
  {
    id: '2',
    name: 'Unique Frutado',
    brand: 'Unique Cafés',
    origin: 'Sul de Minas',
    description: 'Perfil exótico com notas intensas de frutas vermelhas e aroma floral marcante.',
    price: 52.00,
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800',
    notes: ['Frutas Vermelhas', 'Floral', 'Doçura Alta']
  },
  {
    id: '3',
    name: 'Latitude 13 Bio',
    brand: 'Latitude 13°',
    origin: 'Chapada Diamantina',
    description: 'Cultivado de forma orgânica no coração da Bahia. Complexidade excepcional e doçura natural.',
    price: 58.00,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=800',
    notes: ['Cítrico', 'Melaço', 'Equilibrado']
  },
  {
    id: '4',
    name: 'Latitude 13 Reserva',
    brand: 'Latitude 13°',
    origin: 'Chapada Diamantina',
    description: 'Lote selecionado das partes mais altas da fazenda, com notas florais de jasmim.',
    price: 64.00,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    notes: ['Jasmim', 'Mel', 'Acidez Brilhante']
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Entusiasta',
    price: 89.00,
    bags: 2,
    description: 'Para quem está começando sua jornada no mundo dos cafés especiais.',
    features: ['2 pacotes de 250g', 'Seleção rotativa', 'Guia de preparo mensal']
  },
  {
    id: 'standard',
    name: 'Apreciador',
    price: 159.00,
    bags: 4,
    description: 'Ideal para quem consome café diariamente e busca variedade.',
    features: ['4 pacotes de 250g', 'Frete Grátis', 'Acesso a lotes exclusivos', 'Brinde surpresa trimestral']
  },
  {
    id: 'premium',
    name: 'Mestre Cafeeiro',
    price: 229.00,
    bags: 6,
    description: 'Para famílias ou escritórios que não abrem mão do melhor café do Brasil.',
    features: ['6 pacotes de 250g', 'Frete Grátis Prioritário', 'Curadoria personalizada', '1 Workshop online semestral']
  }
];
