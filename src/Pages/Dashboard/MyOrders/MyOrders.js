import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import MyOrderRow from "./MyOrderRow/MyOrderRow";
import { toast } from "react-toastify";
import ConfirmDeleteModal from "../../../Components/ConfirmDeleteModal/ConfirmDeleteModal";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [product, setProduct] = useState(null);
  // const url = `https://auto-zone-01.herokuapp.com/order/${user.email}`;
  // const url = `http://localhost:5000/order/${user.email}`;
  const {
    data: myOrders,
    isLoading,
    refetch,
  } = useQuery(["myOrders", user.email], () =>
    axios.get(`https://auto-zone-01.herokuapp.com/order/${user.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-primary">My Orders</h1>
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
                setProduct={setProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
      {product && (
        <ConfirmDeleteModal
          product={product}
          setProduct={setProduct}
          refetch={refetch}
        ></ConfirmDeleteModal>
      )}
    </div>
  );
};

export default MyOrders;
