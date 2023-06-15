import { useState } from 'react'

import MainSection from './components/MainSection/MainSection'
import PlantCard from './components/Card/PlantCard'
import './App.css'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MainSection/>
       <PlantCard/>
       <Footer/>
    </>
  )
}

export default App
