import { useState } from 'react'
import GuitarNeck from './components/GuitarNeck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GuitarNeck />
    </>
  )
}

export default App
