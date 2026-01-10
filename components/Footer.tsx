
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
              {/* Instagram Icon */}
              <a 
                href="https://www.instagram.com/cafedefatimabr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-coffee-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.339-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.614-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* X (Twitter) Icon */}
              <a 
                href="https://x.com/cafedefatimabr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-coffee-gold transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"/>
                </svg>
              </a>

              {/* Message (WhatsApp) Icon */}
              <a 
                href="https://wa.me/5581991605039" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-coffee-gold transition-colors"
                aria-label="Mensagem"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </a>

              {/* Email Icon */}
              <a 
                href="mailto:contato@cafedefatima.com.br" 
                className="text-stone-400 hover:text-coffee-gold transition-colors"
                aria-label="E-mail"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
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
          <p>&copy; 2026 Café de Fátima. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#privacy" className="hover:text-white">Privacidade</a>
            <a href="#terms" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
