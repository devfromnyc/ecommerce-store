import React from "react";
import Hero from "../components/Sections/Hero";
import IconList from "../components/Sections/IconList";

const Home = () => {
  return (
    <>
      <Hero
        src="'background-image:url(https://images.unsplash.com/photo-1711397996179-bd4bd28c78e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'"
        alt="Homepage Hero Banner"
        title="Welcome To My Store!"
        subtitle="Here you'll find premier electronics!"
        paragraph="From xbox to playstation to headphones to kitchen supplies, we have it all! Our mission is to provide customers with the best gadgets at the lowest prices!"
        isBackground="true"
      />
      <IconList />
    </>
  );
};

export default Home;
