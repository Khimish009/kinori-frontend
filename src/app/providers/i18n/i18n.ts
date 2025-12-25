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
    debug: __DEV__,
    ns: ['common'],
    defaultNS: 'common',
    supportedLngs: ['ru', 'en', 'de', 'es', 'fr', 'it'],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: true,
    },

    interpolation: {
      escapeValue: false,
    },
  })
  .catch((error) => {
    console.error('Failed to initialize i18n:', error);
    // Можно добавить отправку в систему мониторинга (Sentry, etc.)
  });

// Синхронизация HTML lang атрибута с текущим языком i18n
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

// Установка начального значения lang
if (i18n.language) {
  document.documentElement.setAttribute('lang', i18n.language);
}

export default i18n;
