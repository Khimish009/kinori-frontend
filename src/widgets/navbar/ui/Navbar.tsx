import { LoginButton } from "features/auth"
import { ThemeSwitcher } from "features/theme-switcher"
import { Link, NavLink } from "react-router-dom"
import { navLinks } from "../config/navLinks"
import { ROOT_PATH } from "app/providers/router/config/constants"

export const Navbar = () => {
    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 transition-colors ${isActive
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`

    return (
        <header className="flex justify-between items-center sticky top-0 z-50 bg-background">
            <div className="ml-4">
                <Link to={ROOT_PATH}>Kinori</Link>
            </div>
            <nav className="flex gap-3" aria-label="Main navigation">
                {navLinks.map(({ to, title }) => (
                    <NavLink
                        key={to}
                        className={linkClasses}
                        to={to}
                        title={title}
                    >
                        {title}
                    </NavLink>
                ))}
            </nav>
            <div className="flex gap-2 mr-4">
                <ThemeSwitcher />
                <LoginButton />
            </div>
        </header>
    )
}