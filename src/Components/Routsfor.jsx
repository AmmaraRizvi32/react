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
const Routsfor = () => {

  return (
        
        <BrowserRouter>
        
           <Navbar />

            <Routes>
               
               {/* <Route  path="/" element={<Home/>} /> */}
               <Route  path="/home" element={<Home/>} />
               {/* <Route  path="/contact" element={<Form/>} /> */}
               <Route path="/about" element={<About/>} />
               <Route path='/products' element={<Product />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/blog' element={<Blog />} />
               
             </Routes>
           <Footer />  
            </BrowserRouter>
    
  )
}

export default Routsfor;
