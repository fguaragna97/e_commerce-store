import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core'
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons'

// import the logo of the commerce 
import logo from "../../assets/download.png"

import useStyles from "./style"

const Navbar = (totalItem) => {
  const classes = useStyles()
  return (
    <div>
      <AppBar position='fixed' className={classes.appbar} color="inherit">
        <Toolbar>
          <Typography variant='h6' className={classes.title} color="inherit">
            <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/> Commerce.js 
          </Typography>
          <div  className={classes.grow}/>
          <div className={classes.button}>
            <IconButton aria-label='Show cart Items ' color='inherit'>
              <Badge badgeContent={totalItem.totalItem[0]} color="secondary">
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
