import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const languages = [
  { code: 'ua', label: 'UA' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLangCode = i18n.language;
  // Знаходимо об'єкт поточної мови, щоб показати її label на кнопці
  const currentLangObj =
    languages.find(l => l.code === currentLangCode) || languages[0];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = code => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.switcherContainer} ref={dropdownRef}>
      <button
        className={styles.triggerButton}
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className={styles.flag}>{currentLangObj.flag}</span>
        <span>{currentLangObj.label}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`} />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`${styles.option} ${currentLangCode === lang.code ? styles.activeOption : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
