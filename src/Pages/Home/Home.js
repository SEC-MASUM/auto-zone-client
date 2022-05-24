import React from "react";
import Purchase from "../Purchase/Purchase";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <BusinessSummary />
      <Products />

      <Footer />
    </div>
  );
};

export default Home;
