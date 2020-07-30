import React from 'react';
import { AppBar, Toolbar,Button } from '@material-ui/core'

const Navbar = () => {
  return ( 
  <AppBar position="static">
    <Toolbar>
      <Button color="inherit">Sign in</Button>
      <Button color="inherit">Sign up</Button>
    </Toolbar>
  </AppBar>
);}
 
export default Navbar;

