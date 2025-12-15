import { MainLayout } from "app/layouts/main-layout"
import { Suspense } from "react"
import { Route, Routes } from "react-router"
import { routeConfig } from "../config/routeConfig"
import { NotFound } from "pages/not-found-page"
import { NOT_FOUND_ROUTE } from "../config/consts"

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    {Object.values(routeConfig).map((route) => (<Route key={route.path} {...route} />))}

                    <Route path={NOT_FOUND_ROUTE} element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    )
}