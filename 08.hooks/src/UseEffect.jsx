import React from "react";
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log(`Clicked ${count} times`);
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
    </div>
  );
};

export default UseEffect;
