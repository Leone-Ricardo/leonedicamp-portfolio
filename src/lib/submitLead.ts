import type { Lead, SubmitLeadResponse, SubmitLeadError } from '@/types'

// ============================================
// MOCK DO BACKEND — simula Node.js + PostgreSQL
// ============================================
//
// Em produção, esta função faria:
//   1. POST para /api/leads
//   2. Validar no servidor (Zod, por exemplo)
//   3. Inserir na tabela `leads` do PostgreSQL via Prisma/Drizzle
//   4. Retornar { success, id, timestamp }
//
// Aqui simulamos tudo com latência e validação local.
// ============================================

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
    // Aceita formatos: 21999999999, (21) 99999-9999, +55 21 99999-9999
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
  // Simula um ID estilo UUID v4 (não é criptograficamente forte, só visual)
  return 'lead_' + Math.random().toString(36).substring(2, 15)
}

export async function submitLead(
  lead: Lead
): Promise<SubmitLeadResponse | SubmitLeadError> {
  // 1. Simula latência de rede
  await new Promise((resolve) => setTimeout(resolve, FAKE_LATENCY_MS))

  // 2. Valida no "servidor"
  const fieldErrors = validateLead(lead)
  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      message: 'Verifique os campos e tente novamente.',
      fieldErrors,
    }
  }

  // 3. Simula inserção no banco (aqui seria Prisma/Drizzle)
  const id = generateId()
  const timestamp = new Date().toISOString()

  // Log de "auditoria" (em produção seria um logger real)
  console.info('[MOCK BACKEND] Lead recebido:', { id, ...lead, timestamp })

  // 4. Retorna sucesso
  return {
    success: true,
    message: 'Recebido com sucesso!',
    id,
    timestamp,
  }
}