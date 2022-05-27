import React from "react";
import Hero from "../../Components/Hero/Hero";
import useReviews from "../../Hooks/useReviews";
import Footer from "../Shared/Footer/Footer";
import Loading from "../Shared/Loading/Loading";
import Navbar from "../Shared/Navbar/Navbar";
import Review from "./Review";

const Reviews = () => {
  const { reviews, isLoading, refetch } = useReviews();
  // const { products, isLoading, refetch } = useReviews();
  console.log(reviews);
  // console.log(products);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Navbar />
      <Hero>Reviews</Hero>
      <div class="container max-w-2xl mx-auto rounded-lg bg-slate-100 my-6 p-5">
        {reviews?.data.map((review) => (
          <Review key={review._id} oneReview={review} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
