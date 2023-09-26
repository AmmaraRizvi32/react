import React from 'react'
import { Button, Grid, Typography, Menu ,Box ,Toolbar,Tab,MenuItem} from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
// import Menu from '@mui/material';
// import Box from '@mui/material'
// import { Button } from '@mui/material';
// import Typography from '@mui/material';
// import Toolbar from '@mui/material';
// import Tab from '@mui/material';
// import MenuItem from '@mui/material';
import img1 from '../images/logo.png.webp'
import { Link } from 'react-router-dom';

const Navbar=()=> {

const Mainnav={
    backgroundColor: "#F2E1D9",
    position: "relative",
    
  }
  // const bgImg={
  //   backgroundImage: `url(${img2})`,
  //   height: "700px",
  //   backgroundSize: "cover",
  //   zIndex: "-1"
  // }
  const logo={
    width: "11%",
    position: "absolute",
    left: "0",
    top: "0",
  }
  const nav={
    marginLeft: "500px",
    padding: "17px 0px", 
  }
  const styles={
    menu:{
      color: "black",
     fontWeight: "bold",
     fontSize: "17px",
     "&:hover":{
      color: "#FD8F5F"
     }
    }
  }
 
  const acount={
    color: "black",
    fontWeight: "bold",
    marginTop: "3px"
  }
  const mainAcount={
    display: "flex",
    marginLeft: "70px",
  }
 const pageItems={
  top: "17px"
 }
  const items={
    top: "65px",
    left: "690px"
  }
  const decor={
    textDecoration: "none",
    color: "black"
  }
  
  const logbtn = {
    backgroundColor:'#FD8F5F',
    padding:'10px',
    marginLeft:'110px',
    marginTop:'5px',
    color:'white',
    fontSize:'16px',
   }
   


 
  return (
    <>
     <Grid item container>
     <Grid item sm={12} className='mainNav'>
     <Toolbar style={Mainnav} className='main-nav'>
            <img alt="..." className="Logo" src={img1} style={logo}/>
            <input type="checkbox" id="click"/>
            <label htmlFor="click" className="menu-btn">
            <i className="fas fa-bars"></i>
            </label>
              <Typography style={nav} className='list'>
               <Link style={decor} to='/home'><Tab className='list1' sx={styles.menu} label="Home"/></Link>
                <Link style={decor} to='/contact'> <Tab className='list1' sx={styles.menu}  label="Product"/></Link>
              
               <Link style={decor} to='/about'>
               <Tab className='list1' sx={styles.menu}  label="About"/>
               </Link>
                <Tab className='list1' sx={styles.menu}  label="page"
                aria-haspopup="true"
                
                />
                <Menu
        id="simple-menu"
        style={pageItems}
        
      >
    <Link style={decor} to='/'><MenuItem  sx={styles.menu}>Login</MenuItem></Link>
    <Link style={decor} to='/'><MenuItem  sx={styles.menu}>SignUp</MenuItem></Link>
    <Link style={decor} to='/'>  <MenuItem  sx={styles.menu}>Cart</MenuItem></Link>
    <Link style={decor} to='/'> <MenuItem  sx={styles.menu}>Categories</MenuItem></Link>
    <Link style={decor} to='/'> <MenuItem  sx={styles.menu}>Checkout</MenuItem></Link>
       <Link style={decor} to='/'><MenuItem sx={styles.menu}>Product Details</MenuItem></Link>
      </Menu>
              
                <Menu
        style={items}
        
      >
        <Link  style={decor} to='/'><MenuItem  sx={styles.menu}>Blog</MenuItem></Link>
        <Link style={decor} to='/'><MenuItem  sx={styles.menu}>Blog Details</MenuItem></Link>
        <Link style={decor} to='/'><MenuItem  sx={styles.menu}>Elements</MenuItem></Link>
        </Menu>
        <Link style={decor} to='/'>
                <Tab className='list1' sx={styles.menu}  label="Contact"/>
          </Link>
              </Typography>
              {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
              <Box style={mainAcount} className='acount'>
                <Typography className='aount1'  style={acount}>My Account</Typography>
              
              </Box>
              <Button style={logbtn} className='btn' 
              >Logout</Button>
            </Toolbar>
     </Grid>
    </Grid>
    </>
  )
}

export default Navbar;