import { Avatar, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Footerimage from '../images/logo2_footer.png.webp'
import styled from 'styled-components'
import {FacebookSharp, Pinterest,Twitter } from '@mui/icons-material'

const Footer = () => {
  const Footerimg=styled.img`
     
  `
  const FooterPara=styled.p`
    color: #C2C5DB;
    font-size: 16px;
    width:80%;
    margin-top:30px;
    /* Define styles for screens with a max-width of 600px */
  @media (max-width: 600px) {
    width:90%;
    margin-top:10px;
  }
 `
 const Footericons = styled(Avatar)({
    border:'1px solid ',
    backgroundColor:'transparent !important',
    '&:hover': {
      backgroundColor:'#FD8F5F !important', 
      transform: 'rotateY(180deg) !important',
      TransitionDuration:'.4s',
      border:'none',
    },
  })
  const Footerlinks = styled.p`
      font-size:medium;

    &:hover{
      color:#FD8F5F !important;
      text-decoration: underline; 
      text-decoration-skip: ink;
    }
  `
  const Footerbottom=styled.div`
      margin-top:80px;
      text-align:center;
  `
  const Madewith=styled.span`
     color:#FD8F5F !important;
  `
  return (
    <>
     <Container sx={{backgroundColor:'#1D2547',lineHeight: '1.8',color: '#C2C5DB',paddingY:'50px',marginTop:'10px'}}>
          <Grid container marginTop={3} direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
            <Grid item xs={12} sm={6} md={4} lg={4}  >
              <Footerimg src={Footerimage}></Footerimg>
              <FooterPara>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</FooterPara>
              <Stack direction="row" spacing={2} marginTop={6}>
                <Footericons>
                   <FacebookSharp/>
                </Footericons>  
                <Footericons >
                  <Twitter/>
                </Footericons>
                <Footericons >
                  <Pinterest/>
                 </Footericons>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4} md={2} lg={2}>
              <Typography variant='h6' color={'white'} marginBottom={3} >Quick links</Typography>
              <Footerlinks >Image Licensin</Footerlinks>
              <Footerlinks >Style Guide</Footerlinks>
              <Footerlinks >Privacy Policy</Footerlinks>
            </Grid>
            <Grid item xs={12} sm={4} md={2} lg={2} >
              <Typography variant='h6' color={'white'} marginBottom={3}>Shop Category</Typography>
              <Footerlinks >Image Licensin</Footerlinks>
              <Footerlinks >Style Guide</Footerlinks>
              <Footerlinks >Privacy Policy</Footerlinks>
            </Grid>
            <Grid item xs={12} sm={4} md={2} lg={2} >
              <Typography variant='h6' color={'white'} marginBottom={3}>Partners</Typography>
              <Footerlinks >Image Licensin</Footerlinks>
              <Footerlinks >Style Guide</Footerlinks>
              <Footerlinks >Privacy Policy</Footerlinks>
            </Grid>
          </Grid>
          <Footerbottom>
            <Typography variant='p'>Copyright ©2023 All rights reserved | This template is made with <Madewith>React Js</Madewith></Typography>
          </Footerbottom>
     </Container>

    </>
  )
}

export default Footer
