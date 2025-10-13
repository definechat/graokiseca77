
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const CTASection: React.FC = () => {
  return (
    <section className="bg-emerald-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold">Pronta Para Começar Sua Transformação?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-emerald-100">
          Não adie mais a sua felicidade. Junte-se ao nosso grupo exclusivo no WhatsApp e receba acesso imediato ao segredo que já ajudou milhares de pessoas.
        </p>
        <div className="mt-10">
          <WhatsAppButton text="SIM, QUERO EMAGRECER AGORA!" variant="secondary" />
        </div>
        <p className="mt-4 text-sm text-emerald-200">Clique no botão e seja redirecionada para o grupo VIP.</p>
      </div>
    </section>
  );
};

export default CTASection;
