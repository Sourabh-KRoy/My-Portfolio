import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Services from './pages/Services'
import './Variable.css'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Project from './pages/Project'
import About from './pages/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Services />
      <Contact />
      <Footer />

    </>
  )
}

export default App
