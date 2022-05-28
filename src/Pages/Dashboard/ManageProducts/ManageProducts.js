import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import DeleteModal from "../../../Components/DeleteModal/DeleteModal";
import useProducts from "../../../Hooks/useProducts";
import Loading from "../../Shared/Loading/Loading";
import ProductRow from "./ProductRow/ProductRow";

const ManageProducts = () => {
  const { products, isLoading, refetch } = useProducts();
  const [modalData, setModalData] = useState(null);
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-primary">
        Manage Products
      </h1>
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
                setModalData={setModalData}
              />
            ))}
          </tbody>
        </table>
      </div>
      {modalData && (
        <DeleteModal
          modalData={modalData}
          setModalData={setModalData}
          refetch={refetch}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageProducts;
