import React, { createContext, useState, useEffect } from 'react';
import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

export const LanguageContext = createContext();

const translations = {
  es: esTranslations,
  en: enTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const localLang = localStorage.getItem('language');
    return localLang && (localLang === 'es' || localLang === 'en') ? localLang : 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  const getText = (key) => {
    const keys = key.split('.');
    let text = translations[language];
    try {
        for (const k of keys) {
            text = text[k];
        }
        return text || key; // Devuelve la clave si no se encuentra la traducción
    } catch (error) {
        console.warn(`Translation not found for key: ${key} in language: ${language}`);
        return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};