import { Globe, Check } from 'lucide-react'
import { languages } from "../config/languages"
import { useTranslation } from "react-i18next"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'shared/ui/dropdown-menu';
import { Button } from 'shared/ui/button';
import { useCallback } from 'react';

export const LangSwitcher = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = useCallback((locale: string) => {
        i18n.changeLanguage(locale)
    }, [i18n])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant="ghost"><Globe /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {languages.map(({ title, locale, icon }) => (
                    <DropdownMenuItem
                        className="flex gap-2 items-center"
                        onClick={() => handleLanguageChange(locale)}
                        key={locale}
                    >
                        <span>{icon}</span>
                        <span>{title}</span>
                        {i18n.language === locale && <Check width={18} />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
