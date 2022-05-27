import React, { useState } from "react";
import useReviews from "../../../Hooks/useReviews";
import Loading from "../../Shared/Loading/Loading";
import Review from "./Review";
import bg from "../../../Assets/images/banner/slider-4.jpg";

const Reviews = () => {
  const { reviews, isLoading, refetch } = useReviews();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  // const { products, isLoading, refetch } = useReviews();
  // console.log(reviews);
  // console.log(products);
  if (isLoading) {
    return <Loading />;
  }

  const handleOnNextClick = () => {
    setCount((count + 1) % reviews.data.length);
    console.log(count);
    setCurrentIndex(count);
  };

  const handleOnPrevClick = () => {
    const reviewsLength = reviews.data.length;
    setCount((currentIndex + reviewsLength - 1) % reviewsLength);
    setCurrentIndex(count);
  };

  return (
    <div className="my-12">
      <div
        className="hero bg-slate-800 carousel will-change-scroll h-[60vh] max-h-fit w-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-gray-800 bg-opacity-70"></div>
        <div id="slide1" className="carousel-item  relative w-full">
          <Review oneReview={reviews.data[currentIndex]} />
          <button>See All</button>

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

export default Reviews;
