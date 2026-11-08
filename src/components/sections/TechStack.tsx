import { techStack } from '@/data/tech-stack'
import { Reveal } from '@/components/ui/Reveal'

const categories = ['Frontend', 'Backend', 'Banco de Dados', 'Ferramentas'] as const

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative bg-red-600 text-white py-24 md:py-32 overflow-hidden"
    >
      {/* Textura de grid sutil */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-site relative">
        {/* Cabeçalho */}
        <div className="max-w-4xl mb-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-4">
              O motor tecnológico
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Entrego a máquina pronta,{' '}
              <span className="text-black">
                do banco de dados à interface do usuário.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Arquitetura robusta, segura e escalável. Cada linha de código é
              pensada para o seu negócio crescer sem quebrar.
            </p>
          </Reveal>
        </div>

        {/* Grid de tecnologias por categoria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {categories.map((category, catIndex) => (
            <Reveal key={category} delay={catIndex * 100}>
              <div className="border-t-2 border-white/30 pt-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {techStack
                    .filter((t) => t.category === category)
                    .map((tech) => (
                      <li
                        key={tech.name}
                        className="text-lg md:text-xl font-semibold text-white hover:text-black transition-colors cursor-default"
                      >
                        {tech.name}
                      </li>
                    ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Rodapé da seção */}
        <Reveal delay={400}>
          <div className="mt-16 pt-8 border-t-2 border-white/30 flex flex-wrap items-center gap-x-12 gap-y-4">
            <div>
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                Código próprio
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">90+</div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                Performance Lighthouse
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">∞</div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                Escalabilidade
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}