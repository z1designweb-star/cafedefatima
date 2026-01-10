
import React from 'react';

const Regions: React.FC = () => {
  const regions = [
    {
      title: 'Sul de Minas Gerais',
      brand: 'Unique Cafés',
      // Convertendo link do Drive para link direto de imagem
      image: 'https://drive.google.com/uc?export=view&id=1Iw5GnfYkeCSBT5KBDyUXKjLKrg34jP6l',
      description: 'A maior região produtora de cafés especiais do mundo. Com altitudes entre 900m e 1.250m, o solo fértil e clima ameno produzem cafés com corpo equilibrado, doçura acentuada e notas clássicas de chocolate e castanhas.',
      highlights: ['Altitude elevada', 'Tradição centenária', 'Corpo aveludado']
    },
    {
      title: 'Chapada Diamantina (Bahia)',
      brand: 'Latitude 13°',
      // Convertendo link do Drive para link direto de imagem
      image: 'https://drive.google.com/uc?export=view&id=10KXWOnkeGFuyqkQ3EfUiQPiHTv334UAc',
      description: 'Um terroir único no coração da Bahia. O microclima da Chapada Diamantina, com suas noites frias e dias ensolarados, permite uma maturação lenta dos frutos, resultando em cafés de alta complexidade, acidez brilhante e notas florais.',
      highlights: ['Microclima singular', 'Complexidade aromática', 'Sustentabilidade']
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {regions.map((region) => (
        <div key={region.title} className="group overflow-hidden bg-stone-50 border border-stone-200 hover:shadow-xl transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={region.image} 
              alt={region.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback caso o link do drive falhe temporariamente
                const target = e.target as HTMLImageElement;
                target.src = region.title.includes('Minas') 
                  ? 'https://images.unsplash.com/photo-1524350303359-382a334d2847?auto=format&fit=crop&q=80&w=800'
                  : 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800';
              }}
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded text-xs font-bold uppercase tracking-wider text-coffee-dark">
              {region.brand}
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-serif text-coffee-dark mb-4">{region.title}</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              {region.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {region.highlights.map(tag => (
                <span key={tag} className="text-xs font-medium px-3 py-1 bg-coffee-gold/10 text-coffee-gold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Regions;
