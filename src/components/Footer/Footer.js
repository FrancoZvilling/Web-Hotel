import React, { useContext } from 'react';
import './Footer.css';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
// import footerLogo from '../../assets/images/logo-footer.png';

const Footer = () => {
  const { getText } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="container"> {/* Contenedor principal que centra y limita el ancho */}
        <div className="footer-content-wrapper"> {/* Nuevo wrapper para las columnas, será el flex container */}
          <div className="footer-column footer-about">
            {/* {footerLogo && <img src={footerLogo} alt="Hotel Logo" className="footer-logo"/>} */}
            <h4>{getText('navbar.home')}</h4>
            <p>{getText('footer.address')}</p>
          </div>

          <div className="footer-column footer-links">
            <h4>{getText('navbar.quickLinks') || 'Enlaces Rápidos'}</h4>
            <ul>
              <li><a href="#hero">{getText('navbar.home')}</a></li>
              <li><a href="#fotografias">{getText('navbar.photos')}</a></li>
              <li><a href="#contacto">{getText('navbar.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-column footer-social">
            <h4>{getText('footer.social')}</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{getText('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;