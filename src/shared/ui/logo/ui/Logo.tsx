import { cn } from 'shared/lib/utils'
import Icon from './logo.svg';

export const Logo = ({
    className = '',
    size = 24,
    iconClassName = ""
}: {
    className?: string,
    size?: number
    iconClassName?: string
}) => {
    return (
        <div className={cn('flex items-center', className)} aria-label="Kinori home">
            <Icon
                className={cn('text-gray-900 dark:text-gray-100', iconClassName)}
                width={size}
                height={size}
            />
            <span
                className="hidden md:inline font-semibold text-lg tracking-tight transition-opacity hover:opacity-80
"
            >
                Kinori
            </span>
        </div>
    )
}