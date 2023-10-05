import { Button, Checkbox, FormControl, FormLabel, Grid, Input, Radio, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import ContBanner from './ContactComp/ContBanner'
import Cards from '../images/cards.jpg'
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
      <div className="container d-md-flex justify-content-between my-0 my-lg-5">
         <div className="col-md-8">
             <Typography variant='h5' marginY={4}>Billing Details</Typography>
            <div className="row d-flex justify-content-evenly">
              <TextField sx={{ width:'45%' }}  id="outlined-basic" label="First Name" variant="outlined" size='small'/>
              <TextField sx={{ width:'45%' }}  id="outlined-basic" label="Last Name" variant="outlined" size='small'/>  
            </div>
            <div class="d-flex justify-content-center my-3">
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
            <div class="mt-3">
            <span className="fs-6"><Checkbox/>Create a new account?</span>
            </div>
            <Typography variant='h6' marginTop={3}>Shipping Details</Typography>
            <div class="mt-3">
            <span className="fs-6"><Checkbox/>Ship to a different address?</span>
            </div>
            <div className="class mt-3">
              <textarea name="" id="" className='w-100 form-control' rows="4" placeholder='Order now' ></textarea>
            </div>
         </div>
         <div className="col-md-4">
           <div className="bg-secondary bg-opacity-10 py-3 px-4">
             <Typography variant='h6' marginTop={1}>Your Order</Typography>
             <Stack marginY={1} direction={'row'} sx={{ width:'100%'}} justifyContent={'space-between'}>
                <Typography variant='p'>Product</Typography>
                <Typography variant='p'>Total</Typography>
             </Stack>
             <Stack marginY={1} direction={'row'} sx={{ width:'100%',color:'rgba(0,0,0.2)'}} justifyContent={'space-between'}>
                <Typography variant='p'>Fresh Blackmery</Typography>
                <Typography variant='p' color={'black'}>x 02</Typography>
                <Typography variant='p'>$720.00</Typography>
             </Stack>
             <Stack marginY={1} direction={'row'} sx={{ width:'100%',color:'rgba(0,0,0.2)'}} justifyContent={'space-between'}>
                <Typography variant='p'>Fresh Tomatoes</Typography>
                <Typography variant='p' color={'black'}>x 02</Typography>
                <Typography variant='p'>$720.00</Typography>
             </Stack>
             <Stack marginY={1} direction={'row'} sx={{ width:'100%',color:'rgba(0,0,0.2)'}} justifyContent={'space-between'}>
                <Typography variant='p'>Fresh Brocoli </Typography>
                <Typography variant='p' color={'black'}>x 02</Typography>
                <Typography variant='p'>$720.00</Typography>
             </Stack>
             <Stack marginY={1} direction={'row'} sx={{ width:'100%'}} justifyContent={'space-between'}>
                <Typography variant='p'>SUBTOTAL</Typography>
                <Typography variant='p'>$2160.00</Typography>
             </Stack>
             <Stack marginY={1} direction={'row'} sx={{ width:'100%'}} justifyContent={'space-between'}>
                <Typography variant='p'>SHIPPING</Typography>
                <Typography variant='p'>Flat Rate: $50.00</Typography>
             </Stack>
             <Stack marginY={1} direction={'row'} sx={{ width:'100%'}} justifyContent={'space-between'}>
                <Typography variant='p'>TOTAL</Typography>
                <Typography variant='p'>$2210.00</Typography>
             </Stack>
             <Typography variant='p'><Radio size='small'/> CHECK PAYMENTS</Typography>
             <Grid container>
               <Typography variant='p' padding={2} sx={{ backgroundColor:'white'}}>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</Typography>
             </Grid>
             <Stack direction={'row'} sx={{width:'80%'}} justifyContent={'space-between'}  marginTop={2}>
              <Typography variant='p'><Radio size='small'/> PAYPAL</Typography>
              <img src={Cards} alt="" height={'100%'}/>
             </Stack>
             <Grid container>
               <Typography variant='p' padding={2} sx={{ backgroundColor:'white'}}>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</Typography>
             </Grid>
             <Typography variant='p' marginY={5} sx={{fontSize:'small'}}>I’ve read and accept the terms & conditions*</Typography>
             <Button variant='contained' size='large' sx={{margin:'20px 25px',width:'80%',backgroundColor:'#FD8F5F'}}>PROCEED TO PAYPAL</Button>
           </div>
         </div>
      </div>
    </>
  )
}

export default Checkout
