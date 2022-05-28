import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../Firebase/Firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const UpdateProfile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
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
  const { city, country, degree, institute, linkedIn, phone } = userData.data;
  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const email = user.email;
    const userInfo = {
      degree: event.target.degree.value,
      institute: event.target.institute.value,
      phone: event.target.phone.value,
      linkedIn: event.target.linkedIn.value,
      country: event.target.country.value,
      city: event.target.city.value,
    };
    // console.log(userInfo);
    // const url = `http://localhost:5000/user/updateProfile/${email}`;
    const url = `https://auto-zone-01.herokuapp.com/user/updateProfile/${email}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/dashboard/profile");
          toast.success("Your Profile updated successfully", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
        // console.log(data);
      });
  };
  return (
    <div className="px-6 py-6">
      <form onSubmit={(event) => handleUpdateProfile(event)}>
        <div className="pb-8 flex justify-between">
          <div>
            <h1 className="text-4xl font-bold ">{user.displayName}</h1>
            <p>{user.email}</p>
          </div>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
          <label htmlFor="" className="">
            <span className="font-bold">Highest Degree: </span>
            <input
              name="degree"
              placeholder={degree || "Academic Qualification"}
              defaultValue={degree}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label htmlFor="" className="">
            <span className="font-bold">School/College/University: </span>{" "}
            <input
              name="institute"
              placeholder={institute || "Enter your last academic institute"}
              defaultValue={institute}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="" className="">
            <span className="font-bold">Phone: </span>{" "}
            <input
              name="phone"
              placeholder={phone || "Enter your phone number"}
              defaultValue={phone}
              type="text"
              className="input input-md input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="" className="">
            <span className="font-bold">Linkedin: </span>{" "}
            <input
              name="linkedIn"
              placeholder={
                linkedIn || "Enter your linkedIn handle. example - @shuhamidu"
              }
              defaultValue={linkedIn}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="" className="">
            <span className="font-bold">Country:</span>{" "}
            <input
              name="country"
              placeholder={country || "Enter your country"}
              defaultValue={country}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="" className="">
            <span className="font-bold">City:</span>{" "}
            <input
              name="city"
              placeholder={city || "Enter your city"}
              defaultValue={city}
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
