import React, { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import ProductsList from "./components/ProductsList";

const Home = () => {
  const [Cart, setCart] = useState();

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  return (
    <div>
      <ProductsList />
    </div>
  );
};

export default Home;
