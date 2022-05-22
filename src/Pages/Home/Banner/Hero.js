import React from "react";
// import bg from "../../../Assets/images/banner/slider-1.jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Hero = ({ bg }) => {
  return (
    <div
      className="hero min-h-[100vh] max-h-fit"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-gray-800 bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold">WORLD LEADING TECHNOLOGY</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn rounded-full btn-primary p-0">
            <span className="px-4">View Products</span>
            <BsFillArrowRightCircleFill className="h-10 w-10 pr-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
