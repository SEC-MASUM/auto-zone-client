import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UserRow from "./UserRow/UserRow";

const UserRole = () => {
  // const { data: users, isLoading } = useQuery("users", () =>
  //   fetch("http://localhost:5000/user").then((res) => res.json())
  // );

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () => axios.get(`http://localhost:5000/user`));
  console.log(users);
  if (isLoading) {
    return <Loading />;
  }
  // console.log(users);
  return (
    <div>
      <h1>User Role</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user, index) => (
              <UserRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRole;
