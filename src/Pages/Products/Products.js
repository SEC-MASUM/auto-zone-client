import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loading from "../Shared/Loading/Loading";
import Navbar from "../Shared/Navbar/Navbar";
import useProducts from "../../Hooks/useProducts";

const Products = () => {
  const { products, isLoading, refetch } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-28">
        <h1 className="text-4xl font-bold my-12">OUR PRODUCTS</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {products.data.map((product, index) => (
            <ProductCard
              key={product._id}
              index={index}
              product={product}
              refetch={refetch}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
