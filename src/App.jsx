import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Sections/Header";
import Footer from "./components/Sections/Footer";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/:collection" element={<Collections />} />
          <Route path="/product/:variantId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
