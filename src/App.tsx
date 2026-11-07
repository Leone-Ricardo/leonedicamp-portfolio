import { Reveal } from '@/components/ui/Reveal'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Bloco visível imediatamente */}
      <section className="container-site min-h-screen flex flex-col justify-center items-center text-center gap-6">
        <h1 className="text-5xl md:text-7xl font-bold text-gradient-white">
          Role para baixo <span className="text-red-600">↓</span>
        </h1>
        <p className="text-gray-400">As seções abaixo surgem ao entrar na viewport.</p>
      </section>

      {/* Blocos que animam ao aparecer */}
      {[1, 2, 3, 4, 5].map((n) => (
        <Reveal key={n} delay={n * 80}>
          <section className="container-site py-32 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient-white">
              Bloco <span className="text-red-600">{n}</span>
            </h2>
            <p className="text-gray-400 mt-4">Revelado com sucesso ✨</p>
          </section>
        </Reveal>
      ))}

      {/* Bloco final com botão de reset */}
      <section className="container-site py-32 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 shadow-brutal transition-colors"
        >
          Voltar ao topo ↑
        </button>
      </section>
    </div>
  )
}

export default App