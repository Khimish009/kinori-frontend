import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

import { DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY } from '../config/constants';
import {
  applyTheme,
  getInitialTheme,
  getOppositeTheme,
  isValidTheme,
} from '../lib/utils';
import { ThemeContext } from '../model/ThemeContext';
import type { Theme, ThemeProviderProps } from '../model/types';

export const ThemeProvider = ({
  children,
  defaultTheme = DEFAULT_THEME,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() =>
    getInitialTheme(defaultTheme),
  );

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = getOppositeTheme(prevTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      return newTheme;
    });
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (
        event.key === LOCAL_STORAGE_THEME_KEY &&
        isValidTheme(event.newValue)
      ) {
        setTheme(event.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
