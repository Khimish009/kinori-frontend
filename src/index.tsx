import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css"
import { RoutesConfig } from "./routes";

const container = document.getElementById("root");

if (!container) {
    throw new Error("Root element with id 'root' not found")
}

const root = createRoot(container)

root.render(
    <StrictMode>
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <RoutesConfig />
            </Suspense>
        </BrowserRouter>
    </StrictMode>
)