import React, { useState, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaSun, FaMoon, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import logoLight from '../../assets/images/logo-light.png';
import logoDark from '../../assets/images/logo-dark.png';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, getText } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "fotografias", textKey: "navbar.photos" },
    { to: "habitaciones-placeholder", textKey: "navbar.rooms" },
    { to: "actividades-placeholder", textKey: "navbar.activities" },
    { to: "gastronomia-placeholder", textKey: "navbar.gastronomy" },
    { to: "contacto", textKey: "navbar.contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isOpen ? 'navbar-mobile-open' : ''}`}> {/* Cambié 'open' a 'navbar-mobile-open' para evitar colisiones */}
      <div className="navbar-container container">
        <ScrollLink
          to="hero" // En HeroSection, asegúrate que el section tenga id="hero"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80} // Ajusta según la altura de tu navbar
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img src={theme === 'light' ? logoLight : logoDark} alt={getText('Hotel Logo')} /> {/* Mejor usar getText para alt */}
        </ScrollLink>

        {/* Menú de navegación principal (para desktop y se transforma en desplegable en móvil) */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li className="nav-item" key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="nav-links"
                activeClass="active-link"
                onClick={closeMenu}
              >
                {getText(link.textKey)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* AGRUPACIÓN DE ELEMENTOS DE LA DERECHA (incluye icono hamburguesa y utilidades) */}
        <div className="navbar-right-group">
          {/* Icono de Hamburguesa (solo visible en móvil) */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Utilidades del Navbar */}
          <div className="nav-utilities">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="nav-util-button home-button" // Este se oculta en móvil
              onClick={closeMenu}
              title={getText('navbar.home')}
            >
              {getText('navbar.home')}
            </ScrollLink>
            <button onClick={toggleLanguage} className="nav-util-button" title={getText('navbar.language')}>
              <FaGlobe /> {language === 'es' ? 'EN' : 'ES'}
            </button>
            <button onClick={toggleTheme} className="nav-util-button" title={getText('navbar.theme')}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;