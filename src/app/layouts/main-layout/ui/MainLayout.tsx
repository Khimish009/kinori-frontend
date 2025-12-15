import { Link, Outlet } from "react-router"

export const MainLayout = () => {
    return (
        <div>
            <div className="mt-2 gap-2">
                <Link to="/main">Main page</Link>
                <Link to="/about">About page</Link>
            </div>
            <Outlet />
        </div>
    )
}
