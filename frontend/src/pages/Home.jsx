import React, { useState, useEffect } from "react";
import commerce from ".././lib/commerce";
import ProductsList from ".././components/ProductsList";

const Home = ({ products, onAddToCart }) => {
  return (
    <div>
      <ProductsList products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Home;
