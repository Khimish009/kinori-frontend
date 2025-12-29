import 'i18next';

import aboutPage from 'public/locales/ru/aboutPage.json';
import common from 'public/locales/ru/common.json';
import mainPage from 'public/locales/ru/mainPage.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      mainPage: typeof mainPage;
      aboutPage: typeof aboutPage;
    };
  }
}
