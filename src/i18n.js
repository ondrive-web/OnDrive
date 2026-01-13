import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

// --- ВОТ ЗДЕСЬ МЫ ИХ ИМПОРТИРУЕМ ---

import translationUA from './locales/ua/translation.json';
import translationEN from './locales/en/translation.json';
import transaltionRu from './locales/ru/translation.json';

const resources = {
  ua: {
    translation: translationUA, // Передаем содержимое файла
  },

  en: {
    translation: translationEN, // Передаем содержимое файла
  },
  ru: {
    translation: transaltionRu,
  },
};

i18n

  .use(initReactI18next)

  .init({
    resources,

    lng: 'ua', // Язык по умолчанию

    fallbackLng: 'ua', // Если перевод не найден, показать этот язык

    interpolation: {
      escapeValue: false,
    },
  });
