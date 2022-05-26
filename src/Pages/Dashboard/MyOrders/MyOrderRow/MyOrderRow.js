import React from "react";
import { Link, Navigate } from "react-router-dom";
import DeleteModal from "../../../../Components/DeleteModal/DeleteModal";

const MyOrderRow = ({ order, index, refetch, handleDelete }) => {
  const { _id, email, name, orderQty, price, totalPrice, status, image } =
    order;
  // console.log(order);
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      {/* <td>{name}</td> */}
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
      <td>{orderQty}</td>
      <td>{price}</td>
      <td>{totalPrice}</td>
      <td className="font-medium">
        {status === "unpaid" && <span className="text-warning">Unpaid</span>}
        {status === "paid" && <span className="text-success">Paid</span>}
        {status === "shipped" && <span className="text-info">Shipped</span>}
      </td>
      <td>
        <div className="space-x-2">
          {status === "unpaid" && (
            <>
              <DeleteModal id={_id} name={name} handleDelete={handleDelete}>
                Cancel
              </DeleteModal>
              <Link to={`/payment/${_id}`} className="btn btn-sm btn-success">
                Pay
              </Link>
            </>
          )}
        </div>
      </td>
      <td>
        {status === "paid" && (
          <p>
            Transaction ID: <br />
            <span className="text-orange-600 font-medium">
              {order?.transactionId}
            </span>
          </p>
        )}
      </td>
    </tr>
  );
};

export default MyOrderRow;
