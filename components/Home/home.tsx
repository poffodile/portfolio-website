import React from "react";
import Hero from "./Hero/hero";
import Projects from "./ProjectSection/projects";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
