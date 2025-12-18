import { Network } from 'lucide-react'
import { cn } from 'shared/lib/utils'

export const Logo = ({ className = '' }: { className?: string }) => {
    return (
        <div className={cn('flex gap-3 items-center', className)} aria-label="Kinori home">
            <Network size={20} />
            <span className="hidden md:inline font-semibold text-lg tracking-tight transition-opacity hover:opacity-80
">Kinori</span>
        </div>
    )
}