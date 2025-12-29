import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () => import(/* webpackChunkName: "about-page" */ './AboutPage'),
);
