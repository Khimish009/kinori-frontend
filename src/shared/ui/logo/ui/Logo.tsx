import { cn } from 'shared/lib/utils'
import Icon from './logo.svg';

export const Logo = ({
    className = '',
    size = 24,
    iconClassName = "",
    showText = true,
    ariaLabel = 'Kinori home'
}: {
    className?: string,
    size?: number
    iconClassName?: string,
    showText?: boolean,
    ariaLabel?: string
}) => {
    return (
        <div className={cn('flex items-center gap-1', className)} aria-label={ariaLabel} role='img'>
            <Icon
                className={cn('text-gray-900 dark:text-gray-100', iconClassName)}
                width={size}
                height={size}
                aria-hidden="true"
            />
            {showText && (<span
                className="hidden md:inline font-semibold text-lg tracking-tight transition-opacity hover:opacity-80"
            >
                Kinori
            </span>)}
        </div>
    )
}