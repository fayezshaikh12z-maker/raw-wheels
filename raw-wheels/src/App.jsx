import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyRaw from './components/WhyRaw'
import Process from './components/Process'
import Locations from './components/Locations'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <WhyRaw/>
      <Process/>
      <Locations/>
      <Testimonials/>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
