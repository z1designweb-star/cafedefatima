
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold mb-6">Café de Fátima</h2>
            <p className="text-stone-400 max-w-sm leading-relaxed mb-8">
              Nossa missão é democratizar o acesso aos melhores grãos brasileiros, 
              valorizando os produtores e as origens que fazem do Brasil o maior 
              celeiro de cafés do mundo.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Navegação</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-white">Início</a></li>
              <li><a href="#store" className="hover:text-white">Comprar Café</a></li>
              <li><a href="#store" className="hover:text-white">Assinaturas</a></li>
              <li><a href="#contact" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Regiões</h3>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li><a href="#regions" className="hover:text-white">Sul de Minas Gerais</a></li>
              <li><a href="#regions" className="hover:text-white">Chapada Diamantina</a></li>
              <li><a href="#regions" className="hover:text-white">Unique Cafés</a></li>
              <li><a href="#regions" className="hover:text-white">Latitude 13°</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; 2024 Café de Fátima. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
