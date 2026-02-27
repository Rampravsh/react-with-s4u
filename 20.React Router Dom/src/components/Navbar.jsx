import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-around w-full ">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/help">Help</a>
      </nav>
    </>
  );
};

export default Navbar;
