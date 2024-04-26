import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  const [itemNumber, setItemNumber] = useState(0);

  return (
    <>
      <NavBar itemNumber={itemNumber} />
      <div className="contentContainer">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
