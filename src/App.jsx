import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [itemNumber, setItemNumber] = useState(0);
  //i need to lift the state up so that all component can access cartItems. need to figure out how to get that to work using Outlet
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <NavBar itemNumber={itemNumber} />
      <div className="contentContainer">
        <Outlet context={[cartItems, setCartItems]} />
      </div>
      <Footer />
    </>
  )
}

export default App
