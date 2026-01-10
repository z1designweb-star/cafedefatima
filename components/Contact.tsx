
import React from 'react';

const Contact: React.FC = () => {
  const googleFormUrl = "https://forms.gle/f4buPZVSfMiTi9gB8";
  const whatsappNumber = "5581991605039";

  return (
    <div className="min-h-screen bg-coffee-dark py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Coluna de Informações (Baseada no Print) */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 md:mb-8">Contato</h2>
              <p className="text-stone-500 text-base md:text-lg font-light leading-relaxed max-w-sm">
                Estamos prontos para atender você. Escolha o canal de sua preferência.
              </p>
            </div>
            
            <div className="space-y-8 md:space-y-10">
              {/* E-mail */}
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#221e1a] border border-white/5 flex items-center justify-center rounded-sm">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1 font-bold">E-MAIL</div>
                  <a href="mailto:contato@cafedefatima.com.br" className="text-base md:text-xl text-white font-light hover:text-coffee-gold transition-colors break-words">
                    contato@cafedefatima.com.br
                  </a>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-center space-x-4 md:space-x-6">
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#221e1a] border border-white/5 flex items-center justify-center rounded-sm">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1 font-bold">TELEFONE & WHATSAPP</div>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl text-white font-light hover:text-coffee-gold transition-colors whitespace-nowrap">
                    (81) 9 9160-5039
                  </a>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-start space-x-4 md:space-x-6">
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#221e1a] border border-white/5 flex items-center justify-center rounded-sm">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-coffee-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-1 font-bold">ENDEREÇO</div>
                  <div className="text-lg md:text-xl text-white font-light leading-relaxed">
                    Rua Aluisio de Azevedo, 200<br />
                    Recife, Pernambuco
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 mt-10 md:mt-12">
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-2 md:mb-3 font-bold">ATENDIMENTO</div>
              <p className="text-base md:text-lg text-white font-light">Segunda a Sexta: 09h às 18h</p>
            </div>
          </div>

          {/* Coluna do Formulário (Visual Clean) */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#221e1a] p-8 md:p-16 border border-white/5 rounded-sm shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 md:mb-6">Fale Conosco</h3>
              <p className="text-stone-400 text-sm md:text-base font-light mb-8 md:mb-10 leading-relaxed">
                Para orçamentos corporativos, dúvidas técnicas ou parcerias comerciais, preencha nosso formulário oficial.
              </p>
              
              <a 
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block bg-coffee-gold text-white text-center py-4 md:py-5 rounded-sm font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-[#b45309] transition-all shadow-xl"
              >
                Abrir Formulário de Contato
              </a>

              <div className="mt-8 flex items-center justify-center space-x-3 text-stone-600 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Conexão Segura</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
