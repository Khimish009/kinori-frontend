import { BrowserRouter } from "react-router";
import { AppRouter } from "./providers/router";

export const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}