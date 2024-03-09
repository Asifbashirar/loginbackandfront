import Home from'./Pages/Home'
import About from'./Pages/About'
import Contact from'./Pages/Contact'
import Login from'./Pages/Login'
import Register from'./Pages/Register'
import Service from'./Pages/Service'
import{BrowserRouter,Route, Routes} from 'react-router-dom'
import './index.css'
import {Navbar} from './Components/Navbar'
import { Footer} from './Components/Footer'
import {Error} from'./Pages/Error'
function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
     )
}

export default App
