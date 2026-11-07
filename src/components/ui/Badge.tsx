import type { ReactNode } from 'react'

type BadgeVariant = 'red' | 'outline' | 'white'

type BadgeProps = {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  red: 'bg-red-600 text-white border-red-600',
  outline: 'bg-transparent text-red-500 border-red-600',
  white: 'bg-white text-black border-white',
}

export function Badge({ children, variant = 'red', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}