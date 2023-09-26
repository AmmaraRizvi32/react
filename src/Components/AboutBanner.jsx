import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
const AboutBanner = () => {
    const AboutCntnt={
        textAlign: "center",
        marginTop: "200px"
      }
      const AboutCntnt2={
        textAlign: "center",
        marginTop: "100px"
      }
      const about={
        width: "62%",
        fontSize: "18px",
        margin: "auto",
        lineHeight: "27px",
        paddingTop: "30px"
      }
      const pgIcon={
        fontSize: "11px",
       }
  return (
    <div>
        <Grid item container>
        <Grid className='prdct-ban' item sm={12}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">ABOUT</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} className="fa-regular fa-greater-than"></i>  ABOUT</Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
    </div>
  )
}

export default AboutBanner