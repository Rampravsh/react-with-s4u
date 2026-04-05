import React, { useEffect } from "react";
import Counter from "./components/Counter";
import User from "./components/User";
const App = () => {
  // useEffect(() => {
  //   console.log("re render hua hai");
  // });

  return (
    <div>
      <Counter />
      <User />
    </div>
  );
};

export default App;
