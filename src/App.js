import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  // we create are products and how are we gonna set them
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // here we bring the products from our commerce library that its in charge of the whole backend
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // handle the add to cart function to the api
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  });

  console.log(cart);

  return (
    <div>
      <Navbar totalItem={[cart.total_items]} />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
