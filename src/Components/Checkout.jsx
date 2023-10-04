import { Button, Checkbox, FormControl, FormLabel, Grid, Input, Radio, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import ContBanner from './ContactComp/ContBanner'

const Checkout = () => {
  return (
    <>
    <ContBanner />
     <div className='container mt-5'>
        <Typography variant='p' marginY={1} sx={{ display:'block' }}>Returning Customer? Click here to login</Typography>
        <Typography variant='p' >If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</Typography>
       <div className="col-md-5 my-5 d-flex justify-content-evenly">
         <TextField  id="outlined-basic" label="Username or Email" variant="outlined" size='small'/>
         <TextField id="outlined-basic" label="Password" variant="outlined" size='small'/>
       </div>
       <div className="col-md-5 mt-5 mb-4 d-flex justify-content-evenly">
         <Button variant='contained' sx={{backgroundColor:'rgb(253, 143, 95)',padding:'10px 25px'}}>Login</Button>
         <div><Checkbox />  Create an account?</div>
       </div>
       <div>
           <Typography variant='p'>Have a coupon? Click here to enter your code</Typography>
       </div>
       <div className="col-md-5 my-4">
         <TextField  sx={{width:'100%'}} id="outlined-basic" label="Username or Email" variant="outlined" size='small'/>
         <Button variant='contained' sx={{backgroundColor:'rgb(253, 143, 95)',padding:'15px 30px',margin:'22px 0'}}>Apply Copun</Button>
           
       </div>
      </div>
      <div className="container d-md-flex justify-content-between">
         <div className="col-md-8">
            <div className="row d-flex justify-content-evenly">
              <TextField sx={{ width:'45%' }}  id="outlined-basic" label="First Name" variant="outlined" size='small'/>
              <TextField sx={{ width:'45%' }}  id="outlined-basic" label="Last Name" variant="outlined" size='small'/>  
            </div>
            <div class="d-flex justify-content-center mt-3">
              <TextField sx={{ width:'97%',margin:'10px auto' }}  id="Company Name" label="Username or Email" variant="outlined" size='small'/>
            </div>
            <div className="row d-flex justify-content-evenly">
              <TextField sx={{ width:'45%' }}  id="outlined-basic" label="Phone Number" variant="outlined" size='small'/>
              <TextField sx={{ width:'45%' }}  id="outlined-basic" label="Email Address" variant="outlined" size='small'/>  
            </div>
            <div class="d-flex justify-content-center mt-3">
              <TextField sx={{ width:'97%',margin:'10px auto' }}  id="Company Name" label="Country Name" variant="outlined" size='small'/>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <TextField sx={{ width:'97%',margin:'10px auto' }}  id="Company Name" label="Address line 01" variant="outlined" size='small'/>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <TextField sx={{ width:'97%',margin:'10px auto' }}  id="Company Name" label="Address Line 02" variant="outlined" size='small'/>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <TextField sx={{ width:'97%',margin:'10px auto' }}  id="Company Name" label="Town / City" variant="outlined" size='small'/>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <TextField sx={{ width:'97%',margin:'10px auto' }}  id="Company Name" label="District" variant="outlined" size='small'/>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <TextField sx={{ width:'97%',margin:'10px auto' }}  id="Company Name" label="Postal Code/Zip" variant="outlined" size='small'/>
            </div>
         </div>
         <div className="col-md-3">

         </div>
      </div>
    </>
  )
}

export default Checkout
