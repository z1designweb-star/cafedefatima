
import React from 'react';
import { SUBSCRIPTION_PLANS } from '../constants';

const Subscriptions: React.FC = () => {
  const whatsappNumber = "5581991605039";

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {SUBSCRIPTION_PLANS.map((plan) => (
        <div 
          key={plan.id} 
          className={`flex flex-col p-8 bg-white border border-stone-200 transition-all hover:-translate-y-2 hover:shadow-2xl ${
            plan.id === 'tres-segredos' ? 'ring-2 ring-coffee-gold relative scale-105 z-10' : ''
          }`}
        >
          {plan.id === 'tres-segredos' && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-coffee-gold text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
              Sugerido
            </div>
          )}
          
          <h3 className="text-xl font-serif font-bold text-coffee-dark mb-2">{plan.name}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-coffee-dark">R$ {plan.price.toFixed(0)},00</span>
            <span className="text-stone-400 font-light text-sm"> /mês</span>
          </div>
          
          <p className="text-sm text-stone-500 mb-8 flex-grow leading-relaxed font-light italic">
            {plan.description}
          </p>
          
          <ul className="space-y-4 mb-10 text-sm">
            {plan.features.map(feature => (
              <li key={feature} className="flex items-start space-x-3 text-stone-600">
                <svg className="w-5 h-5 text-coffee-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-light">{feature}</span>
              </li>
            ))}
          </ul>
          
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais e assinar o plano: ${plan.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 rounded-sm font-bold text-xs tracking-widest uppercase transition-all text-center ${
              plan.id === 'tres-segredos' 
                ? 'bg-coffee-dark text-white hover:bg-stone-800 shadow-md' 
                : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
            }`}
          >
            Assinar Agora
          </a>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;
