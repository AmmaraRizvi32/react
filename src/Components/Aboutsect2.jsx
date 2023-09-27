import { Container, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import about1 from '../images/about1.png.webp'
import about2 from '../images/about2.png.webp'

const Aboutsect2 = () => {
 const Storymain=styled.div`
    width:70%;
    margin:80px auto;
    line-height:25px;
    text-align:center;
    font-size:20px;
    line-height:30px;
    // font-weight:bold;
 `
 const Pic = styled.img`
    width:100%;
 `
  return (
    <>
      <Storymain>
        <Typography variant='h4' sx={{fontWeight:'bold'}} marginY={5}>OUR STORY</Typography>
        <Typography variant='p' sx={{color:'rgba(0,0,0,0.5)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
      </Storymain>
      <Container marginY={5}>
         <Pic src={about1}></Pic>
      </Container>
      <Storymain>
        <Typography variant='h4' sx={{fontWeight:'bold'}} marginY={5}>JOURNEY START FROM</Typography>
        <Typography variant='p' sx={{color:'rgba(0,0,0,0.5)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
      </Storymain>
      <Container marginY={5}>
         <Pic src={about2}></Pic>
      </Container>
      <Storymain>
        <Typography variant='h4' sx={{fontWeight:'bold'}} marginY={5}>2020</Typography>
        <Typography variant='p' sx={{color:'rgba(0,0,0,0.5)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
      </Storymain>
    </>
  )
}

export default Aboutsect2
