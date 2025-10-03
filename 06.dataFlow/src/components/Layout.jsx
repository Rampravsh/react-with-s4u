import React, { useState } from "react";
import Hero from "./layout/Hero";
import About from "./layout/About";

const Layout = (props) => {
  const [layoutData, setLayoutData] = useState(<div className="text-xl text-red-500">ye layout se aa raha hai</div>)
  return (
    <div className="h-screen text-center bg-gray-200 text-black ">
      Layout {props.data}
      <Hero data={props} layoutData={layoutData} />
      <About data ={props.data} layoutData={layoutData} />
    </div>
  );
};

export default Layout;
