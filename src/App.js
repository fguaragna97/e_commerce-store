import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  });

  return (
    <Router>
      <div>
        <Navbar totalItem={[cart.total_items]} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onhandleUpdateCartQty={handleUpdateCartQty}
                onhandleRemoveFromCart={handleRemoveFromCart}
                onhandleEmptyCart={handleEmptyCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
