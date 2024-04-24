import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <NavBar />
      <div className="contentContainer">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
