import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import img2 from '..//../images/bg.webp'

const HomeBanner = () => {
  const mainBann={
    display:'flex',
    alignItems: 'center',
    height: '700px',
  }
    const bgImg={
        backgroundImage: `url(${img2})`,
        height: "700px",
        backgroundSize: "cover",
        zIndex: "-1",
        marginTop: "-100px",
      }
      const banCntnt={
        backgroundColor: "white",
        width: "36%",
        marginTop: "100px",
        padding: "50px",
        marginLeft: "100px"
      }
      const banBtn={
        background: "#FD8F5F",
        color: "white",
        padding: "12px 25px",
        marginTop: "20px"
      }
      const banPara={
        fontSize: "18px",
        marginTop: "7px"
      }
      const banHead={
        fontWeight: "bold",
        marginTop: "7px"
      }
  return (
    <>
      <div style={bgImg} className='banImg'>
        <Grid style={mainBann}> 
          <Box style={banCntnt} className='banner' data-aos="fade-up">
            <Typography className='banHead' style={banHead}  sx={{color: "black"}} variant="h6">70% sale off</Typography>
            <Typography className='banInfo' style={banHead}  sx={{color: "black"}} variant="h2">Furniture At<br/> Cost</Typography>
            <Typography className='banPara' style={banPara} >Suspendisse varius enim in eros  elementu tristique. Duis cursus, mi quis <br></br> viverra ornare, eros dolor interdum nulla.</Typography>
            <Button style={banBtn}>Discover More</Button>
          </Box>
        </Grid>
    </div>
    </>
  )
}

export default HomeBanner