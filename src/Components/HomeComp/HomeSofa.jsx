import React from 'react'
import {Grid, Typography } from '@mui/material'
import styled from 'styled-components'
import popular4 from '../../images/popular4.png.webp'
import popular5 from '../../images/popular5.png.webp'
import popular6 from '../../images/popular6.png.webp'

const HomeSofa = () => {
    const Sect6topdiv=styled.div`
    width:40%;
    margin:90px auto;
    text-align:center;
    color:rgba(0,0,0,0.6);
    @media (max-width: 790px) {
     width:90%;
     margin:30px auto; 
 `
    const prodMain={
        display: 'flex',
        flexDirection: 'Column',
        padding : '10px'
       }
       const sofaCont={
        padding: ' 20px 20px 0',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: ' center'
       }
       const homeSofaMain={
        marginTop:' 50px'
       }
    
       const Sect6para=styled.p`
       width:60%;
       margin:auto;
       font-size: 18px;
       text-align:center;
      &:hover{
       text-decoration:underline;
      }
    `
    const Sect6pra={
        fontSize: '18px'
    }
    const Sect6Head={
        fontSize: '37px',
        paddingBottom: '10px'
    }
  return (
    <>
     <Sect6topdiv>
          <Typography style={Sect6Head} variant="h4" sx={{fontWeight:'bolder',color:'black'}} >PRODUCTS YOU MAY LIKE
</Typography>
          <Typography style={Sect6pra} variant='p'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.

</Typography>
      </Sect6topdiv>
         <div style={homeSofaMain} className='container mx-auto'>
        <Grid container direction="row" justifyContent="space-evenly">
           <Grid style={prodMain} item xs={12} md={4} lg={4} xl={4} >
             <img src={popular4} alt=''/>
             <p style={sofaCont}>Bly Microfiber / Microsuede 56" Armless Loveseat</p>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>
           </Grid>
           <Grid style={prodMain} item xs={12} md={4} lg={4} xl={4} >
             <img src={popular5}  alt=''/>
             <p style={sofaCont}>Bly Microfiber / Microsuede 56" Armless Loveseat</p>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

           </Grid>
           <Grid style={prodMain} item xs={12} md={4} lg={4} xl={4} >
             <img src={popular6}  alt=''/>
             <p style={sofaCont}>Bly Microfiber / Microsuede 56" Armless Loveseat</p>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

           </Grid>
        </Grid>
      </div>
    </>
  )
}

export default HomeSofa