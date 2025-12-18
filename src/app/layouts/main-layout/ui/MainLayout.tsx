import { Outlet } from "react-router-dom"
import { Navbar } from "widgets/navbar"

export const MainLayout = () => {
    return (
        <div className="p-4">
            <Navbar />
            <Outlet />
        </div>
    )
}
