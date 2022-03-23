import React from 'react'
import {Container , Typography, Button, Grid} from "@material-ui/core"

import useStyles from "./styles"
import CartItem from './CartItem/CartItem'


function Cart(cart) {
  const classes = useStyles()
  

  

  const EmptyCart = () => (
    <Typography variant='subtitle1'>You have no items in your shopping cart, start adding some!</Typography>
  )

  const FilledCart = () => (
     <>
     <Grid container spacing={3}>
        {cart.cart[0].line_items.map((item)=>(
            <Grid item xs={12} sm={4} key ={item.id}>
              <CartItem item={item}></CartItem>
              </Grid>
              ))}
              </Grid>
              <div className={classes.cardDetails}>
                  <Typography variant='h4'>
                    Subtotal: {cart.cart[0].subtotal.formatted_with_symbol}
                  </Typography>
                  <div>
                    <Button className={classes.emptyButton} size="large" type='button' variant='contained' color='secondary'>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type='button' variant='contained' color='primary'>Checkout</Button>
                  </div>
              </div>
        
     
     </>
  )
          if(!cart.cart[0].total_items) return "Loading....."

  return (
    <Container>
      < div className={classes.toolbar}/>
      <Typography className={classes.tittle} variant="h3">Your Shopping Cart</Typography>
      {!cart.cart[0].total_items ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart