import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;