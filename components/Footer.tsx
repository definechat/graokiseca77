
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Corpo Ideal. Todos os direitos reservados.</p>
        <p className="text-xs text-gray-500 mt-2">Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.</p>
      </div>
    </footer>
  );
};

export default Footer;
