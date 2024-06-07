import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home,About,Contact, User, Github} from './components'
import { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element: <Home />
      },{
        path:"about",
        element: <About />
      },{
        path:"contact",
        element: <Contact />
      }
      ,{
        path:"user/:userid",
        element: <User />
      }
      ,{
        loader:githubInfoLoader,
        path:"github",
        element: <Github />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
