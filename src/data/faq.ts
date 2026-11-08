export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Quanto tempo leva para entregar um projeto?',
    answer:
      'Depende da complexidade. Landing pages e sites institucionais ficam entre 2 e 3 semanas. Sistemas completos (com checkout, painel administrativo e banco de dados) variam entre 4 e 8 semanas. Eu envio um cronograma detalhado logo após a reunião de escopo, para você saber exatamente o que esperar em cada etapa.',
  },
  {
    question: 'Como funciona a cobrança? Tem mensalidade?',
    answer:
      'O projeto é cobrado por escopo (pagamento único pela entrega), mas a manutenção é mensal. O valor da mensalidade varia conforme a complexidade do sistema — quanto mais recursos, maior o investimento em manutenção. Essa taxa cobre hospedagem, atualizações de segurança, backups, monitoramento e pequenos ajustes contínuos. Você nunca fica com um sistema desatualizado ou vulnerável.',
  },
  {
    question: 'Já tenho um site. Dá para migrar?',
    answer:
      'Sim. Faço auditoria do seu site atual, mapeamento de SEO (para não perder tráfego) e migração completa para a nova plataforma. Preservamos URLs importantes e redirecionamos o que for necessário.',
  },
  {
    question: 'Como funciona o suporte depois da entrega?',
    answer:
      'Todo projeto inclui 30 dias de garantia para ajustes. Depois disso, a manutenção mensal cobre suporte contínuo, correções, atualizações e pequenas melhorias. Você tem um canal direto comigo pelo WhatsApp — sem fila de atendimento, sem robô.',
  },
  {
    question: 'Você atende fora do Rio de Janeiro?',
    answer:
      'Sim. Trabalho remotamente com clientes em todo o Brasil. Reuniões por vídeo, comunicação assíncrona via WhatsApp e entregas organizadas em etapas. A distância nunca foi um problema.',
  },
  {
    question: 'Quais são as formas de pagamento?',
    answer:
      'Trabalho com Pix, transferência bancária e cartão (via link de pagamento). Projetos são divididos em etapas: 40% na aprovação do escopo, 30% no meio da execução e 30% na entrega final. A manutenção mensal é cobrada separadamente, a partir do mês seguinte à entrega.',
  },
]