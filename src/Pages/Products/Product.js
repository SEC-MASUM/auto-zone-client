import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex justify-center">
      <div className="card card-compact min-w-80 md:max-w-md lg:max-w-xl bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-64 rounded-2xl bg-neutral"
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-bold text-secondary text-left uppercase">
            Shoes!
          </h2>
          <span className="text-left text-sm text-gray-500">
            If a dog chews shoes
          </span>

          <div className="flex text-sm items-center">
            <span className="text-primary text-lg font-bold">Price $220</span>
            <span className="text-sm font-medium text-gray-400">/per unit</span>
          </div>
          <div className="flex flex-col font-medium text-gray-400 text-sm ">
            <span className="text-left">Minimum Order</span>

            <span className="text-left">Available Quantity</span>
          </div>
          <div className="card-actions justify-end">
            <Link
              to="/purchase"
              className="btn btn-neutral hover:btn-primary hover:text-white w-full rounded-full"
            >
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
