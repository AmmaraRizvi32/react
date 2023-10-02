import {Grid, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import popular7 from '../images/popular7.png.webp'
import popular8 from '../images/popular8.png.webp'
import popular9 from '../images/popular9.png.webp'
const Homesect6 = () => {
 const Sect6topdiv=styled.div`
    width:50%;
    margin:90px auto;
    text-align:center;
    color:rgba(0,0,0,0.6);
    @media (max-width: 790px) {
     width:90%;
     margin:30px auto; 
 `
 const Sect6img=styled.img`
 
 `
 const Sect6para=styled.p`
    width:80%;
    margin:auto;
    text-align:center;
   &:hover{
    text-decoration:underline;
   }
 `
 const prodMain={
  display: 'flex',
  flexDirection: 'Column'
 }
  return (
    <>
      <Sect6topdiv>
          <Typography variant="h4" sx={{fontWeight:'bolder',color:'black'}} >TOP PICK</Typography>
          <Typography variant='p'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
      </Sect6topdiv>
      <div className='col-md-11 mx-auto'>
        <Grid container direction="row" justifyContent="space-evenly">
           <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} >
             <Sect6img src={popular7}/>
             <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>
           </Grid>
           <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} >
             <Sect6img src={popular8}/>
             <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

           </Grid>
           <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} >
             <Sect6img src={popular9}/>
             <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

           </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Homesect6
