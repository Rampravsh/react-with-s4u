import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const state = useSelector((state) => state.counterReducer.value);
  console.log(state);
  return <div>Counter</div>;
};

export default Counter;
