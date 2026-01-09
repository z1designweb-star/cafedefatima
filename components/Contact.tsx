
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-coffee-dark text-white p-12">
            <h2 className="text-3xl font-serif mb-6">Contato</h2>
            <p className="text-stone-400 font-light mb-12">
              Estamos aqui para tirar suas dúvidas sobre grãos, preparos ou assinaturas.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/10 rounded">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-stone-500 mb-1">E-mail</div>
                  <div className="text-sm">ola@cafedefatima.com.br</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/10 rounded">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-stone-500 mb-1">Endereço</div>
                  <div className="text-sm">Belo Horizonte, MG - Brasil</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-stone-500">Nome</label>
                  <input type="text" className="w-full border-b border-stone-200 py-2 outline-none focus:border-coffee-gold transition-colors" placeholder="Seu nome completo" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-stone-500">E-mail</label>
                  <input type="email" className="w-full border-b border-stone-200 py-2 outline-none focus:border-coffee-gold transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-stone-500">Assunto</label>
                <select className="w-full border-b border-stone-200 py-2 outline-none focus:border-coffee-gold bg-transparent">
                  <option>Dúvida sobre cafés</option>
                  <option>Problema com pedido</option>
                  <option>Assinaturas</option>
                  <option>Outros</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-stone-500">Mensagem</label>
                <textarea rows={4} className="w-full border-b border-stone-200 py-2 outline-none focus:border-coffee-gold transition-colors resize-none" placeholder="Como podemos ajudar?"></textarea>
              </div>
              
              <button type="submit" className="bg-coffee-dark text-white px-8 py-3 rounded-sm font-medium hover:bg-stone-800 transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
