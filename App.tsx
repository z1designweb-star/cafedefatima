
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Regions from './components/Regions';
import Subscriptions from './components/Subscriptions';
import Footer from './components/Footer';
import Store from './components/Store';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'store' | 'contact' | 'privacy' | 'terms'>('home');

  // Simple hash-based router simulation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Reconhece hashes de loja e suas subseções
      const isStore = hash === '#store' || hash === '#vendas-avulsas' || hash === '#planos-assinatura' || hash === '#subscriptions';
      
      if (isStore) {
        setCurrentView('store');
      } else if (hash === '#contact') {
        setCurrentView('contact');
      } else if (hash === '#privacy') {
        setCurrentView('privacy');
      } else if (hash === '#terms') {
        setCurrentView('terms');
      } else {
        setCurrentView('home');
      }

      // Só rola para o topo se não estivermos tentando ir para uma seção específica com ID
      if (hash === '' || hash === '#' || hash === '#store' || hash === '#contact' || hash === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#1a120b]">
      <Header isHome={currentView === 'home'} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <section id="hero">
              <Hero onCtaClick={() => window.location.hash = '#vendas-avulsas'} />
            </section>
            
            <section id="regions" className="py-24 bg-[#fcfaf7]">
              <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                  <span className="text-coffee-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">Explore as Origens</span>
                  <h2 className="text-5xl font-serif text-coffee-dark mb-6">Nossas Terroir</h2>
                  <p className="text-stone-500 max-w-2xl mx-auto font-light text-lg">
                    Trabalhamos exclusivamente com duas das regiões mais premiadas do Brasil, 
                    cada uma oferecendo um perfil sensorial único e inconfundível.
                  </p>
                </div>
                <Regions />
              </div>
            </section>

            <section id="subscriptions-preview" className="py-24 bg-stone-100">
              <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                  <span className="text-coffee-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">Experiência Mensal</span>
                  <h2 className="text-5xl font-serif text-coffee-dark mb-6">Clubes de Assinatura</h2>
                  <p className="text-stone-500 max-w-2xl mx-auto font-light text-lg">
                    Receba o frescor dos melhores cafés brasileiros no conforto da sua casa, todos os meses.
                  </p>
                </div>
                <Subscriptions />
              </div>
            </section>
          </>
        )}

        {currentView === 'store' && <Store />}
        
        {currentView === 'contact' && <Contact />}

        {currentView === 'privacy' && <Privacy />}

        {currentView === 'terms' && <Terms />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
