import { MainLayout } from 'app/layouts/main-layout';
import { NotFound } from 'pages/not-found-page';
import { Route, Routes } from 'react-router-dom';

import { NOT_FOUND_ROUTE, ROOT_PATH } from '../config/constants';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROOT_PATH} element={<MainLayout />}>
        {Object.values(routeConfig).map((route) => (
          <Route key={route.path} {...route} />
        ))}

        <Route path={NOT_FOUND_ROUTE} element={<NotFound />} />
      </Route>
    </Routes>
  );
};
