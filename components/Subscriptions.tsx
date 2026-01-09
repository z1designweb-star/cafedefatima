
import React from 'react';
import { SUBSCRIPTION_PLANS } from '../constants';

const Subscriptions: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {SUBSCRIPTION_PLANS.map((plan) => (
        <div 
          key={plan.id} 
          className={`flex flex-col p-8 bg-white border border-stone-200 transition-all hover:-translate-y-2 hover:shadow-2xl ${
            plan.id === 'standard' ? 'ring-2 ring-coffee-gold relative scale-105 z-10' : ''
          }`}
        >
          {plan.id === 'standard' && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-coffee-gold text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-tighter">
              Mais Popular
            </div>
          )}
          
          <h3 className="text-xl font-serif font-bold text-coffee-dark mb-2">{plan.name}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-coffee-dark">R$ {plan.price.toFixed(0)}</span>
            <span className="text-stone-400 font-light"> /mês</span>
          </div>
          
          <p className="text-sm text-stone-500 mb-8 flex-grow">
            {plan.description}
          </p>
          
          <ul className="space-y-4 mb-10 text-sm">
            {plan.features.map(feature => (
              <li key={feature} className="flex items-start space-x-3 text-stone-600">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <button 
            className={`w-full py-4 rounded font-semibold transition-colors ${
              plan.id === 'standard' 
                ? 'bg-coffee-dark text-white hover:bg-stone-800' 
                : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
            }`}
            onClick={() => window.location.hash = '#contact'}
          >
            Assinar Agora
          </button>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;
