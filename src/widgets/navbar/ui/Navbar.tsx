import { SignInButton, SignUpButton } from "features/auth"
import { ThemeSwitcher } from "features/theme-switcher"
import { Link, NavLink } from "react-router-dom"
import { navLinks } from "../config/navLinks"
import { ROOT_PATH } from "app/providers/router/config/constants"
import { Logo } from "shared/ui/logo"
import { LangSwitcher } from "features/lang-switcher"

export const Navbar = () => {
    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 transition-colors ${isActive
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`

    return (
        <header className="flex justify-between items-center px-4 sticky top-0 z-50 bg-background">
            <Link to={ROOT_PATH}><Logo /></Link>
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
            <div className="flex gap-2">
                <ThemeSwitcher />
                <LangSwitcher />
                <SignInButton />
                <SignUpButton />
            </div>
        </header>
    )
}