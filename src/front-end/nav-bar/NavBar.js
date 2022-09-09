import React from 'react';
import "./NavBar.css"
import { AppBar ,Toolbar, Typography } from '@mui/material';

const NavBar = () => {
    return (
       // <ul className='menu'>
         //  <li className='li-menu'>Inicio</li>
           //<li className='li-menu'>Reservaciones</li>
           //<li className='li-menu'>Galeria de Fotos</li>
           //<li className='li-menu'>Contactenos</li>
        //</ul> 
        <div>
          <AppBar position="fixed" color="primary">
              <Toolbar>
                <Typography variant="h6">
                    Hola
                </Typography>
              </Toolbar>
          </AppBar>
        </div>
    );
}

export default NavBar;
