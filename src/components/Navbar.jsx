import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

const Icon = styled("img")(({
    width: "60px",
    height: "60px",
    objectFit: "contain",
    objectPosition: "center"
}));

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:'##212121' }}>
        <Toolbar sx={{height:"80px", gap:"30px"}}>
            <Icon src='icons/icon.png' alt='PokePedia' sx={{display: {xs:'none', sm:'block'}}}></Icon>
            <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: 'block', fontFamily: 'Nunito, sans-serif' }}
            >
                Pokedex
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
