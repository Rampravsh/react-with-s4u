import React, { useEffect } from "react";
import useMyStore from "./store";

const Second = () => {
  const count = useMyStore((state) => state.count);
  const name = useMyStore((state) => state.name);
  useEffect(() => {
    console.log("Second component rendered");
  });

  return (
    <div>
      {/* <h1>{count}</h1> */}
      <h1>{name}</h1>
    </div>
  );
};

export default Second;
