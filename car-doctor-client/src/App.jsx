import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './pages/shared/NavBar'
import Footer from './pages/shared/Footer';

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
