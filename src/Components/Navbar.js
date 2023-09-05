import React from 'react'
import { AppBar , IconButton, Toolbar } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

export default function Navbar(props){
    return(
        <>
        <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
             <
            </IconButton>
          </Toolbar>
        </AppBar>
      </>
    )
}