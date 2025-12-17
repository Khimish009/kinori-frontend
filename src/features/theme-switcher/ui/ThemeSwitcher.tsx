import { Button } from "@/components/ui/button"
import { useTheme } from "app/providers/theme"
import { Sun, Moon } from 'lucide-react'

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    const Icon = theme === "dark" ? Sun : Moon
    const themeSwitchLabel = `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`

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