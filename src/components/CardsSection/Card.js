import React from 'react';
import './CardsSection.css'; // Usaremos el mismo CSS para el contenedor y las cartas

const Card = ({ title, titlePosition, backgroundImage, contentTextKey, getText }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card-overlay"></div>
      <div className={`card-content ${titlePosition === 'top' ? 'title-top' : 'title-bottom'}`}>
        <h3>{title}</h3>
        {/* Puedes añadir más contenido si lo necesitas */}
        {/* <p>{getText(contentTextKey)}</p> */}
      </div>
    </div>
  );
};

export default Card;