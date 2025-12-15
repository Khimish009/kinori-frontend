import { Link, Outlet } from "react-router";

export const App = () => {
    return (
        <div>
            <div>
                <Link to="/main">Main page</Link>
                <Link to="/about">About page</Link>
            </div>
            <Outlet />
        </div>
    )
}