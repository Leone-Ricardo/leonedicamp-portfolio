import { faqItems } from '@/data/faq'
import { AccordionItem } from '@/components/ui/Accordion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-zinc-950 py-24 md:py-32 overflow-hidden"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Coluna esquerda: título fixo */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <SectionTitle
              eyebrow="Dúvidas comuns"
              title={
                <>
                  Antes de me chamar,{' '}
                  <span className="text-red-600">leia isso.</span>
                </>
              }
              description="Respostas diretas para as perguntas que mais recebo. Se a sua não estiver aqui, me chama no WhatsApp."
              align="left"
              theme="dark"
            />
          </div>

          {/* Coluna direita: accordion */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border-t border-white/10">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    defaultOpen={index === 0}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}