import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Technology from "./Technology/Technology";
import WorkShowcase from "./WorkShowcase/WorkShowcase";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div className="container  mx-auto">
        <AboutMe />
        <Education />
        <Technology />
        <WorkShowcase />
      </div>
    </>
  );
};

export default Portfolio;
