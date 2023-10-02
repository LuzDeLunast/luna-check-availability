import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourceContent from './data/contentpage.json';

export default function () {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: resourceContent,
      lng: document.querySelector('html').lang,
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
}
