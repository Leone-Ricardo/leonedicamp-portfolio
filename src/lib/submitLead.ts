import type { Lead, SubmitLeadResponse } from '@/types'

const FAKE_LATENCY_MS = 800

function validateLead(lead: Lead): Partial<Record<keyof Lead, string>> {
  const errors: Partial<Record<keyof Lead, string>> = {}

  if (!lead.name.trim()) {
    errors.name = 'Nome é obrigatório'
  } else if (lead.name.trim().length < 2) {
    errors.name = 'Nome muito curto'
  }

  if (!lead.whatsapp.trim()) {
    errors.whatsapp = 'WhatsApp é obrigatório'
  } else {
    const digits = lead.whatsapp.replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 13) {
      errors.whatsapp = 'Número de WhatsApp inválido'
    }
  }

  if (!lead.details.trim()) {
    errors.details = 'Conte um pouco sobre o projeto'
  } else if (lead.details.trim().length < 10) {
    errors.details = 'Detalhe um pouco mais (mínimo 10 caracteres)'
  }

  return errors
}

function generateId(): string {
  return 'lead_' + Math.random().toString(36).substring(2, 15)
}

export async function submitLead(lead: Lead): Promise<SubmitLeadResponse> {
  await new Promise((resolve) => setTimeout(resolve, FAKE_LATENCY_MS))

  const fieldErrors = validateLead(lead)
  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: 'Verifique os campos e tente novamente.',
      fieldErrors,
    }
  }

  const id = generateId()
  const timestamp = new Date().toISOString()

  console.info('[MOCK BACKEND] Lead recebido:', { id, ...lead, timestamp })

  return {
    success: true,
    message: 'Recebido com sucesso!',
    id,
    timestamp,
  }
}