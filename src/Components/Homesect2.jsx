import React from 'react'
import {Box, Container, Grid, Tab, Typography } from '@mui/material'
import styled from 'styled-components'
import popular1 from '../images/popular1.png.webp'
import popular2 from '../images/popular2.png.webp'
import popular3 from '../images/popular3.png.webp'
import { TabContext, TabList, TabPanel } from '@mui/lab'
const Homesect2 = () => {
 const Sect2topdiv=styled.div`
 width:50%;
 margin:80px auto;
 text-align:center;
 color:rgba(0,0,0,0.6)
 @media (max-width: 790px) {
  width:90%;
  margin:30px auto; 
`
const Sect2img=styled.img`

`
const Sect2para=styled.p`
 width:80%;
 margin:auto;
 text-align:center;
&:hover{
 text-decoration:underline;
}
`
const [value, setValue] = React.useState('1');

const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    <>
       <Sect2topdiv>
          <Typography variant="h4" sx={{fontWeight:'bolder',color:'black'}} >POPULAR PRODUCTS</Typography>
          <Typography variant='p'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
      </Sect2topdiv>
      <Container sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} centered >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered >
            <Tab label="Sofa" value="1" /> 
            <Tab label="Table" value="2" />
            <Tab label="Chair" value="3" />
            <Tab label="Bed" value="4" />
            <Tab label="Lightning" value="5" />
            <Tab label="Decore" value="6" />
          </TabList>
        </Box>
        
        <TabPanel value="1">
        <Grid container direction="row" justifyContent="space-evenly">
           <Grid item xs={12} md={6} lg={4} xl={4} >
             <Sect2img src={popular1}/>
             <Sect2para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect2para>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>
           </Grid>
           <Grid item xs={12} md={6} lg={4} xl={4} >
             <Sect2img src={popular2}/>
             <Sect2para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect2para>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

           </Grid>
           <Grid item xs={12} md={6} lg={4} xl={4} >
             <Sect2img src={popular3}/>
             <Sect2para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect2para>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

           </Grid>
        </Grid>
     </TabPanel>
        {/* <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
      </Container>
      {/* <div className='col-md-11 mx-auto'>
        <Grid container direction="row" justifyContent="space-evenly">
           <Grid item xs={12} md={6} lg={4} xl={4} >
             <Sect2img src={popular7}/>
             <Sect2para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect2para>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>
           </Grid>
           <Grid item xs={12} md={6} lg={4} xl={4} >
             <Sect2img src={popular8}/>
             <Sect2para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect2para>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

           </Grid>
           <Grid item xs={12} md={6} lg={4} xl={4} >
             <Sect2img src={popular9}/>
             <Sect2para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect2para>
             <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

           </Grid>
        </Grid>
      </div> */}
    </>
  )
}

export default Homesect2
