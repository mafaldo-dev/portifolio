import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Projects from './component/Projects'
import Services from './component/Services'
import Contact from './component/Contact'
import Footer from './component/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

