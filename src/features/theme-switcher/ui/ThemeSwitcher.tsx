import { useTheme } from "app/providers/theme"
import { Sun, Moon } from 'lucide-react'
import { useMemo } from "react";
import { Button } from "shared/ui/button";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    const isDark = theme === "dark"
    const Icon = useMemo(() => isDark ? Sun : Moon, [isDark])
    const themeSwitchLabel = useMemo(
        () => `Switch to ${isDark ? 'light' : 'dark'} mode`,
        [theme]
    )

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
    )
}