import { createContext } from "react";
import type { ThemeProviderState } from "./types";
import { DEFAULT_THEME } from "../config/constants";

const initialState: ThemeProviderState = {
    theme: DEFAULT_THEME,
    toggleTheme: () => null
}

export const ThemeContext = createContext<ThemeProviderState>(initialState)
