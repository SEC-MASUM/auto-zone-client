import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loading from "../Shared/Loading/Loading";
import Navbar from "../Shared/Navbar/Navbar";
import useProducts from "../../Hooks/useProducts";
import Hero from "../../Components/Hero/Hero";
import Footer from "../Shared/Footer/Footer";

const Products = () => {
  const { products, isLoading, refetch } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Hero>Our Products</Hero>
      <div className="container mx-auto my-12">
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
      <Footer/>
    </>
  );
};

export default Products;
