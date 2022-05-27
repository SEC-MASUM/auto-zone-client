import React from "react";
import { Link } from "react-router-dom";
import {BsFillArrowRightCircleFill} from "react-icons/bs"
import ProductCard from "../../../Components/ProductCard/ProductCard";
import useProducts from "../../../Hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";

const Products = () => {
  const { products, isLoading, refetch } = useProducts();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto my-28">
      <h1 className="text-4xl text-center  font-bold my-12">OUR PRODUCTS</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
        {products.data.length > 6
          ? products.data
              .slice(0, 6)
              .map((product, index) => (
                <ProductCard
                  key={product._id}
                  index={index}
                  product={product}
                  refetch={refetch}
                />
              ))
          : products.data.map((product, index) => (
              <ProductCard
                key={product._id}
                index={index}
                product={product}
                refetch={refetch}
              />
            ))}
      </div>
      {products.data.length > 6 && (
        <p className="flex items-center justify-end my-6 px-3">
          <Link
            to="/products"
            className=" space-x-2 font-bold text-primary btn btn-sm btn-neutral hover:btn-primary hover:text-white rounded-full"
          >
            <span>See More</span>
            <span>
              <BsFillArrowRightCircleFill />
            </span>
          </Link>
        </p>
      )}
    </div>
  );
};

export default Products;
