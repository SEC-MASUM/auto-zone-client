import React from "react";
import { MdReviews } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FcShipped } from "react-icons/fc";

const BusinessSummary = () => {
  return (
    <div className="bg-gray-800 py-12 my-12">
      <div className="container mx-auto">
        <h1 className="w-7/12 mx-auto text-4xl text-white text-center font-bold pb-12">
          We work directly with you to identify the right parts for your needs!
        </h1>

        <div className="w-full justify-items-center  grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="w-full min-w-40 h-40 min-h-fit max-w-xs md:max-w-md shadow rounded-2xl bg-white text-center p-6">
            <div className="stat-figure text-primary">
              <MdReviews className="inline-block w-10 h-10"></MdReviews>
            </div>
            <div className="stat-title">Total Reviews</div>
            <div className="stat-value text-primary">2.8K+</div>
          </div>

          <div className="w-full min-w-40 h-40 min-h-fit max-w-xs md:max-w-md shadow rounded-2xl bg-white text-center p-6">
            <div className="stat-figure text-secondary">
              <BsTools className="inline-block w-10 h-10"></BsTools>
            </div>
            <div className="stat-title">Total Parts</div>
            <div className="stat-value text-secondary">500+</div>
          </div>
          <div className="w-full min-w-40 h-40 min-h-fit max-w-xs md:max-w-md shadow rounded-2xl bg-white text-center p-6">
            <div className="stat-figure text-secondary">
              <FcShipped className="inline-block w-10 h-10"></FcShipped>
            </div>
            <div className="stat-title">Order Shipped</div>
            <div className="stat-value text-green-600">3600+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
