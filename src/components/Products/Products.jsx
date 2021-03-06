import react from "react"
import { Grid } from "@material-ui/core"
import { Description } from "@material-ui/icons"

import Product from "./Product/Product"
import useStyles from "./styles"

// here we take how all the products gonna look we use the grid system of material ui

const Products = ({products,onAddToCart}) => {
  const classes = useStyles()


  return (
<main className={classes.content}>
  <div className={classes.toolbar}></div>
   <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
        ))}
   </Grid>
 </main>
  )
 
}


export default Products
