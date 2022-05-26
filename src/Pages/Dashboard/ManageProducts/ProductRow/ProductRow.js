import React, { useState } from "react";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";

const ProductRow = ({ product, index, refetch, handleDelete }) => {
  const { _id, name, description, minOrder, availableQty, price, image } =
    product;
  return (
    <tr className="text-center">
      <th>1</th>
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
