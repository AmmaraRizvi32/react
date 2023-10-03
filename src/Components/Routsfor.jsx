import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter ,Routes} from 'react-router-dom'
import Navbar from './Navbar'
// import Homelast from './Homelast'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'
import Blog from './Blog'
import BlogDeta from './BlogDeta'
import Cart from './Cart'
import Category from './Category'
import Login from './Login'

const Routsfor = () => {

  return (
        
        <BrowserRouter>
        
           <Navbar />

            <Routes>
               
               <Route  path="/" element={<Home/>} />
               <Route  path="/home" element={<Home/>} />
               <Route path='/card' element={<Cart/>} />
               <Route path='/catagories' element={<Category />} />
               <Route path="/about" element={<About/>} />
               <Route path='/product' element={<Product />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/blog' element={<Blog />} />
               <Route path='/blogDeta' element={<BlogDeta />} />
               <Route path="/login" element={<Login />} />
             </Routes>
           <Footer />  
            </BrowserRouter>
    
  )
}

export default Routsfor;
