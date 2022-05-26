import React from "react";

const OrderRow = ({ order, index, refetch }) => {
  const { _id, email, name, orderQty, price, totalPrice, status } = order;
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{orderQty}</td>
      <td>{price}</td>
      <td>{totalPrice}</td>
      <td className="font-medium">
        {status === "unpaid" && <span className="text-warning">Unpaid</span>}
        {status === "paid" && <span className="text-success">Pending</span>}
        {status === "shipped" && <span className="text-info">Shipped</span>}
      </td>
      <td>
        {status === "paid" && (
          <button className="btn btn-sm btn-success">Ship Now</button>
        )}
        {status !== "paid" && (
          <button disabled className="btn btn-sm btn-success">
            Ship Now
          </button>
        )}
      </td>
      <td>
        {status === "paid" && (
          <span className="text-orange-600 font-medium">Transaction ID</span>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
