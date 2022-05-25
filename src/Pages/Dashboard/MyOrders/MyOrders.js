import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import MyOrderRow from "./MyOrderRow/MyOrderRow";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);

  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery(["myOrders", user.email], () =>
    axios.get(`http://localhost:5000/order/${user.email}`)
  );

  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.data.map((order, index) => (
              <MyOrderRow
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

export default MyOrders;
