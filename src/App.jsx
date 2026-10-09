import About from './sections/About'
import BeyondCode from './sections/BeyondCode'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import DesignerCoder from './sections/DesignerCoder'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <DesignerCoder />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <BeyondCode />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
