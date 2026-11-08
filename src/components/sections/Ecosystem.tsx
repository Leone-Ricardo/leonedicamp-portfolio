import { pillars } from '@/data/pillars'
import { Reveal } from '@/components/ui/Reveal'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function Ecosystem() {
  return (
    <section
      id="solucoes"
      className="relative bg-zinc-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Glow vermelho decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-site relative">
        <SectionTitle
          eyebrow="O ecossistema"
          title={
            <>
              Quatro nichos.{' '}
              <span className="text-red-600">Uma mesma obsessão:</span>{' '}
              eliminar intermediários.
            </>
          }
          description="Soluções sob medida para negócios que cansaram de pagar caro por plataformas que não são deles."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 80}>
              <article className="group relative h-full bg-black border border-white/10 p-8 transition-all duration-300 hover:border-red-600 hover:-translate-y-1">
                {/* Ícone */}
                <div className="mb-6 w-12 h-12 text-red-600 transition-transform duration-300 group-hover:scale-110">
                  {pillar.icon}
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {pillar.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="w-1.5 h-1.5 bg-red-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Número decorativo no canto */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-white/5 group-hover:text-red-600/20 transition-colors">
                  0{index + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}