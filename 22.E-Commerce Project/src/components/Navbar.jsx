import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, User, Menu, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              STORE.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Menus to={"/"} title={"Home"} />
            <Menus to={"/product"} title={"Product"} />
            <Menus to={"/about"} title={"About"} />
            <Menus to={"/contact"} title={"Contact"} />
          </div>

          {/* Icons & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Menus = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors duration-200 hover:text-indigo-600 ${
          isActive ? "text-indigo-600" : "text-gray-600"
        }`
      }
    >
      {title}
    </NavLink>
  );
};

export default Navbar;
