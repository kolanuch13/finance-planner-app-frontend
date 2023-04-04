import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUk from './locales/translationUk.json';
import translationEn from './locales/translationEn.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'uk',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      uk: {
        translation: translationUk,
      },
      en: {
        translation: translationEn,
      },
    },
  });

export default i18n;
