import { ThemeContext } from "../model/ThemeContext"
import type { ThemeProviderProps } from "../model/types"
import type { Theme } from "../model/types"
import { useCallback, useLayoutEffect, useMemo, useState } from "react"
import { applyTheme, getInitialTheme, getOppositeTheme } from "../lib/utils"
import { DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY } from "../config/constants"

export const ThemeProvider = ({ children, defaultTheme = DEFAULT_THEME }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme(defaultTheme))

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const newTheme = getOppositeTheme(prevTheme)
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
            return newTheme
        })
    }, [])

    useLayoutEffect(() => {
        applyTheme(theme)
    }, [theme])

    const value = useMemo(() => ({
        theme,
        toggleTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}