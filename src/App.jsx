import './App.css'
import AboutMe from './components/AboutMe'
import ContactPage from './components/ContactPage'
import Firstpage from './components/Firstpage'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WelcomePage from './components/WelcomePage'

function App() {
  return (
    <>
    <Firstpage/>
    <Header />
    <WelcomePage />
    <AboutMe/>
    <Skills/>
    <Projects/>
    <ContactPage/>
    </>
  )
}

export default App
