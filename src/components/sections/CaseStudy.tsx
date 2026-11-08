import undergroundMockup from '@/assets/underground-mockup.png'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const results = [
  { value: '+150', label: 'ingressos vendidos' },
  { value: '0%', label: 'taxas de intermediários' },
  { value: '-15%', label: 'economia por venda' },
]

export function CaseStudy() {
  return (
    <section
      id="casos"
      className="relative bg-white text-black py-24 md:py-32 overflow-hidden"
    >
      <div className="container-site">
        {/* Cabeçalho da seção */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <Badge variant="red" className="mb-6">
              Estudo de Caso
            </Badge>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Underground RJ:{' '}
              <span className="text-red-600">
                a libertação das taxas de 15%.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Como um sistema próprio de checkout transformou a operação de um
              evento underground — eliminando intermediários e devolvendo o
              controle (e o lucro) para o organizador.
            </p>
          </Reveal>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna da imagem (Mockup de navegador) */}
          <Reveal>
            <div className="relative">
              {/* Moldura neo-brutalista */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-red-600" />

              {/* Janela de navegador */}
              <div className="relative bg-zinc-900 shadow-2xl overflow-hidden">
                {/* Barra superior estilo Mac */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-4 flex-1 bg-zinc-900 rounded text-xs text-gray-500 px-3 py-1">
                    underground-rj.com.br
                  </div>
                </div>
                {/* Imagem do sistema */}
                <img
                  src={undergroundMockup}
                  alt="Tela inicial do sistema Underground RJ"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Coluna de conteúdo */}
          <div className="space-y-8">
            {/* O problema */}
            <Reveal delay={100}>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-3">
                  O problema
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  O Underground RJ dependia de plataformas terceiras que
                  cobravam <strong>15% sobre cada ingresso vendido</strong>.
                  Além da margem corroída, os dados dos clientes ficavam presos
                  fora do controle do organizador.
                </p>
              </div>
            </Reveal>

            {/* A solução */}
            <Reveal delay={200}>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-600 mb-3">
                  A solução
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Construímos um <strong>checkout transparente próprio</strong>{' '}
                  com pagamento via Pix e cartão, validação de ingresso por QR
                  Code e painel administrativo em tempo real — tudo hospedado e
                  operado pelo próprio evento.
                </p>
              </div>
            </Reveal>

            {/* Resultados */}
            <Reveal delay={300}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-black">
                {results.map((r) => (
                  <div key={r.label}>
                    <div className="text-3xl md:text-4xl font-bold text-red-600">
                      {r.value}
                    </div>
                    <div className="text-xs text-gray-600 mt-1 uppercase tracking-wide leading-tight">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Depoimento (placeholder) */}
            <Reveal delay={400}>
              <blockquote className="border-l-4 border-red-600 pl-6 py-2">
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "Depoimento do organizador será adicionado em breve."
                </p>
                <footer className="mt-3 text-sm text-gray-500">
                  — Organizador do Underground RJ
                </footer>
              </blockquote>
            </Reveal>

            {/* CTA */}
            <Reveal delay={500}>
              <Button
                variant="primary"
                onClick={() => {
                  document
                    .getElementById('contato')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Quero um sistema assim →
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}