
import { Product, SubscriptionPlan } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'lat-13-classico',
    name: 'Latitude 13 Clássico 250g',
    brand: 'Latitude 13°',
    origin: 'Chapada Diamantina',
    description: 'Representa o legítimo e tradicional sabor do café brasileiro. Produzido em altitudes acima de 1.000 metros com grãos 100% arábica. Torra clássica e acentuada, resultando em um café equilibrado, encorpado e de aroma marcante.',
    price: 43.00,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    notes: ['Tradicional', 'Encorpado', '100% Arábica']
  },
  {
    id: 'lat-13-blend',
    name: 'Latitude 13 Blend 250g',
    brand: 'Latitude 13°',
    origin: 'Chapada Diamantina',
    description: 'Elaborado a partir de lotes exclusivos da Fazenda Progresso com grãos em maturação perfeita. Torra cuidadosa para preservar características aromáticas. Na xícara, destacam-se aromas florais, frutados e um corpo sedoso.',
    price: 43.00,
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800',
    notes: ['Floral', 'Frutado', 'Corpo Sedoso']
  },
  {
    id: 'unique-blend',
    name: 'Unique Blend 250g',
    brand: 'Unique Cafés',
    origin: 'Sul de Minas',
    description: 'Equilíbrio perfeito entre Unique Frutado e Bourbon Amarelo. Aroma intenso e sabor doce com notas de caramelo. Torra cor chocolate ao leite. Origem: Mantiqueira de Minas (Carmo de Minas). Safra 2025/2026. Nota SCA: 85-86.',
    price: 57.00,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=800',
    notes: ['Caramelo', 'Bourbon Amarelo', 'Doce']
  },
  {
    id: 'unique-frutado',
    name: 'Unique Frutado 250g',
    brand: 'Unique Cafés',
    origin: 'Sul de Minas',
    description: 'Bebida doce com sensação aveludada. Amargor reduzido pela doçura natural da fruta. Café de origem única (Mantiqueira de Minas) com destaque para o corpo e notas de chocolate. Safra 2025/2026. Nota SCA: 85-86.',
    price: 57.00,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    notes: ['Chocolate', 'Aveludado', 'Doçura Alta']
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
