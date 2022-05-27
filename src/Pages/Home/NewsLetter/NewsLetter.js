import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-primary">
      <div class="container mx-auto">
        <div class="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center gap-2">
          <div className="flex-1 flex justify-items-stretch items-center space-x-3 text-white">
            <h3 class="text-3xl font-semibold  ">Newsletter</h3>
            <p class="">
              Enter your email and well send you a coupon with 10 off your next
              order
            </p>
          </div>
          {/* ------------- */}

          <div className="flex-1 flex justify-end items-center space-x-1 py-3">
            <input
              name="email"
              type="email"
              placeholder="Your email address"
              className="input w-full max-w-md"
            />
            <button class=" btn">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
