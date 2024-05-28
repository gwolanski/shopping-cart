import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import routes from './routes';
import App from "./App";
import Home from "./Home";
import Catalog from "./Catalog";
import ShoppingCart from "./ShoppingCart";

// const router = createBrowserRouter(routes);

const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
