import React from 'react';

interface WhatsAppButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, variant = 'primary' }) => {
  // Link do grupo do WhatsApp atualizado
  const whatsappLink = 'https://chat.whatsapp.com/D3efkf6q3VoDeBoGPtz5Zn?mode=wwc';

  const baseClasses = "inline-block text-lg font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 motion-safe:animate-bounce";
  
  const primaryClasses = "bg-green-500 text-white hover:bg-green-600";
  const secondaryClasses = "bg-white text-emerald-700 hover:bg-gray-100";

  const buttonClasses = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`;

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
    >
      <i className="fab fa-whatsapp mr-3"></i>
      {text}
    </a>
  );
};

export default WhatsAppButton;