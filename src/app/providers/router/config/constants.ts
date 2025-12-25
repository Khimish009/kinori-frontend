import { AppRoutes } from './types';

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '',
  [AppRoutes.ABOUT]: 'about',
};

export const NOT_FOUND_ROUTE = '*';
export const ROOT_PATH = '/';
