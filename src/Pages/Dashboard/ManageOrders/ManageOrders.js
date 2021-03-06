import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import OrderRow from "./OrderRow/OrderRow";

const ManageOrders = () => {
  // const url = `http://localhost:5000/order`;
  // const url = `https://auto-zone-01.herokuapp.com/order`;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    axios.get(`https://auto-zone-01.herokuapp.com/order`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-primary">
        Manage Orders
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Product Name</th>
              <th>Order Qty</th>
              <th>Unite Price</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {orders.data.map((order, index) => (
              <OrderRow
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
