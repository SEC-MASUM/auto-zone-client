import React from "react";

const OrderRow = ({ order, index, refetch }) => {
  const { _id, email, name, orderQty, price, totalPrice, status } = order;
  const handleShipNow = (id) => {
    const orderUpdate = {
      status: "shipped",
      transactionId: order?.transactionId,
    };
    fetch(`http://localhost:5000/payment/order/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orderUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
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
          <button
            onClick={() => handleShipNow(_id)}
            className="btn btn-sm btn-success"
          >
            Ship Now
          </button>
        )}
        {status !== "paid" && (
          <button disabled className="btn btn-sm btn-success">
            Ship Now
          </button>
        )}
      </td>
      <td>
        {(status === "paid" || status === "shipped") && (
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

export default OrderRow;
