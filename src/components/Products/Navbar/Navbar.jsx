import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core'
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons'

import logo from "../../assets"

const Navbar = () => {
  return (
    <div>
      <AppBar position='fixed' className={classes.appbar} color="inherit">
        <Toolbar>
          <Typography variant='h6' className={classes.title} color="inherit">
            <img src={} alt="Commerce.js" height="25" className={classes.image}/> Commerce.js
          </Typography>
          <div  className={classes.grow}/>
          <div className={classes.button}>
            <IconButton aria-label='Show cart Items ' color='inherit'>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
                </Badge>

            </IconButton>
            </div>
        </Toolbar>
        
        </AppBar>
    </div>
  )
}

export default Navbar
