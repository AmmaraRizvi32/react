import React from 'react'
import Homelast from './Homelast'
import {Checkbox, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import styled from 'styled-components'
import popular7 from '../images/popular7.png.webp'
import popular8 from '../images/popular8.png.webp'
import popular9 from '../images/popular9.png.webp'
import popular5 from '../images/popular5.png.webp'
import popular6 from '../images/popular6.png.webp'
import popular4 from '../images/popular4.png.webp'
import popular1 from '../images/popular1.png.webp'
import popular2 from '../images/popular2.png.webp'
import popular3 from '../images/popular3.png.webp'


const Category = () => {
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
     <Typography variant="h4" marginX={4} marginTop={12} sx={{fontWeight:'bold'}}>SHOP WITH US</Typography>
     <Typography variant="p" marginX={4}  sx={{color:'rgba(0,0,0,0.5)',fontSize:'large'}}>Browse from 230 latest items</Typography>
      <Grid container sm={12} md={12} lg={12} direction="row" justifyContent={'space-evenly'}>
         <Grid item sm={12} md={2} marginTop={4} >
         <FormControl fullWidth size="small" sx={{margin:'10px 0'}}>
            <InputLabel id="demo-simple-select-label" marginY={6}>Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{margin:'10px 0'}}>
            <InputLabel id="demo-simple-select-label" marginY={6}>Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Size"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{margin:'10px 0'}}>
            <InputLabel id="demo-simple-select-label" marginY={6}>Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Color"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth size="small" sx={{margin:'10px 0'}}>
            <InputLabel id="demo-simple-select-label" marginY={6}>Price Range</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Price Range"
              
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" marginTop={5} >Latest Products</Typography>
          <div className='mt-2 text-secondary'><Checkbox  /><span className=''>Any</span></div>
          <div className='text-secondary'><Checkbox /><span className=''>Today</span></div>
          <div className='text-secondary'><Checkbox /><span className=''>Last 2 days</span></div>
          <div className='text-secondary'><Checkbox /><span className=''>Last 5 days</span></div>
          <div className='text-secondary'><Checkbox /><span className=''>Last 7 days</span></div>
          <div className='text-secondary'><Checkbox /><span className=''>Last 10 days</span></div>
         </Grid>
        <Grid item sm={12} md={9}>
        <div className='col-md-12 mx-auto'>
            <Stack  direction="row" justifyContent="space-between">
              <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} sx={{margin:'5px'}}>
                <Sect6img src={popular1}/>
                <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
                <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>
              </Grid>
              <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} sx={{margin:'5px'}}>
                <Sect6img src={popular5}/>
                <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
                <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

              </Grid>
              <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} sx={{margin:'5px'}}>
                <Sect6img src={popular6}/>
                <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
                <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

              </Grid>
        </Stack>
         </div>
         <div className='col-md-12 mx-auto'>
            <Stack  direction="row" justifyContent="space-between">
              <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} sx={{margin:'5px'}}>
                <Sect6img src={popular7}/>
                <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
                <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>
              </Grid>
              <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} sx={{margin:'5px'}}>
                <Sect6img src={popular8}/>
                <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
                <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

              </Grid>
              <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} sx={{margin:'5px'}}>
                <Sect6img src={popular9}/>
                <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
                <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

              </Grid>
        </Stack>
         </div>
         <div className='col-md-12 mx-auto'>
            <Stack  direction="row" justifyContent="space-between">
              <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} sx={{margin:'5px'}}>
                <Sect6img src={popular2}/>
                <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
                <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>
              </Grid>
              <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} sx={{margin:'5px'}}>
                <Sect6img src={popular4}/>
                <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
                <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

              </Grid>
              <Grid style={prodMain} item xs={12} md={6} lg={4} xl={4} sx={{margin:'5px'}}>
                <Sect6img src={popular3}/>
                <Sect6para>Bly Microfiber / Microsuede 56" Armless Loveseat</Sect6para>
                <Typography variant='h5' marginY={3} sx={{textAlign:'center',color:'#670000',fontWeight:'bolder'}}>$367</Typography>

              </Grid>
        </Stack>
         </div>
        </Grid>
      </Grid>
      <Homelast/>
    </>
  )
}

export default Category
