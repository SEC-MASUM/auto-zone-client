import React from "react";

const MyOrders = () => {
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
              <th>Total Price</th>
              <th>Status</th>
              <th>Action</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <th>1</th>
              <td>Ganderton</td>
              <td>5000</td>
              <td>$345</td>
              <td className="font-medium">
                <span className="text-warning">Unpaid </span>
                <span className="text-success">|| Paid</span>{" "}
                <span className="text-info">|| Shipped</span>
              </td>
              <td>
                <div className="space-x-2">
                  <button className="btn btn-sm btn-warning">Cancel</button>
                  <button className="btn btn-sm btn-success">Pay</button>
                </div>
              </td>
              <td>
                <span className="text-orange-600 font-medium">
                  Transaction ID
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
