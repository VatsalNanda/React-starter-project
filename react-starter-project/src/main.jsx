import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  React from 'react'


const anotherUser = "Vatsal Nanda React"


const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Visit Google',
  anotherUser

)

createRoot(document.getElementById('root')).render(

  reactElement
  )
