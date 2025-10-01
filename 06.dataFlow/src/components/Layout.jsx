import React from "react";
import Hero from "./layout/Hero";
import About from "./layout/About";

const Layout = () => {
  return (
    <div className="h-screen text-center bg-gray-200 text-black ">
      Layout
      <Hero />
      <About />
    </div>
  );
};

export default Layout;
