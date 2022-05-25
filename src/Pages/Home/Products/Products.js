import React from "react";
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
      <h1 className="text-4xl font-bold my-12">OUR PRODUCTS</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10">
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
  );
};

export default Products;
