import React from "react";
import Purchase from "../Purchase/Purchase";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import NewsLetter from "./NewsLetter/NewsLetter";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <BusinessSummary />
      <Products />
      <Reviews />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
