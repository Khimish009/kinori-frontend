import { Button } from "@/components/ui/button"
import { RoutePath } from "app/providers/router/config/constants"
import { AppRoutes } from "app/providers/router/config/types"
import { useTheme } from "app/providers/theme"
import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {
    const { toggleTheme } = useTheme()

    return (
        <div>
            <div className="mt-2 flex gap-2">
                <Link to={RoutePath[AppRoutes.MAIN]}>Main page</Link>
                <Link to={RoutePath[AppRoutes.ABOUT]}>About page</Link>
                <Button onClick={toggleTheme}>Click me</Button>
            </div>
            <Outlet />
        </div>
    )
}
