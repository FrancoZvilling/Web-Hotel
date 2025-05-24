import React, { useContext } from 'react';
import Card from './Card';
import './CardsSection.css';
import { LanguageContext } from '../../contexts/LanguageContext';

// Importa tus imágenes para las cartas
// DEBES CREAR ESTAS IMÁGENES EN src/assets/images/
import imgHabitaciones from '../../assets/images/card-habitaciones.jpg';
import imgActividades from '../../assets/images/card-actividades.jpg';
import imgGastronomia from '../../assets/images/card-gastronomia.jpg';

const CardsSection = ({ id }) => {
  const { getText } = useContext(LanguageContext);

  const cardData = [
    {
      title: getText('cards.roomsTitle'),
      titlePosition: 'top',
      backgroundImage: imgHabitaciones,
      // contentTextKey: 'cards.roomsDescription' // Si quieres añadir descripción
    },
    {
      title: getText('cards.activitiesTitle'),
      titlePosition: 'bottom',
      backgroundImage: imgActividades,
      // contentTextKey: 'cards.activitiesDescription'
    },
    {
      title: getText('cards.gastronomyTitle'),
      titlePosition: 'top',
      backgroundImage: imgGastronomia,
      // contentTextKey: 'cards.gastronomyDescription'
    },
  ];

  return (
    <section id={id} className="cards-section section-full-width">
      <div className="container">
        {/* Podrías añadir un título general para la sección aquí si quieres */}
        {/* <h2>{getText('navbar.photos')}</h2> */}
        <div className="cards-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              titlePosition={card.titlePosition}
              backgroundImage={card.backgroundImage}
              // contentTextKey={card.contentTextKey} // Descomenta si usas descripciones
              getText={getText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;