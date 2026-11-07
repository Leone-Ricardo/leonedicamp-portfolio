import type { ReactNode, ElementType } from 'react'
import { useInView } from '@/hooks/useInView'

type RevealProps = {
  children: ReactNode
  /** Atraso em ms para efeito cascata (padrão: 0) */
  delay?: number
  /** Tag HTML a renderizar (padrão: 'div') */
  as?: ElementType
  className?: string
}

/**
 * Envolve conteúdo e o revela suavemente ao entrar na viewport.
 * Usa a classe `.reveal` + `.is-visible` definidas no index.css.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className = '',
}: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${isInView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}