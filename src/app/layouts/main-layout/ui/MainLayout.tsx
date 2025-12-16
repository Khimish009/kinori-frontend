import { Button } from "@/components/ui/button"
import { RoutePath } from "app/providers/router/config/consts"
import { AppRoutes } from "app/providers/router/config/types"
import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <div>
            <div className="mt-2 flex gap-2">
                <Link to={RoutePath[AppRoutes.MAIN]}>Main page</Link>
                <Link to={RoutePath[AppRoutes.ABOUT]}>About page</Link>
                <Button>Click me</Button>
            </div>
            <Outlet />
        </div>
    )
}
