import { Routes, Route } from "react-router";
import { App } from "./app/App";
import { MainPage } from "pages/main-page";
import { AboutPage } from "pages/about-page";

export const RoutesConfig = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="main" element={<MainPage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>
    )
}