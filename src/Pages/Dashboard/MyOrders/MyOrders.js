import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";
import MyOrderRow from "./MyOrderRow/MyOrderRow";
import { toast } from "react-toastify";

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
  const handleDelete = (id) => {
    (async () => {
      const url = `http://localhost:5000/order/${id}`;
      console.log(url);
      const result = await axios.delete(url);
      console.log(result);
      if (result.data.deletedCount) {
        toast.success(`Deleted Successfully`);
        refetch();
      } else {
        toast.success(`Failed to delete`);
      }
    })();
  };
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
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
