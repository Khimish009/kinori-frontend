import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "app/App";
import "./index.css"
import './app/i18n/i18n';

const container = document.getElementById("root");

if (!container) {
    throw new Error("Root element with id 'root' not found")
}

const root = createRoot(container)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)