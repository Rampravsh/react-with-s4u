import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = true;
  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/about");
    }
  };

  const arr = ["a", "b", "c", "d"];
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
        {arr.map((item) => {
          return (
            <NavLink
              key={item}
              to={`/contact/${item}`}
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-white"
              }
            >
            {item}
            </NavLink>
          );
        })}
      </nav>
      <button onClick={handleClick}>Navigate to About</button>
    </>
  );
};

export default Navbar;
