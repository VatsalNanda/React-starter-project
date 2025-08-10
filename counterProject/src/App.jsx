import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15

  const addValue = () =>{
    counter = counter+1 
    console.log("Counter" , counter)
  }

  return (
    <>
    <h1> Counter value: {counter}</h1>
    <button onClick = {addValue}> Add value</button>
    <br />
    <button>Remove value</button>
    </>
  )
}

export default App
