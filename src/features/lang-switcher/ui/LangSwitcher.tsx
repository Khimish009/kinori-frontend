import { Check, Globe } from 'lucide-react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'shared/ui/dropdown-menu';

import { languages } from '../config/languages';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = useCallback(
    (locale: string) => {
      void i18n.changeLanguage(locale);
    },
    [i18n],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" aria-label="Change language">
          <Globe />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map(({ title, locale, Icon }) => (
          <DropdownMenuItem
            className="flex gap-2 items-center"
            onSelect={() => handleLanguageChange(locale)}
            key={locale}
          >
            <Icon className="w-5 h-4" aria-hidden="true" />
            {title}
            {i18n.resolvedLanguage === locale && <Check width={18} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
