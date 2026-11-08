export type Lead = {
  name: string
  whatsapp: string
  details: string
}

export type SubmitLeadResponse = {
  success: boolean
  message: string
  id?: string
  timestamp?: string
}

export type SubmitLeadError = {
  success: false
  message: string
  fieldErrors?: Partial<Record<keyof Lead, string>>
}