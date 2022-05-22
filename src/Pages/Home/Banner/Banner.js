import React, { useEffect, useState } from "react";
import bg1 from "../../../Assets/images/banner/slider-1.jpg";
import bg2 from "../../../Assets/images/banner/slider-2.jpg";
import bg3 from "../../../Assets/images/banner/slider-3.jpg";
import bg4 from "../../../Assets/images/banner/slider-4.jpg";
import Hero from "./Hero";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const bannerImages = [bg1, bg2, bg3, bg4];

  const handleOnNextClick = () => {
    setCount((count + 1) % bannerImages.length);
    console.log(count);
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const productsLength = bannerImages.length;
    setCount((currentIndex + productsLength - 1) % productsLength);
    setCurrentIndex(count);
  };
  return (
    <div>
      <div className="carousel will-change-scroll min-h-[100vh] max-h-fit w-full">
        <div id="slide1" className="carousel-item  relative w-full">
          <Hero bg={bannerImages[currentIndex]} />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button
              onClick={() => handleOnPrevClick()}
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() => handleOnNextClick()}
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
