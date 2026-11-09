import { Badge } from '@/components/ui/Badge'

const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Casos', href: '#casos' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Stack', href: '#stack' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Coluna 1: Marca */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#top"
              className="text-2xl font-bold tracking-tight inline-block"
            >
              Leone <span className="text-red-600">DiCamp</span>
            </a>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Desenvolvedor Full Stack. Construo plataformas exclusivas que
              libertam o seu negócio das taxas e da desorganização.
            </p>
            <Badge variant="outline">● Disponível para novos projetos</Badge>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500 mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="leoneonix688@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  leoneonix688@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5521967156104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Leone-Ricardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/leone-ricardo-68b553232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} Leone DiCamp. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Construído com React, TypeScript e TailwindCSS.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-red-500 hover:text-red-400 transition-colors font-semibold"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  )
}