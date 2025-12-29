import { useTheme } from 'app/providers/theme';
import { Moon, Sun } from 'lucide-react';
import { Button } from 'shared/ui/button';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
  const Icon = isDark ? Sun : Moon;
  const themeSwitchLabel = `Switch to ${isDark ? 'light' : 'dark'} mode`;

  return (
    <Button
      aria-label={themeSwitchLabel}
      title={themeSwitchLabel}
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
    >
      <Icon className="h-5 w-5 transition-opacity duration-200" />
    </Button>
  );
};
