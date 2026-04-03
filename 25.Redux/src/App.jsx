import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProduct } from "./redux/reducer/productReducer";

const App = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <>
      <div>Hello❤️</div>
      {/* <div>{state}</div> */}
      <button onClick={() => dispatch(addToProduct())}>Click karo</button>
    </>
  );
};

export default App;
