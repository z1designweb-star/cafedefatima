
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="mb-12 border-b border-stone-200 pb-8">
          <h1 className="text-4xl font-serif text-coffee-dark mb-4">Termos de Uso</h1>
          <p className="text-stone-500 italic">Última atualização: Janeiro de 2026</p>
        </header>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-200 prose prose-stone max-w-none text-stone-600 space-y-8 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar o site do Café de Fátima, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">2. Condições de Venda</h2>
            <p>
              Os preços e a disponibilidade dos produtos estão sujeitos a alterações sem aviso prévio. O Café de Fátima reserva-se o direito de recusar qualquer pedido por motivos como falta de estoque ou erros de precificação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">3. Entregas e Prazos</h2>
            <p>
              As entregas são realizadas via parceiros logísticos. O prazo de entrega começa a contar a partir da confirmação do pagamento e da torra (caso o produto seja torrado sob demanda). Não nos responsabilizamos por atrasos decorrentes de greves ou eventos de força maior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">4. Política de Devolução</h2>
            <p>
              De acordo com o Código de Defesa do Consumidor, você tem o direito de desistir da compra em até 7 (sete) dias corridos após o recebimento, desde que o café esteja com a embalagem original lacrada e inviolada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, logotipos, imagens e ícones, é de propriedade exclusiva do Café de Fátima ou de seus fornecedores de conteúdo (Unique Cafés e Latitude 13°), protegido por leis de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">6. Limitação de Responsabilidade</h2>
            <p>
              O Café de Fátima não será responsável por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em seu site, mesmo que tenhamos sido notificados da possibilidade de tais danos.
            </p>
          </section>

          <div className="pt-6">
            <button 
              onClick={() => window.location.hash = '#'}
              className="bg-coffee-dark text-white px-8 py-3 rounded-sm font-medium hover:bg-stone-800 transition-colors"
            >
              Entendido, voltar para o Início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
