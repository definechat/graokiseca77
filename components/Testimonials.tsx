import React from 'react';
import type { Testimonial } from '../types';
import WhatsAppButton from './WhatsAppButton';

const testimonialData: Testimonial[] = [
  {
    name: 'Ivani',
    text: '"Eu estava com muita gordura na barriga, e derreteu tudo com o GK. Estou muito satisfeita!"',
    image: 'https://i.imgur.com/zZPmQPT.jpeg',
    lostWeight: 20
  },
  {
    name: 'Maria',
    text: '"Ela ia na praia mas com maiô, e carregando insegurança, porém, Ela hoje usa bikine e se sente segura"',
    image: 'https://i.imgur.com/DnjPdU6.png',
    lostWeight: 38
  },
  {
    name: 'Célia',
    text: '"Andava de cadeira de rodas com a ajuda do marido e graças ao Graokiseca eu resolvi meu problema. Esse produto é impressionante, uma bênção!"',
    image: 'https://i.imgur.com/AMzbial.png',
    lostWeight: 35
  }
];

const TestimonialCard: React.FC<Testimonial> = ({ name, text, image, lostWeight }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
    <img className="w-full object-cover" src={image} alt={`Depoimento de ${name}`} />
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-gray-600 italic mb-4 flex-grow">{text}</p>
      <div className="mt-auto">
        <p className="font-bold text-lg text-emerald-600 text-center">{name} - {lostWeight}kg eliminados</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nossos depoimentos são reais, nada Comprado!</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">São Mulheres como você, que estavam sem saber o que fazer até conhecer o GraoKiseca!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <WhatsAppButton text="QUERO ENTRAR NO GRUPO VIP AGORA!" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;