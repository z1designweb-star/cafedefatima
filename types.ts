
export type CoffeeOrigin = 'Sul de Minas' | 'Chapada Diamantina';
export type CoffeeGrind = 'Grãos' | 'Moído';

export interface Product {
  id: string;
  name: string;
  brand: string;
  origin: CoffeeOrigin;
  description: string;
  price: number;
  image: string;
  notes: string[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  bags: number;
}
