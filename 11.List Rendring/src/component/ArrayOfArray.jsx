import React from "react";

const ArrayOfArray = () => {
  const data = [
    ["html", "css", "javascript", "react"],
    ["node", "mongoDB", "sql"],
  ];
  return (
    <>
      {data.map((element, index) => {
        return (
          <ul key={index}>
            <h2>{index + 1} element</h2>
            {element.map((e, i) => {
              return <li key={i}>{e}</li>;
            })}
          </ul>
        );
      })}
    </>
  );
};

export default ArrayOfArray;
