import React from "react";
import { useParams } from "react-router-dom";
import ProductMedia from "../components/Sections/ProductMedia";
import ProductInfo from "../components/Sections/ProductInfo";
import ProductBottom from "../components/Sections/ProductBottom";

const Product = () => {
  const { variantId } = useParams();
  console.log(variantId);
  return (
    <>
      <section id="product-top">
        <ProductMedia variant={variantId} />
        <ProductInfo variant={variantId} />
      </section>
      <ProductBottom variant={variantId} />
    </>
  );
};

export default Product;
