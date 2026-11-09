import { useEffect, useState } from 'react'

type IntroProps = {
  onComplete: () => void
}

type Phase = 'idle' | 'boot' | 'exiting' | 'done'

const BOOT_LINES = [
  '> initializing leone_dicamp.system...',
  '> loading modules [████████████] 100%',
  '> status: ONLINE',
  '> welcome.',
]

export function Intro({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentText, setCurrentText] = useState('')

  // Fase de boot: só começa após o clique no botão Power
  useEffect(() => {
    if (phase !== 'boot') return
    if (visibleLines >= BOOT_LINES.length) return

    const line = BOOT_LINES[visibleLines]
    let charIndex = 0

    const interval = setInterval(() => {
      charIndex++
      setCurrentText(line.slice(0, charIndex))

      if (charIndex >= line.length) {
        clearInterval(interval)
        setTimeout(() => {
          setVisibleLines((v) => v + 1)
          setCurrentText('')
        }, 180)
      }
    }, 22)

    return () => clearInterval(interval)
  }, [visibleLines, phase])

  // Após boot finalizar, espera e sai
  useEffect(() => {
    if (visibleLines < BOOT_LINES.length) return

    const timeout = setTimeout(() => {
      setPhase('exiting')
      setTimeout(onComplete, 600)
    }, 500)

    return () => clearTimeout(timeout)
  }, [visibleLines, onComplete])

  // Botão Power
  const handlePowerOn = () => {
    setPhase('boot')
  }

  // Skip
  const handleSkip = () => {
    setPhase('exiting')
    setTimeout(onComplete, 300)
  }

  if (phase === 'done') return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        phase === 'exiting'
          ? 'opacity-0 -translate-y-full pointer-events-none'
          : 'opacity-100 translate-y-0'
      }`}
      role="dialog"
      aria-label="Intro do site"
    >
      {/* Grid de fundo sutil */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Linha de scanner — só ativa no boot */}
      {phase !== 'idle' && (
        <div
          className="absolute inset-x-0 top-0 h-px bg-red-600 shadow-[0_0_20px_4px_rgba(220,38,38,0.8)] animate-scan"
          aria-hidden="true"
        />
      )}

      {/* Logo */}
      <div className="relative text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in">
          Leone <span className="text-red-600">DiCamp</span>
        </h1>
        <p className="mt-2 text-xs md:text-sm font-mono text-gray-500 uppercase tracking-[0.3em] animate-fade-in">
          Developer System
        </p>
      </div>

      {/* Fase idle: botão de Power */}
      {phase === 'idle' && (
        <div className="relative flex flex-col items-center gap-6">
          <button
            type="button"
            onClick={handlePowerOn}
            className="group relative w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-red-600/40 text-red-600 transition-all duration-300 hover:border-red-600 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-600/40"
            aria-label="Ligar o sistema"
          >
            {/* Glow pulsante */}
            <span className="absolute inset-0 rounded-full bg-red-600/20 blur-xl animate-pulse-red" />
            {/* Ícone de Power (SVG) */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="relative w-9 h-9 md:w-10 md:h-10 mx-auto"
            >
              <path d="M12 3v9" />
              <path d="M6.3 6.3a9 9 0 1 0 11.4 0" />
            </svg>
          </button>
          <p className="text-xs md:text-sm font-mono text-gray-500 uppercase tracking-[0.3em] animate-fade-in">
            click to power on
          </p>
        </div>
      )}

      {/* Fase boot: terminal digitando */}
      {phase !== 'idle' && (
        <div className="relative w-full max-w-md px-6 font-mono text-sm text-green-500">
          {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="mb-1">
              {line}
            </div>
          ))}
          {visibleLines < BOOT_LINES.length && (
            <div className="mb-1 flex items-center">
              <span>{currentText}</span>
              <span className="ml-1 inline-block w-2 h-4 bg-green-500 animate-blink" />
            </div>
          )}
        </div>
      )}

      {/* Skip */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-xs font-semibold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]"
        aria-label="Pular intro"
      >
        Skip →
      </button>
    </div>
  )
}