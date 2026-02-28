import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around w-full bg-gray-800 p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-white"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) =>
            isActive ? "text-green-500" : "text-white"
          }
        >
          Help
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
