import React from "react";
import { useLoaderData } from "react-router-dom";

const About = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="page">
      <h1>About Page</h1>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default About;
