
import React from 'react';

const Contact: React.FC = () => {
  const googleFormUrl = "https://forms.gle/f4buPZVSfMiTi9gB8";
  const whatsappNumber = "5581991605039";

  return (
    <div className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          {/* Informações de Contato */}
          <div className="md:w-2/5 bg-coffee-dark text-white p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-serif mb-6">Contato</h2>
              <p className="text-stone-400 font-light mb-12 leading-relaxed">
                Estamos prontos para atender você. Escolha o canal de sua preferência.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-white/10 rounded-sm">
                    <svg className="w-6 h-6 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1 font-bold">E-mail</div>
                    <a href="mailto:contato@cafedefatima.com.br" className="text-lg font-light hover:text-coffee-gold transition-colors">contato@cafedefatima.com.br</a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-white/10 rounded-sm">
                    <svg className="w-6 h-6 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1 font-bold">Telefone & WhatsApp</div>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-lg font-light hover:text-coffee-gold transition-colors">(81) 9 9160-5039</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5">
                  <div className="p-3 bg-white/10 rounded-sm">
                    <svg className="w-6 h-6 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1 font-bold">Endereço</div>
                    <div className="text-lg font-light leading-snug">
                      Rua Aluisio de Azevedo, 200<br />
                      Recife, Pernambuco
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10 mt-12">
              <p className="text-[10px] uppercase tracking-widest text-stone-500">Atendimento</p>
              <p className="text-sm font-light text-stone-300 mt-2">Segunda a Sexta: 09h às 18h</p>
            </div>
          </div>
          
          {/* Seção do Formulário Externo */}
          <div className="md:w-3/5 p-12 md:p-20 flex flex-col items-center justify-center text-center">
            <div className="max-w-md">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-serif text-coffee-dark mb-6">Envie uma mensagem</h3>
              <p className="text-stone-500 font-light mb-10 leading-relaxed">
                Para orçamentos personalizados, dúvidas técnicas ou parcerias, preencha nosso formulário oficial de atendimento. É rápido e seguro.
              </p>
              
              <a 
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-coffee-dark text-white px-12 py-5 rounded-sm font-bold text-xs tracking-[0.2em] uppercase hover:bg-stone-800 transition-all shadow-xl hover:-translate-y-1"
              >
                Abrir Formulário de Contato
              </a>
              
              <div className="mt-12 flex items-center justify-center space-x-2 text-stone-400 text-xs">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Sua privacidade é garantida.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
