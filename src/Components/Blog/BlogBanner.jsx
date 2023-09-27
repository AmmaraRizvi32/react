import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
const BlogBanner = () => {
    const pgIcon={
        fontSize: "11px",
       }
  return (
    <>
 <Grid item container>
        <Grid className='prdct-ban' item sm={12}>
        <Box className='bannerImg'>
            <Box className='ban-text'>
            <Typography sx={{color: "white", fontWeight: "900"}} variant="h3">BLOG</Typography>
            <Typography sx={{color: "white", mt: 3}} variant="p">Home  <i style={pgIcon} className="fa-regular fa-greater-than"></i>  BLOG </Typography>
            </Box>
          </Box>
        </Grid>
    </Grid>
    </>
  )
}

export default BlogBanner;