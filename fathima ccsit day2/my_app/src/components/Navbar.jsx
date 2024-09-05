import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography varient="h6">My app</Typography>
                <Link to='/s'>
                <Button variant="contained" color="secondary">Statebasics</Button>
                </Link>
                &nbsp;
     
                <Link to='/'>
                <Button variant="contained" color="secondary">SignUp</Button>
                </Link>
                &nbsp;
                <Link to='/Login'>
     <Button variant="contained" color="secondary">Login</Button>
     </Link>
     &nbsp;
     <Link to='/C'>
     <Button variant="contained" color="secondary">Counter</Button>
     </Link>
     &nbsp;
     <Link to='/F'>
     <Button variant="contained" color="secondary">Fathi</Button>
     </Link>
     
     &nbsp;

     <Link to='/A'>
     <Button variant="contained" color="secondary">Api</Button>
     </Link>
     &nbsp;
     <Link to='/P'>
     <Button variant="contained" color="secondary">Pokemon</Button>
     </Link>
     
     &nbsp;

     
            </Toolbar>
        </AppBar>
        
    </div>
  )
}

export default Navbar