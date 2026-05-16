import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectSection from './components/ProjectSection/ProjectSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div id="wrapper">
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>

      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
