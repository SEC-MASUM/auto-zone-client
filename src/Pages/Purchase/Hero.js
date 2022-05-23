import React from "react";
import bg from "../../Assets/images/banner/slider-1.jpg";
const Hero = () => {
  return (
    <div>
      <div
        class="hero min-h-[20vh]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div class="hero-overlay bg-gray-800 bg-opacity-50"></div>
        <div class="hero-content text-center text-white">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Purchase</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
