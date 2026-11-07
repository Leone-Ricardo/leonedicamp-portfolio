import { useId, useState } from 'react'
import type { ReactNode } from 'react'

type AccordionItemProps = {
  question: string
  answer: ReactNode
  defaultOpen?: boolean
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-red-500"
      >
        <span className="text-lg font-semibold text-white md:text-xl">
          {question}
        </span>
        <span
          className={`text-2xl font-light text-red-600 transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 text-gray-400 leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  )
}