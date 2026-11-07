import { useId, useState } from 'react'
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type BaseProps = {
  label: string
  error?: string
}

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: 'input' }

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: 'textarea' }

type FloatingInputProps = InputProps | TextareaProps

/**
 * Input/Textarea com floating label (o label "sobe" ao focar ou ter valor).
 */
export function FloatingInput(props: FloatingInputProps) {
  const { label, error, className = '', as = 'input', ...rest } = props
  const id = useId()
  const [focused, setFocused] = useState(false)

  const value = (rest as { value?: unknown }).value
  const hasValue = value !== undefined && value !== ''
  const floated = focused || hasValue

  const commonFieldClass =
    'peer w-full bg-zinc-950 border-2 border-white/20 text-white px-4 pt-6 pb-2 outline-none transition-colors focus:border-red-600 disabled:opacity-50'

  const labelClass = `pointer-events-none absolute left-4 transition-all duration-200 ${
    floated
      ? 'top-2 text-xs text-red-500'
      : 'top-1/2 -translate-y-1/2 text-base text-gray-400'
  }`

  return (
    <div className={`relative ${className}`}>
      {as === 'textarea' ? (
        <textarea
          id={id}
          className={`${commonFieldClass} min-h-[120px] resize-y`}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={commonFieldClass}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
    </div>
  )
}