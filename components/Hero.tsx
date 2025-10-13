import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          <span className="block">Elimine Peso sem dieta e exercícios,</span>
          <span className="block text-emerald-600">com o Grão secreto + Potente que Bariátrica e Moujaro...</span>
          <span className="block text-gray-700 text-3xl md:text-4xl mt-3">Porém Natural e seguro!</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Perca peso de forma natural e surpreendentemente rápida, sem precisar de dietas malucas ou rotinas de exercícios exaustivas. O método que vai mudar sua vida está aqui.
        </p>
        <div className="mt-10">
          <WhatsAppButton text="QUERO ENTRAR NO GRUPO VIP!" />
        </div>
        <p className="mt-4 text-sm text-gray-500">Vagas limitadas. Garanta a sua agora!</p>
      </div>
    </section>
  );
};

export default Hero;