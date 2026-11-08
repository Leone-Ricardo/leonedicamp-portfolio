import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { CaseStudy } from '@/components/sections/CaseStudy'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { TechStack } from '@/components/sections/TechStack'
import { FAQ } from '@/components/sections/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudy />
        <Ecosystem />
        <TechStack />
        <FAQ />
        {/* Placeholder da próxima seção */}
        <section id="contato" className="container-site py-32 text-center">
          <p className="text-gray-500">Próxima seção: Contato</p>
        </section>
      </main>
    </div>
  )
}

export default App