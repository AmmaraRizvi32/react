import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter ,Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Homelast from './Homelast'
import Footer from './Footer'
import Home from './Home'
import Form from './Form'

const Routsfor = () => {

  return (
        
        <BrowserRouter>
        
           <Navbar />

            <Routes>
               
               <Route  path="/" element={<Home/>} />
               <Route  path="/contact" element={<Form/>} />
               <Route path="/about" element={<Homelast/>} />
               <Route path='/footer' element={<Footer />} />
             </Routes>
           <Footer />  
            </BrowserRouter>
    
  )
}

export default Routsfor
