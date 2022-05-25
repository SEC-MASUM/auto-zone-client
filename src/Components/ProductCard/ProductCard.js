import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, index, refetch }) => {
  const { name, description, minOrder, availableQty, price, image } = product;
  return (
    <div className="flex justify-center ">
      <div className="card card-compact w-9/12 md:w-full lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="w-full">
          <img
            className="min-w-full w-full h-64 rounded-2xl bg-neutral"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-bold text-secondary text-left uppercase">
            {name}
          </h2>
          <span
            className="text-left text-sm text-gray-500 tooltip tooltip-bottom"
            data-tip={description}
          >
            {`${description.slice(0, 80)}...`}
          </span>

          <div className="flex text-sm items-center">
            <span className="text-primary text-lg font-bold">
              Price ${price}
            </span>
            <span className="text-sm font-medium text-gray-400">/per unit</span>
          </div>
          <div className="flex flex-col font-medium text-gray-400 text-sm ">
            <span className="text-left">Min Order: {minOrder}</span>

            <span className="text-left">Available Qty: {availableQty}</span>
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

export default ProductCard;