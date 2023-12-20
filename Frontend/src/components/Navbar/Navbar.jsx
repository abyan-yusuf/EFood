import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/Logo.png";
import { user } from "../../pages/Signin";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b-2 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"} className={"text-[15px]"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/items"} className={"text-[15px]"}>
                Items
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hover:bg-transparent">
          <img src={Logo} className="w-40" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"} className={"text-[15px]"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/items"} className={"text-[15px]"}>
              Items
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? 
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn "
            >
                {user?.name}
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> : 
          <NavLink to={"/signin"} className={"btn"}>
            Sign In
          </NavLink>
        }
      </div>
    </div>
  );
};

export default Navbar;
