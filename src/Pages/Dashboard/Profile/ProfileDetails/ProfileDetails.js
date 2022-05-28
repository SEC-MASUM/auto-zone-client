import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../../../Firebase/Firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const ProfileDetails = () => {
  const [user, loading] = useAuthState(auth);

  const { data: userData, isLoading } = useQuery(["userData", user.email], () =>
    axios.get(`https://auto-zone-01.herokuapp.com/user/${user.email}`, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );
  if (loading || isLoading) {
    return <Loading />;
  }
  console.log(userData);
  const { city, country, degree, institute, linkedIn, phone } = userData.data;
  return (
    <div>
      <div className="px-6 py-6">
        <div className="pb-8 flex justify-between">
          <div>
            <h1 className="text-4xl font-bold ">{user.displayName}</h1>
            <p>{user.email}</p>
          </div>
          <Link to="/dashboard/profile/update" className="btn btn-success">
            Update Profile
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-y-6">
          <label htmlFor="" className="">
            <span className="font-bold">Highest Degree:</span> {degree}
          </label>
          <label htmlFor="" className="">
            <span className="font-bold">School/College/University:</span>{" "}
            {institute}
          </label>
          <label htmlFor="" className="">
            <span className="font-bold">Phone:</span> {phone}
          </label>
          <label htmlFor="" className="">
            <span className="font-bold">Linkedin:</span> {linkedIn}
          </label>
          <label htmlFor="" className="">
            <span className="font-bold">Country:</span> {country}
          </label>
          <label htmlFor="" className="">
            <span className="font-bold">City:</span> {city}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
