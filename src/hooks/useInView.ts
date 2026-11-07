import { useEffect, useRef, useState } from 'react'

type UseInViewOptions = {
  /** 0 a 1 — quanto do elemento precisa estar visível (padrão: 0.15) */
  threshold?: number
  /** Margem ao redor do viewport (padrão: '0px 0px -80px 0px') */
  rootMargin?: string
  /** Se true, anima apenas na primeira entrada (padrão: true) */
  once?: boolean
}

/**
 * Hook que detecta quando um elemento entra na viewport.
 * Retorna um `ref` para colar no elemento e um booleano `isInView`.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const { threshold = 0.15, rootMargin = '0px 0px -80px 0px', once = true } = options

  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Respeita preferência de redução de movimento
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isInView }
}