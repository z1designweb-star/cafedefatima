
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'INÍCIO', href: '#' },
    { label: 'COMPRAR CAFÉ', href: '#store' },
    { label: 'ASSINATURAS', href: '#store' },
    { label: 'CONTATO', href: '#contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo/Brand */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-sm group-hover:border-coffee-gold transition-colors">
             {/* Coffee Cup Icon */}
             <svg className="w-6 h-6 text-white group-hover:text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 10h1a2 2 0 012 2v2a2 2 0 01-2 2h-1m-10-6h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2m3-9v3m4-3v3M8 1h8" />
             </svg>
          </div>
          <span className="text-2xl font-serif font-bold tracking-widest text-white uppercase">
            CAFÉ DE <span className="text-coffee-gold">FÁTIMA</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold tracking-[0.2em] text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-coffee-dark/95 backdrop-blur-md border-t border-white/10 py-6 animate-fade-in shadow-2xl">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-8 py-4 text-xs font-bold tracking-widest text-white/80 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
