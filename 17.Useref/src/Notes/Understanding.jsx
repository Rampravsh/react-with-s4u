import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    // setCount(count + 1);
    countRef.current += 1;
    console.log(countRef.current);
  };

  useEffect(() => {
    console.log("re render hua hai");
  });

  return (
    <div>
      <h1>
        {" "}
        {count} {countRef.current}
      </h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default App;
