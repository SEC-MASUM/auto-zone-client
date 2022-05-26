import React from "react";
import bg from "../../Assets/images/banner/slider-1.jpg";
const Hero = ({children}) => {
  return (
    <div>
      <div
        className="hero min-h-[20vh]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-gray-800 bg-opacity-50"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{children}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
