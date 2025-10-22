import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const videoId = "TWOMJggI0LM";
  const mutedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0`;
  const unmutedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&loop=1&playlist=${videoId}&playsinline=1&rel=0`;

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          <span className="block">Elimine Peso sem dieta e exercícios,</span>
          <span className="block text-emerald-600">com o Grão secreto + Potente que Bariátrica e Moujaro...</span>
          <span className="block text-gray-700 text-3xl md:text-4xl mt-3">Porém Natural e seguro!</span>
        </h2>
        <p className="mt-4 text-2xl font-bold text-red-600">Suplemento Natural Poderoso</p>
        
        <div className="mt-8 max-w-3xl w-full mx-auto aspect-video shadow-2xl rounded-lg overflow-hidden relative">
          <iframe
            key={isMuted ? 'muted' : 'unmuted'}
            className="w-full h-full"
            src={isMuted ? mutedSrc : unmutedSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          {isMuted && (
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer group"
              onClick={() => setIsMuted(false)}
            >
               <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
              <button
                className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110 text-lg flex items-center z-10"
              >
                <i className="fas fa-volume-high mr-2"></i> Ativar o Som
              </button>
            </div>
          )}
        </div>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          Perca peso de forma natural e surpreendentemente rápida, sem precisar de dietas malucas ou rotinas de exercícios exaustivas. O método que vai mudar sua vida está aqui.
        </p>
        <div className="mt-10">
          <WhatsAppButton text="QUERO ENTRAR NO GRUPO VIP!" />
        </div>
        <p className="mt-4 text-lg font-semibold text-gray-800">A partir de R$197 com frete grátis!</p>
        <p className="mt-4 text-sm text-gray-500">Vagas limitadas. Garanta a sua agora!</p>
      </div>
    </section>
  );
};

export default Hero;