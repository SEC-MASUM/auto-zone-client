import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import logo from "../../../Assets/images/Logo.png";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Products</a>
      </li>
    </>
  );
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-2 py-6">
        <div class="navbar rounded bg-base-100">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <HiOutlineMenuAlt1 className="h-5 w-5" />
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="" className="h-10" />
            </a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <div class="navbar-end">
            <a class="btn">Get started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
