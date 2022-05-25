import React from "react";

const MyOrderRow = ({ order, index, refetch }) => {
  const { _id, email, name, orderQty, price, totalPrice, status } = order;
  console.log(order);
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
        <div className="space-x-2">
          {status === "unpaid" && (
            <>
              <button className="btn btn-sm btn-warning">Cancel</button>
              <button className="btn btn-sm btn-success">Pay</button>
            </>
          )}
        </div>
      </td>
      <td>
        {status === "paid" && (
          <span className="text-orange-600 font-medium">Transaction ID</span>
        )}
      </td>
    </tr>
  );
};

export default MyOrderRow;
