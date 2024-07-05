// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 引入翻译文件
import translationEN from './locales/en/translation.json';
import translationKR from './locales/kr/translation.json';


const resources = {
  en: {
    translation: translationEN
  },
  kr: {
    translation: translationKR
  }
};

const language = localStorage.getItem('language') || 'kr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language, // default language
    fallbackLng: 'kr',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
