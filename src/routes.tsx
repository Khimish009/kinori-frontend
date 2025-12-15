import { Routes, Route } from "react-router";
import { App } from "./app";
import { AboutPageAsync } from "./pages/about-page/AboutPage.async";
import { MainPageAsync } from "./pages/main-page/MainPage.async";

export const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="main" element={<MainPageAsync />} />
                <Route path="about" element={<AboutPageAsync />} />
            </Route>
        </Routes>
    )
}