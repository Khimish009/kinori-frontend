import { AppRoutes } from "./types"

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.ABOUT]: '/about',
}

export const NOT_FOUND_ROUTE = '*'