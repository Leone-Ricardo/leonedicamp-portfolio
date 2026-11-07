import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionTitleProps = {
  /** Pequeno texto acima do título (eyebrow) */
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  theme?: 'dark' | 'light'
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'dark',
  className = '',
}: SectionTitleProps) {
  const isDark = theme === 'dark'
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] ${
            isDark ? 'text-red-500' : 'text-red-600'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg md:text-xl leading-relaxed ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}