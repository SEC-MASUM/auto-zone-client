import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../Loading/Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  let location = useLocation();
  if (loading || adminLoading) {
    return <Loading />;
  }
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" />;
  }
  // state={{ from: location }} replace no need this part because it make a loop this is bad experience for user
  return children;
};

export default RequireAdmin;
