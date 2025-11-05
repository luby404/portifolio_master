import { useState } from 'react'


import Header from './pages/components/header/Header'

import Home from './pages/sections/home/Home'
import Sobre from './pages/sections/sobre/Sobre'
import Habilidades from './pages/sections/habilidades/Habilidades'
import Projetos from './pages/sections/Projetos/Projetos'
import Contato from './pages/sections/contato/Contato'
import Footer from './pages/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Sobre/>
      <Habilidades/>
      <Projetos/>
      <Contato/>
    </>
  )
}

export default App
