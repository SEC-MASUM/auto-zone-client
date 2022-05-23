import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <li>
        <Link to="/dashboard">My Orders</Link>
      </li>
      <li>
        <Link to="/dashboard/addReview">Add Review</Link>
      </li>
      <li>
        <Link to="/dashboard/profile">My Profile</Link>
      </li>
      <li>
        <Link to="/dashboard/manageOrders">Manage Orders</Link>
      </li>
      <li>
        <Link to="/dashboard/addProducts">Add Product</Link>
      </li>
      <li>
        <Link to="/dashboard/userRole">User Role</Link>
      </li>
      <li>
        <Link to="/dashboard/manageProducts">Manage Products</Link>
      </li>
    </>
  );
};

export default SideBar;
