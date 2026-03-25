import React, { useEffect } from "react";
import useMyStore from "./store.js";
import Second from "./Second.jsx";

const App = () => {
  const increment = useMyStore((state) => state.increment);
  const decrement = useMyStore((state) => state.decrement);
  const captlizeName = useMyStore((state) => state.captlizeName);

  useEffect(() => {
    console.log("App component rendered");
  });

  return (
    <div>
      <Second />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={captlizeName}>Capitalize Name</button>
    </div>
  );
};

export default App;
