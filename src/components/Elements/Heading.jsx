import React from "react";

const Heading = ({ tag, text, classes }) => {
  const CustomTag = `${tag}`;
  return <CustomTag className={classes}>{text}</CustomTag>;
};

export default Heading;
