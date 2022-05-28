import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Welcome = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="h-[80vh] flex items-center justify-center text-center font-bold">
      <div>
        <h1 className="text-5xl">
          Hello, <span className="text-green-500">{user.displayName}</span>
        </h1>
        <h1 className="text-3xl">Welcome to Dashboard</h1>
      </div>
    </div>
  );
};

export default Welcome;
