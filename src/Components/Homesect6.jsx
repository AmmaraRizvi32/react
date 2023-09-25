import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Homesect6 = () => {
 const Sect6topdiv=styled.div`
    width:50%;
    margin:auto;
    text-align:center;
    color:rgba(0,0,0,0.6)
 `
  return (
    <>
      <Sect6topdiv >
          <Typography variant="h4" sx={{fontWeight:'bold',color:'black'}} >TOP PICK</Typography>
          <Typography variant='p'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
      </Sect6topdiv>
      <Container>
        <Grid container direction="row" justifyContent="space-between">
           <Grid item xs={12} md={6} lg={4} xl={4} sx={{border:'1px solid blue',height:'100px'}} >

           </Grid>
           <Grid item xs={12} md={6} lg={4} xl={4} sx={{border:'1px solid blue',height:'100px'}} >

           </Grid>
           <Grid item xs={12} md={6} lg={4} xl={4} sx={{border:'1px solid blue',height:'100px'}} >

           </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Homesect6
