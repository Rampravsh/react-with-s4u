import React, { useState } from "react";

const Example = () => {
  const [count, setcount] = useState(0);
  function increase() {
    // setcount(count + 1);
    // setcount(count + 1);
    // setcount(count + 1);
    // setcount(count + 2);
    setcount((prev) => prev + 1);
    // console.log(count);
    setcount((prev) => {
      prev = prev + 1;
      console.log(prev);
      return prev ;
    });
    // console.log(count);
    // setcount((prev) => prev + 1);
    // setcount((prev) => prev + 1);
    // setcount((prev) => prev + 1);
    console.log(count);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>increse</button>
    </div>
  );
};

export default Example;
