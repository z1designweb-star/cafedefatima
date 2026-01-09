
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { CoffeeOrigin, CoffeeGrind } from '../types';
import Subscriptions from './Subscriptions';

const Store: React.FC = () => {
  const [originFilter, setOriginFilter] = useState<CoffeeOrigin | 'Todos'>('Todos');
  const [grindType, setGrindType] = useState<CoffeeGrind>('Grãos');

  const filteredProducts = originFilter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.origin === originFilter);

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-serif text-coffee-dark mb-4">Loja Café de Fátima</h1>
          <p className="text-stone-600">Explore nossa curadoria de cafés especiais brasileiros.</p>
        </header>

        {/* Section 4: Subscriptions within the store page as well */}
        <section className="mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl font-serif text-coffee-dark">Planos de Assinatura</h2>
            <div className="h-px flex-grow bg-stone-200"></div>
          </div>
          <Subscriptions />
        </section>

        {/* Individual Sales */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-serif text-coffee-dark">Vendas Avulsas</h2>
              <div className="hidden md:block h-px w-24 bg-stone-200"></div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex bg-white border border-stone-200 p-1 rounded">
                {(['Todos', 'Sul de Minas', 'Chapada Diamantina'] as const).map(opt => (
                  <button
                    key={opt}
                    onClick={() => setOriginFilter(opt)}
                    className={`px-4 py-2 text-sm rounded transition-all ${
                      originFilter === opt ? 'bg-coffee-dark text-white shadow-md' : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2 bg-white border border-stone-200 px-4 py-2 rounded text-sm text-stone-600">
                <span>Moagem:</span>
                <select 
                  value={grindType} 
                  onChange={(e) => setGrindType(e.target.value as CoffeeGrind)}
                  className="outline-none font-bold text-coffee-dark"
                >
                  <option value="Grãos">Em Grãos</option>
                  <option value="Moído">Moído</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white group overflow-hidden border border-stone-100 hover:shadow-xl transition-all">
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 text-[10px] font-bold uppercase text-stone-500 rounded">
                    {product.origin}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[10px] font-bold text-coffee-gold uppercase tracking-widest mb-1">{product.brand}</div>
                  <h3 className="text-lg font-bold text-coffee-dark mb-2 leading-tight">{product.name}</h3>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.notes.map(note => (
                      <span key={note} className="text-[10px] bg-stone-100 px-2 py-0.5 rounded text-stone-500">{note}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-coffee-dark">R$ {product.price.toFixed(2)}</span>
                    <button className="p-2 rounded-full border border-stone-200 hover:bg-coffee-dark hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Store;
