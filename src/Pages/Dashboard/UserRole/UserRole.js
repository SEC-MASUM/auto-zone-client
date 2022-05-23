import React from "react";

const UserRole = () => {
  return (
    <div>
      <h1>User Role</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <th>1</th>
              <td>Ganderton</td>
              <td>emai@gmail.com</td>
              <td className="text-green-500">Admin</td>
              <td className="space-x-2">
                <span className=" btn btn-sm btn-success">Make Admin </span>
                <span className="btn btn-sm btn-primary">Remove Admin</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRole;
