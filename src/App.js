import React from 'react';
import './App.css'; // Estilos específicos de App (opcional, muchos irán a index.css)
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CardsSection from './components/CardsSection/CardsSection';
import ServicesBar from './components/ServicesBar/ServicesBar';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CardsSection id="fotografias" /> {/* ID para el scroll */}
      <ServicesBar />
      <ContactSection id="contacto" /> {/* ID para el scroll */}
      <Footer />
    </div>
  );
}

export default App;
