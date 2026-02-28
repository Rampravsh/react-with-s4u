import React from "react";
import { Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <Outlet />
    </div>
  );
};

export default Contact;
