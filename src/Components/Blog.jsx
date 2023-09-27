import React from 'react'
import BlogBanner from './Blog/BlogBanner'
import BlogPosts from './Blog/BlogPosts'
import {Container,Box,Grid,} from "@mui/material";

const Blog = () => {
    const blog={
        marginTop: "230px"
       }
  return (
    <>
     <BlogBanner />
     <Container>
    <Box >
      <Grid container spacing={2} style={blog}> 
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box><BlogPosts /></Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          {/* <Box><Sidepanel /></Box> */}
        </Grid>
      </Grid>
    </Box> 
    </Container>
    </>
  )
}

export default Blog