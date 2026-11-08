import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { CaseStudy } from '@/components/sections/CaseStudy'
import { Ecosystem } from '@/components/sections/Ecosystem'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudy />
        <Ecosystem />
        {/* Placeholders das próximas seções */}
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