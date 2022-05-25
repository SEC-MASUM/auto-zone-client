import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import useProducts from "../../../Hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import ProductRow from "./ProductRow/ProductRow";

const ManageProducts = () => {
  const { products, isLoading, refetch } = useProducts();
  if (isLoading) {
    return <Loading />;
  }
  // const {
  //   data: products,
  //   isLoading,
  //   refetch,
  // } = useQuery("products", () => axios.get(`http://localhost:5000/product`));
  // console.log(products);
  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div>
      <h1>Manage Products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Min Order Qty</th>
              <th>Available Qty</th>
              <th>Price/Unite</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.data.map((product, index) => (
              <ProductRow
                key={product._id}
                index={index}
                product={product}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
