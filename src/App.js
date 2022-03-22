import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  // we create are products and how are we gonna set them
  const [products, setProducts] = useState();

  // here we bring the products from our commerce library that its in charge of the whole backend
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <div>
      <Navbar></Navbar>
      <Products />
    </div>
  );
};

export default App;
