import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { AccordionItem } from '@/components/ui/Accordion'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container-site py-20 space-y-16">
        {/* Botões */}
        <section>
          <SectionTitle
            eyebrow="Componentes"
            title={<>Botões <span className="text-red-600">UI</span></>}
            description="Três variantes, três tamanhos."
          />
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button variant="primary">Primário</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </section>

        {/* Badges */}
        <section className="text-center">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="red">🔥 Novo</Badge>
            <Badge variant="outline">Cliente verificado</Badge>
            <Badge variant="white">+150 vendas</Badge>
          </div>
        </section>

        {/* Formulário */}
        <section className="max-w-md mx-auto space-y-6">
          <FloatingInput label="Nome completo" type="text" />
          <FloatingInput label="WhatsApp" type="tel" />
          <FloatingInput as="textarea" label="Detalhes do projeto" />
          <Button variant="primary" className="w-full">Enviar</Button>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <AccordionItem
            question="Quanto tempo leva para entregar um projeto?"
            answer="Depende da complexidade, mas projetos de landing page ficam entre 2 e 4 semanas."
            defaultOpen
          />
          <AccordionItem
            question="Você cobra mensalidade?"
            answer="Não. O modelo é pagamento único pela entrega, com suporte opcional."
          />
          <AccordionItem
            question="Atende fora do Rio de Janeiro?"
            answer="Sim, atendo remotamente todo o Brasil."
          />
        </section>
      </div>
    </div>
  )
}

export default App