import type { ReactNode } from 'react'

export type Pillar = {
  id: string
  title: string
  description: string
  features: string[]
  icon: ReactNode
}

export const pillars: Pillar[] = [
  {
    id: 'eventos',
    title: 'Eventos e Ingressos',
    description:
      'Checkout próprio com validação de QR Code. Sem taxas de plataformas, sem filas, sem dor de cabeça.',
    features: ['Checkout transparente', 'QR Code único', 'Painel em tempo real'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V9z" />
        <path d="M9 7v10M15 7v10" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 'gastronomia',
    title: 'Gastronomia e Delivery',
    description:
      'Cardápios digitais e pedidos diretos no WhatsApp. O cliente pede, você recebe — sem iFood no meio.',
    features: ['Cardápio online', 'Pedido via WhatsApp', '0% de comissão'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 3v8a3 3 0 0 0 6 0V3M6 3v18M15 3v18M15 3c0 4 3 5 3 9s-3 5-3 5" />
      </svg>
    ),
  },
  {
    id: 'saude',
    title: 'Saúde e Clínicas',
    description:
      'Agendamento 24h inteligente com lembretes automáticos. Menos faltas, mais agenda cheia.',
    features: ['Agendamento 24/7', 'Lembretes automáticos', 'Prontuário digital'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
        <path d="M3 12h4l2-3 2 6 2-3h4" />
      </svg>
    ),
  },
  {
    id: 'conversao',
    title: 'Sites de Alta Conversão',
    description:
      'Landing pages velozes, otimizadas para SEO e construídas para transformar visitantes em clientes.',
    features: ['SEO técnico', 'Performance 90+', 'Copy focada em vendas'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
]