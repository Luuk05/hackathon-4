import React, { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import ProductsList from "./components/ProductsList";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Route path="/" element={<Home />} />
    </div>
  );
};

export default App;
