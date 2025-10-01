import React from "react";
import Hero from "./layout/Hero";
import About from "./layout/About";

const Layout = (props) => {
  return (
    <div className="h-screen text-center bg-gray-200 text-black ">
      Layout {props.data}
      <Hero data={props} />
      <About data ={props.data}/>
    </div>
  );
};

export default Layout;
