import React from 'react'
import { AppBar , IconButton, Toolbar, Typography ,Stack, Button } from '@mui/material'
// import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

export default function Navbar(props){

    return(
        <>
        <AppBar className='Navbar' position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
             {/* <CatchingPokemonIcon/> */}
            </IconButton>
            <Typography variant='h5' component='div' sx={{flexGrow: 1}}>
               Logo
            </Typography>
            <Stack direction='row' spacing={2}>
              <Button color='inherit'>Home</Button>
              <Button color='inherit'>About</Button>
              <Button color='inherit'>Blog</Button>
              <Button color='inherit'>Contact</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </>
    )
}