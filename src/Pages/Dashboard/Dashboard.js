import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-4">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="dashboard-sidebar"
            className="drawer-overlay "
          ></label>
          <ul className="menu p-4 overflow-y-auto w-56  bg-gray-100 text-base-content ">
            {/* <!-- Sidebar Menu content here --> */}
            <SideBar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
