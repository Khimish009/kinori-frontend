import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";
import type { RouteProps } from "react-router-dom";
import { AppRoutes } from "./types";
import { RoutePath } from "./consts";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
}