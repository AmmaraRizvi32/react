import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const ContBanner = () => {
    const pgIcon={
        fontSize: "11px",
       }
  return (
    <div>
        <Grid item container>
        <Grid className='prdct-ban' item sm={12} marginBottom={8}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">CONTACT</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} className="fa-regular fa-greater-than"></i>  CONTACT</Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
    </div>
  )
}

export default ContBanner