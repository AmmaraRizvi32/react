import React from 'react'
import {Container,Box,Grid,} from "@mui/material";
import BlogBanner from './Blog/BlogBanner'
import Sidepanel from './Blog/Sidepanel'
import BlogDleft from './BlogDetalComp/BlogDleft'
const BlogDeta = () => {
    const blog={
        marginTop: "230px"
       }
  return (
    <>
        <BlogBanner />
        <Container >
      <Grid container spacing={2} style={blog}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box><BlogDleft /></Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box><Sidepanel /></Box>
        </Grid>
      </Grid>
  </Container>
    </>
  )
}

export default BlogDeta