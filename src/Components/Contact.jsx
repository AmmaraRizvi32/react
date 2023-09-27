import React from 'react'
import { Container,Grid, Typography } from '@mui/material'
import Navbar from './Navbar'
import ContBanner from './ContactComp/ContBanner'

const Contact = () => {
    const blog={
        marginTop: "230px"
       }
  return (
    <div>
        <Navbar />
        <ContBanner />
        <Container sx={{marginBottom:10}} style={blog}>
      
      <Typography sx={{fontSize:27, fontWeight:600, paddingBottom:3}}>Get in touch </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Form />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Adress />
        </Grid>
      </Grid>
    </Container>
    </div>
  )
}

export default Contact