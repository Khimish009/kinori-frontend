import type { ReactNode } from "react"

export type Theme = 'light' | 'dark'

export type ThemeProviderState = {
    theme: Theme
    toggleTheme: () => void
}

export type ThemeProviderProps = {
    children: ReactNode,
    defaultTheme?: Theme
}