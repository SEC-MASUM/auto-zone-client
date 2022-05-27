import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const handleAdmin = () => {
    // const url = `http://localhost:5000/user/admin/${email}`;
    const url = `https://auto-zone-01.herokuapp.com/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          toast.error("You have no access to delete");
        }
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch(); // to update data automatically in UI
          toast.success("Successfully made an admin");
        }
      });
  };
  const handleRemoveAdmin = () => {
    // const url = `http://localhost:5000/user/removeAdmin/${email}`;
    const url = `https://auto-zone-01.herokuapp.com/user/removeAdmin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          toast.error("You have no access to delete");
        }
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch(); // to update data automatically in UI
          toast.success("Successfully remove an admin");
        }
      });
  };
  return (
    <tr className="text-center">
      <th>{index + 1}</th>
      <td className="text-left">{email}</td>
      <td className="text-green-500">{user?.role}</td>
      <td className="space-x-2">
        {role !== "admin" && (
          <span onClick={handleAdmin} className=" btn btn-sm btn-success">
            Make Admin{" "}
          </span>
        )}
        {role === "admin" && (
          <span onClick={handleRemoveAdmin} className="btn btn-sm btn-primary">
            Remove Admin
          </span>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
