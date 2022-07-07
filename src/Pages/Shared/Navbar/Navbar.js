import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../Assets/images/Logo.png";
import auth from "../../../Firebase/Firebase.init";
import Loading from "../Loading/Loading";
const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  if (loading) {
    return <Loading />;
  }
  // console.log(user);
  const menuItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/" className="whitespace-nowrap">
              {user.displayName}
            </NavLink>
          </li>
          <li>
            <NavLink onClick={logout} to="/" className="whitespace-nowrap">
              Sign Out
            </NavLink>
          </li>
        </>
      )}
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
                className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">
              <img src={logo} alt="" className="h-10" />
            </a>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0 space-x-2">{menuItems}</ul>
          </div>
          <div className="navbar-end lg:hidden">
            <label
              tabIndex="1"
              htmlFor="dashboard-sidebar"
              className="btn btn-neutral drawer-button "
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
