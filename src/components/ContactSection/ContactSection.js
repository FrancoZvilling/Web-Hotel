import React, { useContext } from 'react';
import './ContactSection.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

// Importa tu imagen del hotel
// DEBES CREAR ESTA IMAGEN EN src/assets/images/
import hotelImage from '../../assets/images/hotel-exterior.jpg';

const ContactSection = ({ id }) => {
  const { getText } = useContext(LanguageContext);
  const phoneNumber = "+1234567890"; // Reemplaza con tu número de WhatsApp
  const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información sobre el hotel.");

  // Reemplaza esto con tu iframe de Google Maps
  const googleMapsEmbed = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521202809033!2d-75.59189988573565!3d6.194202995516868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442839a0a8a149%3A0x7d8a6dd5e7f92261!2sParque%20El%20Poblado!5e0!3m2!1ses!2sco!4v1620838745141!5m2!1ses!2sco" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <section id={id} className="contact-section section-full-width">
      <div className="container">
        <div className="contact-main-grid">
          <div className="contact-image-container">
            <img src={hotelImage} alt="Exterior del Hotel" />
          </div>
          <div className="contact-info-container">
            <h2>{getText('contact.title')}</h2>
            <p className="contact-detail">{getText('contact.phone')}</p>
            <p className="contact-detail">{getText('contact.mobile')}</p>
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <FaWhatsapp /> {getText('contact.whatsapp')}
            </a>
          </div>
        </div>

        <div className="contact-map-grid">
          <div className="map-info">
            <FaMapMarkerAlt className="location-icon" />
            <h3>{getText('contact.location')}</h3>
            <p>{getText('footer.address')}</p> {/* Reutilizar la dirección del footer */}
          </div>
          <div className="map-container" dangerouslySetInnerHTML={{ __html: googleMapsEmbed }} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;