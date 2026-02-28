import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div>About</div>
      <Outlet />
    </div>
  );
};

export default About;
