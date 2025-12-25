import { RoutePath } from 'app/providers/router/config/constants';
import { AppRoutes } from 'app/providers/router/config/types';

export const navLinks = [
  {
    to: RoutePath[AppRoutes.MAIN],
    title: 'Main page',
  },
  {
    to: RoutePath[AppRoutes.ABOUT],
    title: 'About page',
  },
];
