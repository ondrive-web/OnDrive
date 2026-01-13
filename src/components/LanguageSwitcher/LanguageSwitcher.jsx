import React from 'react';
import { useTranslation } from 'react-i18next';
// Если используете CSS модули, импортируйте их, или просто inline-стили для примера
// import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Функция смены языка
  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };

  // Проверка текущего языка для подсветки активной кнопки
  const currentLang = i18n.language;

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button
        onClick={() => changeLanguage('ua')}
        disabled={currentLang === 'ua'} // Делаем неактивной, если уже выбрана
        style={{
          fontWeight: currentLang === 'ua' ? 'bold' : 'normal',
          opacity: currentLang === 'ua' ? 1 : 0.6,
        }}
      >
        UA
      </button>

      <button
        onClick={() => changeLanguage('en')}
        disabled={currentLang === 'en'}
        style={{
          fontWeight: currentLang === 'en' ? 'bold' : 'normal',
          opacity: currentLang === 'en' ? 1 : 0.6,
        }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
