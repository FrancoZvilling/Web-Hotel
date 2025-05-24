import React, { useState, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaSun, FaMoon, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
// Asegúrate de tener un logo.png en src/assets/images/
import logoLight from '../../assets/images/logo-light.png'; // Un logo para tema claro
import logoDark from '../../assets/images/logo-dark.png'; // Un logo para tema oscuro

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, getText } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "fotografias", textKey: "navbar.photos" },
    { to: "habitaciones-placeholder", textKey: "navbar.rooms" }, // Placeholder ID
    { to: "actividades-placeholder", textKey: "navbar.activities" }, // Placeholder ID
    { to: "gastronomia-placeholder", textKey: "navbar.gastronomy" }, // Placeholder ID
    { to: "contacto", textKey: "navbar.contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container container">
        <ScrollLink to="hero" smooth={true} duration={500} spy={true} offset={-80} className="navbar-logo" onClick={closeMenu}>
          <img src={theme === 'light' ? logoLight : logoDark} alt="Hotel Logo" />
        </ScrollLink>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li className="nav-item" key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70} // Ajustar según la altura del navbar
                className="nav-links"
                activeClass="active-link"
                onClick={closeMenu}
              >
                {getText(link.textKey)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="nav-utilities">
          <ScrollLink to="hero" smooth={true} duration={500} spy={true} offset={-80} className="nav-util-button home-button" onClick={closeMenu} title={getText('navbar.home')}>
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
    </nav>
  );
};

export default Navbar;