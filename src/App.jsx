import { useState } from 'react'

import MainSection from './components/MainSection/MainSection'
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MainSection/>
       <Hero/>
       <Footer/>
    </>
  )
}

export default App
