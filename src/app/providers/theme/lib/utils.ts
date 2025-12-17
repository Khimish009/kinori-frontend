import { LOCAL_STORAGE_THEME_KEY } from "../config/constants"
import type { Theme } from "../model/types"

const isValidTheme = (value: unknown): value is Theme => {
    return value === "light" || value === "dark"
}

const getStoredTheme = () => {
    try {
        const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)

        if (isValidTheme(storedTheme)) {
            return storedTheme
        }

        return null
    } catch (error) {
        // localStorage может быть недоступен (private mode, SSR)
        console.warn('Failed to read theme from localStorage:', error)
        return null
    }
}

const getSystemTheme = () => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return isDark ? "dark" : "light"
}

export const getInitialTheme = (defaultTheme: Theme) => {
    const storedTheme = getStoredTheme()

    if (storedTheme) {
        return storedTheme
    }

    try {
        return getSystemTheme()
    } catch (error) {
        return defaultTheme
    }
}

export const getOppositeTheme = (theme: Theme) => theme === "dark" ? "light" : "dark"

export const applyTheme = (theme: Theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
}
