import React from "react";
import Image from "../Elements/Image";
import Heading from "../Elements/Heading";

const Hero = ({ src, alt, title, subtitle, paragraph, isBackground }) => {
  return (
    <section className="position-relative">
      {isBackground === "true" ? (
        <Image
          src={src}
          alt={alt}
          classes="fullscreen-image position-absolute"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          classes="fullscreen-image position-absolute"
          isBackground="true"
        />
      )}
      <div className="position-relative">
        <Heading tag="h1" text={title} classes="" />
        <Heading
          tag="h2"
          text={subtitle}
          classes="text-3xl font-bold underline"
        />
        <p>{paragraph}</p>
      </div>
    </section>
  );
};

export default Hero;
