import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter ,Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Login from './Login'
import Cart from './Cart' 

const Routsfor = () => {

  return (
        
        <BrowserRouter> 
           <Navbar />
            <Routes>
               <Route  path="/" element={<Home/>} />
               <Route  path="/home" element={<Home/>} />
               <Route  path="/login" element={<Login/>} />
               <Route path="/about" element={<About/>} />
               <Route path='/products' element={<Product />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/cart' element={<Cart/>} />
               
             </Routes>
           <Footer />  
            </BrowserRouter>
    
  )
}

export default Routsfor;
