
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { CoffeeOrigin, CoffeeGrind, Product } from '../types';
import Subscriptions from './Subscriptions';

const Store: React.FC = () => {
  const [originFilter, setOriginFilter] = useState<CoffeeOrigin | 'Todos'>('Todos');
  const [grindType, setGrindType] = useState<CoffeeGrind>('Grãos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = originFilter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.origin === originFilter);

  const whatsappNumber = "5581991605039";

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-serif text-coffee-dark mb-4">Loja Café de Fátima</h1>
          <p className="text-stone-600 font-light">Explore nossa curadoria de cafés especiais brasileiros.</p>
        </header>

        {/* Vendas Individuais - AGORA PRIMEIRO */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-serif text-coffee-dark">Vendas Avulsas</h2>
              <div className="hidden md:block h-px w-24 bg-stone-200"></div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex bg-white border border-stone-200 p-1 rounded shadow-sm">
                {(['Todos', 'Sul de Minas', 'Chapada Diamantina'] as const).map(opt => (
                  <button
                    key={opt}
                    onClick={() => setOriginFilter(opt)}
                    className={`px-4 py-2 text-sm font-medium rounded transition-all ${
                      originFilter === opt ? 'bg-coffee-dark text-white shadow-md' : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-2 bg-white border border-stone-200 px-4 py-2 rounded text-sm text-stone-600 shadow-sm">
                <span>Moagem:</span>
                <select 
                  value={grindType} 
                  onChange={(e) => setGrindType(e.target.value as CoffeeGrind)}
                  className="outline-none font-bold text-coffee-dark bg-transparent"
                >
                  <option value="Grãos">Em Grãos</option>
                  <option value="Moído">Moído</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white group overflow-hidden border border-stone-200 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-coffee-dark rounded shadow-sm">
                    {product.origin}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-[11px] font-bold text-coffee-gold uppercase tracking-[0.2em] mb-2">{product.brand}</div>
                  <h3 className="text-xl font-serif font-bold text-coffee-dark mb-3 leading-tight group-hover:text-coffee-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-stone-500 line-clamp-2 mb-4 font-light leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100 gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-stone-400 font-light">Valor</span>
                      <span className="text-xl font-bold text-coffee-dark font-serif">
                        R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setSelectedProduct(product)}
                        className="p-2 rounded-sm bg-stone-100 text-stone-500 hover:bg-stone-200 transition-colors"
                        title="Ver detalhes"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de comprar o café: ${product.name} (${grindType})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-coffee-dark text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors rounded-sm"
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assinaturas - AGORA SEGUNDO */}
        <section className="mb-24">
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl font-serif text-coffee-dark">Planos de Assinatura</h2>
            <div className="h-px flex-grow bg-stone-200"></div>
          </div>
          <Subscriptions />
        </section>
      </div>

      {/* Modal de Descrição Completa */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto relative rounded-sm shadow-2xl">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-coffee-dark transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10">
                <span className="text-xs font-bold text-coffee-gold uppercase tracking-widest mb-2 block">{selectedProduct.brand}</span>
                <h2 className="text-3xl font-serif text-coffee-dark mb-4">{selectedProduct.name}</h2>
                <div className="flex items-center space-x-2 mb-6">
                   <span className="text-[10px] bg-stone-100 px-3 py-1 text-stone-600 font-bold uppercase tracking-wider border border-stone-200 rounded-full">
                    {selectedProduct.origin}
                  </span>
                </div>
                
                <div className="prose prose-stone prose-sm mb-8">
                  <p className="text-stone-600 leading-relaxed font-light italic">
                    "{selectedProduct.description}"
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Notas Sensoriais</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.notes.map(note => (
                      <span key={note} className="text-xs bg-stone-50 border border-stone-100 px-4 py-2 text-stone-700 font-medium italic">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <span className="text-2xl font-bold text-coffee-dark font-serif">
                    R$ {selectedProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de comprar o café: ${selectedProduct.name} (${grindType})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-coffee-dark text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors shadow-lg"
                  >
                    Pedir agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;
