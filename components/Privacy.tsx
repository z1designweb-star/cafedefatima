
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <header className="mb-12 border-b border-stone-100 pb-8">
          <h1 className="text-4xl font-serif text-coffee-dark mb-4">Política de Privacidade</h1>
          <p className="text-stone-500 italic">Última atualização: Janeiro de 2026</p>
        </header>

        <div className="prose prose-stone max-w-none text-stone-600 space-y-8 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">1. Introdução</h2>
            <p>
              O Café de Fátima valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, processamos e protegemos suas informações pessoais ao utilizar nosso site e adquirir nossos cafés especiais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">2. Coleta de Informações</h2>
            <p>Coletamos informações que você nos fornece diretamente ao:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Realizar um pedido de compra;</li>
              <li>Cadastrar-se em nossa newsletter;</li>
              <li>Entrar em contato através do formulário de atendimento;</li>
              <li>Assinar um de nossos clubes mensais.</li>
            </ul>
            <p className="mt-4">As informações coletadas podem incluir nome, e-mail, telefone, endereço de entrega e dados de pagamento (processados de forma segura por terceiros).</p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">3. Uso das Informações</h2>
            <p>Utilizamos seus dados para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Processar e entregar seus pedidos;</li>
              <li>Comunicar atualizações sobre o seu envio;</li>
              <li>Enviar promoções e novidades (caso autorizado);</li>
              <li>Melhorar a experiência de navegação em nosso site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">4. LGPD e Seus Direitos</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais. Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail <span className="text-coffee-gold font-bold">contato@cafedefatima.com.br</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-coffee-dark mb-4">5. Segurança</h2>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda ou alteração.
            </p>
          </section>

          <div className="pt-10">
            <button 
              onClick={() => window.location.hash = '#'}
              className="text-coffee-gold font-bold hover:underline"
            >
              ← Voltar para o Início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
