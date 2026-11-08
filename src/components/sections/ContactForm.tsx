import { useState } from 'react'
import type { FormEvent } from 'react'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionTitle } from '@/components/ui/SectionTitle'

// Número do WhatsApp (com DDI + DDD, apenas dígitos)
const WHATSAPP_NUMBER = '5521999999999' // Substitua pelo seu número real

export function ContactForm() {
  const [form, setForm] = useState({ name: '', whatsapp: '', details: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Informe seu nome'
    if (!form.whatsapp.trim()) newErrors.whatsapp = 'Informe seu WhatsApp'
    if (!form.details.trim()) newErrors.details = 'Conte um pouco sobre o projeto'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})

    // Monta a mensagem e abre o WhatsApp
    const message = encodeURIComponent(
      `Olá, Leone! Meu nome é ${form.name}.\n\nWhatsApp: ${form.whatsapp}\n\nDetalhes do projeto:\n${form.details}`
    )
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

    // Abre em nova aba (comportamento esperado em desktop e mobile)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    // Limpa o formulário
    setForm({ name: '', whatsapp: '', details: '' })
  }

  return (
    <section
      id="contato"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Glow vermelho central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Coluna esquerda: copy de fechamento */}
          <div className="lg:sticky lg:top-32">
            <SectionTitle
              eyebrow="Vamos construir"
              title={
                <>
                  Seu negócio merece um sistema{' '}
                  <span className="text-red-600">que é seu.</span>
                </>
              }
              description="Sem taxas escondidas, sem intermediários, sem depender de plataformas que não te pertencem. Me conta o que você precisa — eu te respondo em até 24h."
              align="left"
              theme="dark"
            />

            <Reveal delay={200}>
              <div className="mt-8 space-y-4 text-gray-400 text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600" />
                  <span>Resposta em até 24h úteis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600" />
                  <span>Orçamento sem compromisso</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-600" />
                  <span>Atendimento direto comigo (sem intermediários)</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Coluna direita: formulário */}
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 md:p-8 border-2 border-white/10 bg-zinc-950"
              noValidate
            >
              <FloatingInput
                label="Nome completo"
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                error={errors.name}
                autoComplete="name"
              />

              <FloatingInput
                label="WhatsApp (com DDD)"
                type="tel"
                value={form.whatsapp}
                onChange={(e) =>
                  setForm((f) => ({ ...f, whatsapp: e.target.value }))
                }
                error={errors.whatsapp}
                autoComplete="tel"
              />

              <FloatingInput
                as="textarea"
                label="Detalhes do projeto"
                value={form.details}
                onChange={(e) =>
                  setForm((f) => ({ ...f, details: e.target.value }))
                }
                error={errors.details}
              />

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Enviar pelo WhatsApp →
              </Button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Ao enviar, você será redirecionado para o WhatsApp com a
                mensagem já pronta. Seus dados não são armazenados.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}