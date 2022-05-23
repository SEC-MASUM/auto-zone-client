import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <div class="drawer drawer-mobile ">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <h2>Welcome to Dashboard</h2>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side ">
          <label for="dashboard-sidebar" class="drawer-overlay "></label>
          <ul class="menu p-4 overflow-y-auto w-56  bg-gray-100 text-base-content ">
            {/* <!-- Sidebar Menu content here --> */}
            <SideBar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
