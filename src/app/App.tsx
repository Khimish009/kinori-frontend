import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router';
import { ThemeProvider } from './providers/theme';
import { Suspense } from 'react';
import { AppLoader } from './ui/app-loader';

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback={<AppLoader />}>
          <AppRouter />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};
