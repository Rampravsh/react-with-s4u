import React from "react";
import { useDispatch } from "react-redux";
import { addToCount, addToProduct } from "./redux/reducer/productReducer";
import Products from "./components/Products";

const App = () => {
  const dispatch = useDispatch();

  const handleAddToProduct = () => {
    dispatch(
      addToProduct({
        id: 1,
        name: "samsung",
      }),
    );
  };
  const handleAddToCount = () => {
    dispatch(
      addToCount(),
    );
  };
  return (
    <>
      <div>Hello❤️</div>
      <Products />
      <button onClick={handleAddToProduct}>Click karo</button>
      <button onClick={handleAddToCount}>Click karo</button>
    </>
  );
};

export default App;
