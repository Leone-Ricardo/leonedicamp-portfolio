import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Placeholders das próximas seções */}
        <section id="casos" className="container-site py-32 text-center">
          <p className="text-gray-500">Próxima seção: Estudo de Caso</p>
        </section>
        <section id="solucoes" className="container-site py-32 text-center">
          <p className="text-gray-500">Próxima seção: Soluções</p>
        </section>
        <section id="stack" className="container-site py-32 text-center">
          <p className="text-gray-500">Próxima seção: Stack</p>
        </section>
        <section id="faq" className="container-site py-32 text-center">
          <p className="text-gray-500">Próxima seção: FAQ</p>
        </section>
        <section id="contato" className="container-site py-32 text-center">
          <p className="text-gray-500">Próxima seção: Contato</p>
        </section>
      </main>
    </div>
  )
}

export default App