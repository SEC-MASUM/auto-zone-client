import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Profile = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Profile;
