import react from "react"
import { Grid } from "@material-ui/core"
import { Description } from "@material-ui/icons"

import Product from "./Product/Product"


const products = [
  {
    id:1,
    name:"Shoes",
    description:"Running Shoes",
    price:"$5",
    image:""
  },
  {
    id:2,
    name:"Macbook",
    description:"Apple macbook",
    price:"$5",
    image:""
  }
]

// here we take how all the products gonna look we use the grid system of material ui

const Products = () => {
  return (
<main>
   <Grid container justify="center" spacing={4}>
        {products.map((product)=>(
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
          </Grid>
        ))}
   </Grid>
 </main>
  )
 
}


export default Products
