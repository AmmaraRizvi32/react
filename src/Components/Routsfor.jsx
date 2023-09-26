import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter ,Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Homelast from './Homelast'
import Footer from './Footer'
import Home from './Home'
import Form from './Form'
import Homesect6 from "./Homesect6";

import About from './About'
// import Form from './Form'
import HomeBanner from './HomeComp/HomeBanner';
const Routsfor = () => {

  return (
        
        <BrowserRouter>
        
           <Navbar />

            <Routes>
               
               <Route  path="/" element={<Home/>} />
               <Route  path="/contact" element={<Form/>} />
               <Route path="/about" element={<About/>} />
               <Route path='/products' element={<Homesect6 />} />
               
             </Routes>
           <Footer />  
            </BrowserRouter>
    
  )
}

export default Routsfor;
