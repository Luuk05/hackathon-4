import React, { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

const App = () => {
  const [cart, setCart] = useState();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
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

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  return (
    <div className="app">
      <Navbar totalItems={cart?.total_items} />
      <Routes>
        <Route
          path="/"
          element={<Home products={products} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
