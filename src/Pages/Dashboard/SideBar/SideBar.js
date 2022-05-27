import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../../Shared/Loading/Loading";

const SideBar = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (adminLoading) {
    return <Loading />;
  }

  return (
    <>
      {!admin && (
        <>
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">Add Review</Link>
          </li>
        </>
      )}
      <li>
        <Link to="/dashboard/profile">My Profile</Link>
      </li>
      {admin && (
        <>
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
      )}
    </>
  );
};

export default SideBar;
