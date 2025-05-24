import React, { useState, useEffect, useContext } from 'react';
import './HeroSection.css';
import { LanguageContext } from '../../contexts/LanguageContext';

// Importa tus imágenes de la carpeta assets
// DEBES CREAR ESTAS IMÁGENES EN src/assets/images/
import heroImg1 from '../../assets/images/hero1.jpg';
import heroImg2 from '../../assets/images/hero2.jpg';
import heroImg3 from '../../assets/images/hero3.jpg';
// ... añade más si quieres

const images = [heroImg1, heroImg2, heroImg3]; // Rutas relativas a src

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { getText } = useContext(LanguageContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, []);

  return (
    <section id="hero" className="hero-section">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1>{getText('hero.title')}</h1>
        <p>{getText('hero.subtitle')}</p>
        {/* Puedes agregar un botón de "Ver Habitaciones" o "Reservar Ahora" aquí */}
      </div>
    </section>
  );
};

export default HeroSection;