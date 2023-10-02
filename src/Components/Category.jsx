import React from 'react'
import Homelast from './Homelast'
import {FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import styled from 'styled-components'
import popular7 from '../images/popular7.png.webp'
import popular8 from '../images/popular8.png.webp'
import popular9 from '../images/popular9.png.webp'
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
     <Typography variant="h4" marginX={4} marginTop={9} sx={{fontWeight:'bold'}}>SHOP WITH US</Typography>
     <Typography variant="p" marginX={4} marginTop={2} sx={{color:'rgba(0,0,0,0.5)',fontSize:'large'}}>Browse from 230 latest items</Typography>
      <Grid container sm={12} md={12} lg={12} direction="row" justifyContent={'space-evenly'}>
         <Grid item sm={12} md={2} >
         <FormControl fullWidth size="small" marginTop={2}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
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
          <FormControl fullWidth size="small" marginY={2}>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
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
          <FormControl fullWidth size="small" marginY={2}>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
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
          <FormControl fullWidth size="small" marginY={2}>
            <InputLabel id="demo-simple-select-label">Price Range</InputLabel>
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
         </Grid>
        <Grid item sm={12} md={9}>
        <div className='col-md-12 mx-auto'>
            <Stack  direction="row" justifyContent="space-between">
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
        </Stack>
         </div>
        </Grid>
      </Grid>
      <Homelast/>
    </>
  )
}

export default Category
