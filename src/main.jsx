import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Personagem from './Personagem.jsx'

const paginas = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "/personagem/:id/",
      element: <Personagem />
    }
  ])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={paginas} />
  )