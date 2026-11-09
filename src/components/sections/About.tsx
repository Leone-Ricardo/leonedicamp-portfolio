import leonePhoto from '@/assets/leone__dicamp.jpg'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionTitle } from '@/components/ui/SectionTitle'

const stats = [
  { value: '5+', label: 'anos construindo sistemas' },
  { value: '+150', label: 'vendas processadas sem taxas' },
  { value: '100%', label: 'código próprio e escalável' },
]

const differentials = [
  'Não entrego "só um site" — entrego sistema completo',
  'Checkout próprio, sem depender de plataformas terceiras',
  'Do banco de dados à interface, com arquitetura segura',
]

export function About() {
  return (
    <section
      id="sobre"
      className="relative bg-zinc-900 py-24 md:py-32 overflow-hidden"
    >
      {/* Detalhe decorativo: linha vermelha vertical */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 via-red-600/40 to-transparent" />

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna da foto */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Reveal>
              <div className="relative max-w-sm">
                {/* Moldura neo-brutalista */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-red-600" />
                <img
  src={leonePhoto}
  alt="Leone DiCamp, Desenvolvedor Full Stack"
  className="relative w-full h-auto object-cover transition-all duration-700 grayscale-0 lg:grayscale lg:hover:grayscale-0"
  loading="lazy"
/>
                {/* Badge sobreposto */}
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 font-bold text-sm tracking-wider uppercase">
                  Full Stack
                </div>
              </div>
            </Reveal>
          </div>

          {/* Coluna de conteúdo */}
          <div className="lg:col-span-7 space-y-8">
            <SectionTitle
              eyebrow="Quem está por trás"
              title={
                <>
                  Não sou fornecedor.{' '}
                  <span className="text-red-600">Sou parceiro de negócio.</span>
                </>
              }
              align="left"
              theme="dark"
            />

            <Reveal delay={100}>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Sou <strong className="text-white">Leone DiCamp</strong>,
                  desenvolvedor Full Stack especializado em construir
                  plataformas que resolvem dores reais — não protótipos, não
                  templates. Sistemas próprios que dão autonomia ao seu negócio.
                </p>
                <p>
                  Meu foco é eliminar intermediários: taxas abusivas,
                  dependência de terceiros, dados presos em plataformas que não
                  são suas. Entrego a máquina pronta,{' '}
                  <strong className="text-white">
                    do banco de dados à interface do usuário
                  </strong>
                  .
                </p>
              </div>
            </Reveal>

            {/* Diferenciais */}
            <Reveal delay={200}>
              <ul className="space-y-3">
                {differentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 bg-red-600 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Stats */}
            <Reveal delay={300}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl md:text-4xl font-bold text-red-600">
                      {s.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={400}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Badge variant="outline">● Disponível</Badge>
                <Button
                  variant="primary"
                  onClick={() => {
                    document
                      .getElementById('contato')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Vamos conversar →
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}