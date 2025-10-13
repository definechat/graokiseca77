
import React from 'react';

interface BenefitCardProps {
  iconClass: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ iconClass, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mx-auto mb-4">
      <i className={`fas ${iconClass} text-3xl text-emerald-600`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    {
      iconClass: 'fa-utensils',
      title: 'Sem Dietas Restritivas',
      description: 'Coma o que você gosta sem culpa. Nosso segredo atua independentemente da sua alimentação.'
    },
    {
      iconClass: 'fa-bed',
      title: 'Sem Exercícios Cansativos',
      description: 'Conquiste o corpo dos seus sonhos sem passar horas na academia. Ideal para quem tem uma rotina corrida.'
    },
    {
      iconClass: 'fa-rocket',
      title: 'Resultados Rápidos',
      description: 'Veja as primeiras mudanças no seu corpo e na balança em questão de dias, não meses.'
    },
    {
      iconClass: 'fa-leaf',
      title: 'Componente Secreto 100% Natural',
      description: 'Uma fórmula segura e eficaz, desenvolvida com ingredientes naturais e comprovados.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Por Que Nosso Método é Diferente?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Chega de soluções que não funcionam. Nós focamos no que realmente importa para você ter resultados de verdade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
