import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'

export function Hero() {
  const scrollToCase = () => {
    document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20"
    >
      {/* Grid decorativo de fundo */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow vermelho sutil */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-site relative z-10 py-20">
        <div className="max-w-4xl">
          <Reveal>
            <Badge variant="outline" className="mb-6">
              ● Disponível para novos projetos
            </Badge>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Construo plataformas exclusivas que{' '}
              <span className="text-red-600">libertam</span> o seu negócio das
              taxas e da desorganização.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Leone DiCamp — Desenvolvedor Full Stack. Do banco de dados à
              interface, entrego sistemas próprios que eliminam intermediários
              e devolvem o controle do seu negócio pra você.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" onClick={scrollToCase}>
                Ver Casos de Sucesso →
              </Button>
              <Button variant="ghost" size="lg" onClick={scrollToContact}>
                Falar comigo
              </Button>
            </div>
          </Reveal>

          {/* Social proof minimalista */}
          <Reveal delay={400}>
            <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-gray-500">
              <div>
                <span className="text-2xl font-bold text-white">+150</span>
                <span className="ml-2">ingressos vendidos</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div>
                <span className="text-2xl font-bold text-white">0%</span>
                <span className="ml-2">taxas de intermediários</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-white/10" />
              <div>
                <span className="text-2xl font-bold text-white">100%</span>
                <span className="ml-2">código próprio</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}