import { useState } from 'react'
import './App.css'
import NavbarLeft from './navbar_left'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarLeft />
    </>
  )
}

export default App
