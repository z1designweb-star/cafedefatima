
import React from 'react';

const Regions: React.FC = () => {
  const regions = [
    {
      title: 'Sul de Minas Gerais',
      brand: 'Unique Cafés',
      // Link direto para visualização da imagem no Google Drive usando lh3.googleusercontent.com
      image: 'https://lh3.googleusercontent.com/d/1Iw5GnfYkeCSBT5KBDyUXKjLKrg34jP6l',
      description: 'A maior região produtora de cafés especiais do mundo. Com altitudes entre 900m e 1.250m, o solo fértil e clima ameno produzem cafés com corpo equilibrado, doçura acentuada e notas clássicas de chocolate e castanhas.',
      highlights: ['Altitude elevada', 'Tradição centenária', 'Corpo aveludado']
    },
    {
      title: 'Chapada Diamantina (Bahia)',
      brand: 'Latitude 13°',
      // Link direto para visualização da imagem no Google Drive usando lh3.googleusercontent.com
      image: 'https://lh3.googleusercontent.com/d/10KXWOnkeGFuyqkQ3EfUiQPiHTv334UAc',
      description: 'Um terroir único no coração da Bahia. O microclima da Chapada Diamantina, com suas noites frias e dias ensolarados, permite uma maturação lenta dos frutos, resultando em cafés de alta complexidade, acidez brilhante e notas florais.',
      highlights: ['Microclima singular', 'Complexidade aromática', 'Sustentabilidade']
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {regions.map((region) => (
        <div key={region.title} className="group overflow-hidden bg-white border border-stone-200 hover:shadow-2xl transition-all duration-500 rounded-sm">
          <div className="relative h-72 overflow-hidden bg-stone-200">
            <img 
              src={region.image} 
              alt={region.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = region.title.includes('Minas') 
                  ? 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
                  : 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800';
              }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-coffee-dark shadow-sm">
              {region.brand}
            </div>
          </div>
          <div className="p-10">
            <h3 className="text-3xl font-serif text-coffee-dark mb-5">{region.title}</h3>
            <p className="text-stone-600 mb-8 leading-relaxed font-light text-lg">
              {region.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {region.highlights.map(tag => (
                <span key={tag} className="text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 bg-stone-100 text-stone-500 border border-stone-200 rounded-full">
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
