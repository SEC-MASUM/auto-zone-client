import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";

const ProductRow = ({ product, index, refetch }) => {
  const { _id, name, description, minOrder, availableQty, price, image } =
    product;
  const handleDelete = () => {
    (async () => {
      // const url = `http://localhost:5000/product/${_id}`;
      const url = `https://auto-zone-01.herokuapp.com/product/${_id}`;
      console.log(url);
      const result = await axios.delete(url, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log(result);
      if (result.data.deletedCount) {
        toast.success(`Deleted Successfully`);
        refetch();
      }
    })();
  };
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td title={description}>Description</td>
      <td>{minOrder}</td>
      <td>{availableQty}</td>
      <td>{price}</td>
      <td>
        <div className="space-x-2">
          <button className="btn btn-sm btn-success">Edit</button>
          <DeleteModal id={_id} name={name} handleDelete={handleDelete}>
            Delete
          </DeleteModal>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
