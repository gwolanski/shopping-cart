import { useEffect, useState } from 'react'
import './styles/App.css'
import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let newQuantity = 0;
    if (cartItems.length > 0) {
      cartItems.forEach(item => {
        newQuantity += item[1];
      });
    }
    setTotalQuantity(newQuantity);
  });


  return (
    <>
      <div className="navContainer">
        <NavBar totalQuantity={totalQuantity} />
      </div>
      <div className="contentContainer">
        <Outlet context={[cartItems, setCartItems]} />
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </>
  )
}

export default App;
