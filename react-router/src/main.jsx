import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Route from './Route.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
import Github from './components/github/github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Route />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:"user/:userid",
        element: <User />
      },
      {
        path:"github",
        element: <Github />
      }
    ]
  }

])


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path = '/' element={<Route />} >
//       <Route path = '' element={<Home />} />
//       <Route path = 'about' element={<About />} />
//       <Route path = 'contact' element={<Contact />} />
//     </Route> 
//   )
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
