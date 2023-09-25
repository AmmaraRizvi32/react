import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import services1 from '../images/services1.svg'
import services2 from '../images/services2.svg'
import services3 from '../images/services3.svg'
import services4 from '../images/services4.svg'

const Homelast = () => {
 const Maindiv=styled.div`
   background-color: #F2E1D9;
 `
 const Servicesimg=styled.img``;
  return (
    <>
      <Maindiv>
         <Container>
            <Grid container marginTop={5} direction="row"
              justifyContent="space-between"
              alignItems="baseline" paddingY={10}
              >
                <Grid item xs={12} md={4} lg={3} paddingTop={2} sx={{wordSpacing:'1px'}}>
                   <Servicesimg src={services1}/>
                   <Typography variant='h6' paddingBottom={1} paddingTop={3}>Fast & Free Delivery</Typography>
                   <Typography variant='p'>Free delivery on all orders</Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3} paddingTop={2} sx={{wordSpacing:'1px'}}>
                    <Servicesimg src={services2}/>
                    <Typography variant='h6' paddingBottom={1} paddingTop={3}>Fast & Free Delivery</Typography>
                    <Typography variant='p'>Free delivery on all orders</Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3} paddingTop={2} sx={{wordSpacing:'1px'}}>
                     <Servicesimg src={services3}/>
                     <Typography variant='h6' paddingBottom={1} paddingTop={3}>Fast & Free Delivery</Typography>
                     <Typography variant='p'>Free delivery on all orders</Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={3} paddingTop={2} sx={{wordSpacing:'1px'}}>
                     <Servicesimg src={services4}/>
                     <Typography variant='h6' paddingBottom={1} paddingTop={3}>Fast & Free Delivery</Typography>
                     <Typography variant='p'>Free delivery on all orders</Typography>
                </Grid>

            </Grid>

         </Container>
      </Maindiv>
    </>
  )
}

export default Homelast
