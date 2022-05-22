import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <div className="container mx-auto my-28">
      <h1 className="text-4xl font-bold my-12">OUR PRODUCTS</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
