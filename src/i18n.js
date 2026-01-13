import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUA from './locales/ua/translation.json';
import translationEN from './locales/en/translation.json';
import transaltionRu from './locales/ru/translation.json';

const resources = {
  ua: {
    translation: translationUA,
  },

  en: {
    translation: translationEN,
  },
  ru: {
    translation: transaltionRu,
  },
};

i18n

  .use(initReactI18next)

  .init({
    resources,

    lng: 'ua', //! default language

    fallbackLng: 'ua', //! If translation is not found, show this language

    interpolation: {
      escapeValue: false,
    },
  });
