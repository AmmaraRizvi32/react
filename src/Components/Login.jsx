import React from 'react'
import styled from 'styled-components'
import {Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material'
const Login = () => {
 const Logindiv =styled.div`
    
 `
 const Formdiv=styled.div`
    width:60%;
    margin:auto;
    padding:3rem 20px;
    background-color:white;
    text-align:center;
    font-sixe:bold;

 `
 const Loginform=styled.div`
 
 `
 const Color ={
      color:'#FD8F5F',
 }
  return (
    <>
       <Logindiv sx={{}}>
         <Formdiv className='shadow'>
         <Typography variant='h4' marginBottom={2}>Login</Typography>
         <Typography variant='p' >Enter Login details to get access</Typography>
         <Loginform>
           <TextField
            id="filled-textarea"
            label="Username or Email Address"
            placeholder="Enter username or email"
            multiline
            variant="outlined"
            sx={{width:'83%',margin:'40px auto'}}
           
          />
            <TextField
            id="filled-textarea"
            label="Password"
            placeholder="Enter your Password"
            multiline
            variant="outlined"
            sx={{width:'83%',margin:' auto'}}
           
          />
           <div className="col-md-10 mx-auto  d-flex justify-content-between mt-2">
             <div className="left d-flex align-items-center">
             <Checkbox /><Typography variant='p' sx={{fontWeight:'bolder'}}> Keep Me Logged In</Typography>
             </div>
             <div className="right ">
                 <Typography variant='p' sx={{color:'#FD8F5F'}}>Forgot Password?</Typography>
             </div>
           </div>
           <div className="col-md-10 mx-auto d-flex justify-content-between align-items-center mt-5 ">
            <div className="left">
              <Typography varian='p'>Don’t have an account? <span style={Color}>Sign Up</span> here</Typography>
            </div>
            <div className="right">
              <Button variant='contained' size='large' sx={{backgroundColor:'#FD8F5F'}}>Login</Button>
            </div>
           </div>
         </Loginform>
        
     
         </Formdiv>
       </Logindiv>
    </>
  )
}

export default Login
