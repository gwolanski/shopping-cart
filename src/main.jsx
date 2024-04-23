import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

import './index.css'
import Catalog from './components/Catalog.jsx'
import ShoppingCart from './components/ShoppingCart.jsx'
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'catalog',
    element: <Catalog />
  },
  {
    path: 'shoppingCart',
    element: <ShoppingCart />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
