import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from "./components/Card";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-2xl mb-4'>Tailwind CSS</h1>
      <Card username = "Vatsal" textValue="Val1"></Card>
      <Card username = "Nanda" textValue="Val2"></Card>
      
    </>
  )
}

export default App
