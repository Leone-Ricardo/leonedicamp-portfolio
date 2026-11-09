import { useEffect, useState } from 'react'
import { Intro } from '@/components/layout/Intro'
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
  const [showIntro, setShowIntro] = useState<boolean | null>(null)

  useEffect(() => {
    // Só mostra a intro se ainda não foi vista nesta sessão
    const seen = sessionStorage.getItem('intro-seen')
    setShowIntro(!seen)
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem('intro-seen', '1')
    setShowIntro(false)
  }

  // Durante a primeira renderização (antes de saber se mostra ou não), não renderiza nada
  // pra evitar flash do Hero antes da intro
  if (showIntro === null) {
    return <div className="min-h-screen bg-black" />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {showIntro && <Intro onComplete={handleIntroComplete} />}

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