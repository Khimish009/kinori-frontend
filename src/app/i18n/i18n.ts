import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: false,
        debug: process.env.NODE_ENV === 'development',
        ns: ['common'],
        defaultNS: 'common',
        partialBundledLanguages: true,
        supportedLngs: ['ru', 'en', 'de', 'es', 'fr', 'it'],
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        react: {
            useSuspense: true,
        },

        interpolation: {
            escapeValue: false,
        }
    })
    .catch((error) => {
        console.error('Failed to initialize i18n:', error);
        // Можно добавить отправку в систему мониторинга (Sentry, etc.)
    });


export default i18n;