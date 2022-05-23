import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/Logo.png";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-2 py-6">
        <div className="navbar rounded bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <HiOutlineMenuAlt1 className="h-5 w-5" />
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="" className="h-10" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <div className="navbar-end">
            <label
              for="dashboard-sidebar"
              class="btn btn-neutral drawer-button lg:hidden"
            >
              <HiOutlineMenuAlt1 className="h-5 w-5" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
