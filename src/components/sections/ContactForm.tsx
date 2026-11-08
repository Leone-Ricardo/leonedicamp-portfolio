import { useState } from 'react'
import type { FormEvent } from 'react'
import { FloatingInput } from '@/components/ui/FloatingInput'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { submitLead } from '@/lib/submitLead'
import type { Lead } from '@/types'

const WHATSAPP_NUMBER = '5521967156104' // Substitua pelo seu número real

export function ContactForm() {
  const [form, setForm] = useState<Lead>({ name: '', whatsapp: '', details: '' })
  const [errors, setErrors] = useState<Partial<Record<keyof Lead, string>>>({})
  const [loading, setLoading] = useState(false)
  const [globalError, setGlobalError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setGlobalError(null)
    setLoading(true)

    try {
      const result = await submitLead(form)

      if (!result.success) {
        setErrors(result.fieldErrors ?? {})
        setGlobalError(result.message)
        setLoading(false)
        return
      }

      // Mock OK → abre WhatsApp com a mensagem pronta
      const message = encodeURIComponent(
        `Olá, Leone! Meu nome é ${form.name}.\n\nWhatsApp: ${form.whatsapp}\n\nDetalhes do projeto:\n${form.details}`
      )
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
        '_blank',
        'noopener,noreferrer'
      )

      // Limpa o formulário
      setForm({ name: '', whatsapp: '', details: '' })
      setErrors({})
    } catch {
      setGlobalError('Algo deu errado. Tente novamente em instantes.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contato"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Coluna esquerda: copy */}
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
                disabled={loading}
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
                disabled={loading}
              />

              <FloatingInput
                as="textarea"
                label="Detalhes do projeto"
                value={form.details}
                onChange={(e) =>
                  setForm((f) => ({ ...f, details: e.target.value }))
                }
                error={errors.details}
                disabled={loading}
              />

              {globalError && (
                <p className="text-sm text-red-500 text-center">{globalError}</p>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar pelo WhatsApp →'}
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