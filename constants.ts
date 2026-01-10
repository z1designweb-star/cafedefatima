
import { Product, SubscriptionPlan } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'lat-13-classico',
    name: 'Latitude 13 Clássico 250g',
    brand: 'Latitude 13°',
    origin: 'Chapada Diamantina',
    description: 'Representa o legítimo e tradicional sabor do café brasileiro. Produzido em altitudes acima de 1.000 metros com grãos 100% arábica. Torra clássica e acentuada, resultando em um café equilibrado, encorpado e de aroma marcante.',
    price: 43.00,
    image: 'https://lh3.googleusercontent.com/d/1eHv-byLImwkVbzINEMDq8y9oAu-qZLT-',
    notes: ['Tradicional', 'Encorpado', '100% Arábica']
  },
  {
    id: 'lat-13-blend',
    name: 'Latitude 13 Blend 250g',
    brand: 'Latitude 13°',
    origin: 'Chapada Diamantina',
    description: 'Elaborado a partir de lotes exclusivos da Fazenda Progresso com grãos em maturação perfeita. Torra cuidadosa para preservar características aromáticas. Na xícara, destacam-se aromas florais, frutados e um corpo sedoso.',
    price: 43.00,
    image: 'https://lh3.googleusercontent.com/d/1K_NhwqAa1XDgScEVgwx1pUyjRvd4MYjO',
    notes: ['Floral', 'Frutado', 'Corpo Sedoso']
  },
  {
    id: 'unique-blend',
    name: 'Unique Blend 250g',
    brand: 'Unique Cafés',
    origin: 'Sul de Minas',
    description: 'Equilíbrio perfeito entre Unique Frutado e Bourbon Amarelo. Aroma intenso e sabor doce com notas de caramelo. Torra cor chocolate ao leite. Origem: Mantiqueira de Minas (Carmo de Minas). Safra 2025/2026. Nota SCA: 85-86.',
    price: 57.00,
    image: 'https://lh3.googleusercontent.com/d/1tf2zuoDLetE73H_w77ajjXpQIeDCMYtu',
    notes: ['Caramelo', 'Bourbon Amarelo', 'Doce']
  },
  {
    id: 'unique-frutado',
    name: 'Unique Frutado 250g',
    brand: 'Unique Cafés',
    origin: 'Sul de Minas',
    description: 'Bebida doce com sensação aveludada. Amargor reduzido pela doçura natural da fruta. Café de origem única (Mantiqueira de Minas) com destaque para o corpo e notas de chocolate. Safra 2025/2026. Nota SCA: 85-86.',
    price: 57.00,
    image: 'https://lh3.googleusercontent.com/d/1BjVG9BmvTPQbH4r40cJ2TWZi0__ZxsZK',
    notes: ['Chocolate', 'Aveludado', 'Doçura Alta']
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'pastorinhos',
    name: 'Assinatura Pastorinhos 🕊️',
    price: 90.00,
    bags: 2,
    description: 'Simplicidade, devoção e sabor em perfeita harmonia. Inspirada na pureza dos pequenos gestos.',
    features: [
      '2 pacotes de 250g mensais',
      'Variedade de origens e perfis',
      'Envio mensal (frete à parte)',
      'Experiência artesanal autêntica'
    ]
  },
  {
    id: 'tres-segredos',
    name: 'Assinatura Três Segredos ☕✨',
    price: 125.00,
    bags: 3,
    description: 'Descubra os mistérios do sabor através de três origens distintas a cada gole.',
    features: [
      '3 pacotes de 250g selecionados',
      'FRETE GRÁTIS incluso',
      'Diversidade de torra e aromas',
      'Histórias reveladas todo mês'
    ]
  },
  {
    id: 'milagre-sol',
    name: 'Assinatura Milagre do Sol ☀️',
    price: 160.00,
    bags: 4,
    description: 'A revelação máxima do brilho e intensidade dos melhores terroirs brasileiros.',
    features: [
      '4 pacotes de 250g premium',
      'FRETE GRÁTIS incluso',
      'Torra de precisão artesanal',
      'Seleção mais exclusiva da casa'
    ]
  }
];
