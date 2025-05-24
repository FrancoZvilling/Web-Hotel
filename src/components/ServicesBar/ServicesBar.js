import React, { useContext } from 'react';
import './ServicesBar.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import {
  FaSpa, FaSwimmer, FaWifi, FaTv, FaSnowflake, FaUtensils
} from 'react-icons/fa'; // Iconos de Font Awesome

const ServicesBar = () => {
  const { getText } = useContext(LanguageContext);

  const services = [
    { icon: <FaSpa />, textKey: 'services.spa' },
    { icon: <FaSwimmer />, textKey: 'services.pool' },
    { icon: <FaWifi />, textKey: 'services.wifi' },
    { icon: <FaTv />, textKey: 'services.tv' },
    { icon: <FaSnowflake />, textKey: 'services.ac' }, // FaSnowflake para climatizado (aire/calefacción)
    { icon: <FaUtensils />, textKey: 'services.restaurant' },
  ];

  return (
    <section className="services-bar section-full-width">
      <div className="container">
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <p className="service-text">{getText(service.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBar;