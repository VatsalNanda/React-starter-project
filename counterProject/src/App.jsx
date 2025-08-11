import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)  // this is a hook, useState
  // counter is the variable and setCounter is a function responsible for setting the variable value

  // let counter = 15

  const addValue = () =>{
    counter = counter+1 
    setCounter(counter)
    
    // console.log("Counter" , counter)
  }

  const removeValue = () => {
    counter = counter -1
    setCounter(counter)
    
  }

  return (
    <>
    <h1> Counter value: {counter}</h1>
    <button onClick = {addValue}> Add value</button>
    <br />
    <button onClick = {removeValue}>Remove value</button>
    </>
  )
}

export default App
