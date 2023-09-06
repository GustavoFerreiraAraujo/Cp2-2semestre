import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}

export default App
