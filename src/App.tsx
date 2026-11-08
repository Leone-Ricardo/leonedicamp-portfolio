import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { CaseStudy } from '@/components/sections/CaseStudy'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { TechStack } from '@/components/sections/TechStack'
import { FAQ } from '@/components/sections/FAQ'
import { ContactForm } from '@/components/sections/ContactForm'

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
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App