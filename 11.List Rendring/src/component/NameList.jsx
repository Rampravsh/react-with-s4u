import React from "react";

const NameList = () => {
  const names = ["ram", "shyam", "viyam"];
  return (
    <ul>
      {names.map((name, index) => {
        return <li key={index}>{name}</li>;
      })}
    </ul>
  );
};

export default NameList;
