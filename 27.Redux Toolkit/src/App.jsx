import React, { useEffect } from "react";
import Counter from "./components/Counter";
const App = () => {
  useEffect(() => {
    console.log("re render hua hai");
  });

  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
