
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const cards = [
    {
      title: "Seleção Especial",
      desc: "Apenas grãos com pontuação acima de 80 SCAA.",
      icon: (
        <svg className="w-8 h-8 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: "Torra Fresca",
      desc: "Torramos sob demanda para garantir o máximo frescor.",
      icon: (
        <svg className="w-8 h-8 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 001-1m-6 0a1 1 0 001-1" />
        </svg>
      )
    },
    {
      title: "Grão ou Moído",
      desc: "Escolha a moagem ideal para seu método de preparo.",
      icon: (
        <svg className="w-8 h-8 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Origem Única",
      desc: "Rastreabilidade completa de cada microlote.",
      icon: (
        <svg className="w-8 h-8 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center hero-bg overflow-hidden pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="relative z-10 space-y-8 max-w-2xl">
          <div>
            <span className="inline-block bg-coffee-gold text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-[0.2em] mb-6">
              CAFÉS DE ORIGEM CONTROLADA
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8">
              A Essência do Grão Brasileiro na <span className="italic">Sua Xícara.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-xl">
              Exploração sensorial através de grãos selecionados das melhores altitudes do país. 
              Do Sul de Minas à Chapada Diamantina, levamos a história do Brasil até você.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onCtaClick}
              className="group bg-coffee-gold hover:bg-[#b45309] text-white px-10 py-5 rounded font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center space-x-3 shadow-lg"
            >
              <span>Comprar Agora</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <a 
              href="#store" 
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded font-bold text-sm tracking-widest uppercase transition-all text-center"
            >
              Ver Assinaturas
            </a>
          </div>
        </div>

        {/* Right Side: Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-coffee-card backdrop-blur-xl p-8 border border-white/10 rounded-xl hover:border-coffee-gold/50 transition-all group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left">
                {card.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed font-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
      
      {/* Visual Accents */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1a120b] to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
