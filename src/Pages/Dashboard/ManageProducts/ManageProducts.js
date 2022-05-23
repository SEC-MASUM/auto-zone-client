import React from "react";

const ManageProducts = () => {
  return (
    <div>
      <h1>Manage Products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Min Order Qty</th>
              <th>Available Qty</th>
              <th>Price/Unite</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <th>1</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://api.lorem.space/image/face?hash=80245"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Product Name</div>
                  </div>
                </div>
              </td>
              <td>Description</td>
              <td>Min Qty 5000</td>
              <td>Available Qty 10000</td>
              <td>Price $345</td>
              <td>
                <div className="space-x-2">
                  <button className="btn btn-sm btn-success">Edit</button>
                  <button className="btn btn-sm btn-primary">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
