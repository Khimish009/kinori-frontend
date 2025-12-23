import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: true,
        ns: ['mainPage', 'aboutPage','common'],
        defaultNS: 'common',
        supportedLngs: ['ru', 'en', 'de', 'es', 'fr', 'it'],
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },

        interpolation: {
            escapeValue: false,
        }
    });


export default i18n;