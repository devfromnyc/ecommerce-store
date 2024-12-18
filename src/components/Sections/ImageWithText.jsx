import React from "react";

const ImageWithText = ({ src, alt }) => {
  return (
    <section>
      <img src={src} alt={alt} class="" />
    </section>
  );
};

export default ImageWithText;
