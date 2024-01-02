import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLyout from './Layout/MainLyout.jsx'
import Home from './Components/Home.jsx'
import Gallery from './Components/Gallery.jsx'
import Signin from './Components/Signin.jsx'
import Register from './Components/Register.jsx'
import AuthProviders from './Provider/AuthProviders.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLyout></MainLyout>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/gallery',
        element:<Gallery></Gallery>
      },
      {
        path:'/signin',
        element:<Signin></Signin>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
