import React from 'react';

const Header: React.FC = () => {
  const whatsappLink = 'https://chat.whatsapp.com/D3efkf6q3VoDeBoGPtz5Zn?mode=wwc';
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors duration-300 inline-flex items-center group"
        >
          <span className="group-hover:underline">Emagreça urgente Grupo</span>
          <i className="fab fa-whatsapp ml-2"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
