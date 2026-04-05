import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeByValue,
  decrement,
  increment,
} from "../store/features/counter/counterSlice";

const Counter = () => {
  const inpRef = useRef(0);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counterReducer.value);
  console.log(value);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleChangeByValue = () => {
    dispatch(changeByValue(inpRef.current.value));
  };
  return (
    <>
      <h1>Counter</h1>
      <h2 className="counter">{value}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          padding: "10px",
        }}
      >
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <div >
          <input type="number" ref={inpRef} />
          <button onClick={handleChangeByValue} style={{marginLeft:"10px"}}>Change By Value</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
