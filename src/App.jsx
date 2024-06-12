import { useState } from 'react'

import MainSection from './components/MainSection/MainSection'
import './App.css'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <MainSection/>
       <Footer/>
    </>
  )
}

export default App
