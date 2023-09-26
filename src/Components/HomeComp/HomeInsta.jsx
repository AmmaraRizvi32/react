import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import img4 from '../../images/insta.webp'
import img5 from '../../images/insta1.webp'
import img6 from '../../images/insta2.webp'
import Button from '@mui/material/Button'
const HomeInsta = () => {
    const instaImg={
        width: "100%"
      }
      const instaSec={
        marginTop: "80px"
      }
      const instaInfo={
        padding: "20px 50px"
      }
      const instaHead={
        fontWeight: "bold",
        marginTop: "10px",
        fontSize:"36px",
        paddingTop: "20px",
        paddingBottom: "20px"
      }
      const banBtn={
        border: "1px solid #FD8F5F",
        color: "#FD8F5F",
        padding: "12px 25px",
        marginTop: "30px"
      }
  return (
    <div>
        <Grid item container style={instaSec}>
      <Grid item sm={4}>
       <Box data-aos="fade-up" style={instaInfo}>
        <img alt="..." className='instaImg' src={img4}/>
        <Typography className='instaSec' style={instaHead} variant="h3">GET INSPIRED WITH <br></br> INSTAGARM</Typography>
        <Typography sx={{mt: 1}}>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</Typography>
        <Button data-aos="fade-up" style={banBtn}>Discover More</Button>

       </Box>
      </Grid>
      <Grid item sm={4}>
       <img alt="..." data-aos="fade-up" style={instaImg} src={img5}/>
      </Grid>
      <Grid item sm={4}>
       <img alt="..." data-aos="fade-up" style={instaImg} src={img6}/>
      </Grid>
    </Grid>
    </div>
  )
}

export default HomeInsta