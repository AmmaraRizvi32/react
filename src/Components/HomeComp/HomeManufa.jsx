import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import img3 from '../../images/sec3.webp'

const HomeManufa = () => {
  const mainsec3={
    marginTop: "100px"
  }
  const sec3head={
    fontWeight: "bold",
    marginBottom: "15px"
  }
  const sec3para={
    lineHeight: "25px"
  }
  const sec3Img={
    width: "100%",
    height: "450px"
  }
  const sec3Info={
    backgroundColor: "#F2E1D9",
    height: "450px",
    padding: "70px 40px"
  }
  const banBtn={
    background: "#FD8F5F",
    color: "white",
    padding: "12px 25px",
    marginTop: "20px"
  }
  return (
    <>
        <Grid item container style={mainsec3} className='sec3'>
      <Grid item sm={6}>
       <img alt="..." data-aos="fade-up" style={sec3Img} src={img3}/>
      </Grid>
      <Grid item sm={6}>
        <Box style={sec3Info} className='sec3Info' data-aos="fade-up">
       <Typography className='sec3head' style={sec3head} variant="h4">BEST FURNITURE FACTURER</Typography>
       <Typography style={sec3para} variant="p">Suspendisse varius enim in eros elementu tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
       {/* <Typography style={sec3para} variant="p">Suspendisse varius enim in eros elementu tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography> */}
       <Box >
       <Button data-aos="fade-up" style={banBtn}>Discover More</Button>
        {/* style={banBtn} */}
       </Box>
       </Box>
      </Grid>
    </Grid>
    </>
  )
}

export default HomeManufa