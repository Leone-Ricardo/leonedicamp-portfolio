import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Casos', href: '#casos' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Stack', href: '#stack' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#top"
          className="text-lg md:text-xl font-bold tracking-tight"
        >
          Leone <span className="text-red-600">DiCamp</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Falar comigo
          </Button>
        </div>

        {/* Menu mobile (hamburger) */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-transform" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </nav>

      {/* Menu mobile aberto */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="container-site py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}