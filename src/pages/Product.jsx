import React from "react";
import ProductMedia from "../components/Sections/ProductMedia";
import ProductInfo from "../components/Sections/ProductInfo";
import ProductBottom from "../components/Sections/ProductBottom";

const Product = () => {
  return (
    <>
      <section id="product-top">
        <ProductMedia />
        <ProductInfo />
      </section>
      <ProductBottom />
    </>
  );
};

export default Product;
