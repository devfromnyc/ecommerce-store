import React from "react";

const Image = ({ src, alt, classes, isBackground, backgroundImage }) => {
  return (
    <>
      {isBackground === "true" ? (
        <img src={src} alt={alt} className={classes} />
      ) : (
        <div className={classes} style={{ src }}></div>
      )}
    </>
  );
};

export default Image;
