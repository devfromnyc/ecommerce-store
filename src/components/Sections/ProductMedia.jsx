import React from "react";

const ProductMedia = ({ variant }) => {
  console.log("This is the variant");
  console.log(variant);
  return <div id="product-media">ProductMedia: {variant}</div>;
};

export default ProductMedia;
