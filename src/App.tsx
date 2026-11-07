function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container-site py-20 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gradient-white">
          Design System <span className="text-red-600">OK</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl">
          Fonte Inter, cores, tokens e utilitários configurados.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 shadow-brutal transition-colors">
            CTA Primário
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 shadow-brutal-red transition-colors">
            CTA Secundário
          </button>
        </div>
      </div>
    </div>
  )
}

export default App