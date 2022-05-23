import React from "react";

const ManageOrders = () => {
  return (
    <div>
      <h1>Manage Orders</h1>
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
                <div>
                  <button className="btn btn-sm btn-success">Ship Now</button>
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

export default ManageOrders;
