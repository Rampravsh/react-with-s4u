import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [randomNumber, setrandomNumber] = useState(0);
  // const [renderCount, setrenderCount] = useState(0);
  const renderCountRef = useRef(0);

  const generateRandomNumber = () => {
    const no = Math.random();
    setrandomNumber(no);
  };

  useEffect(() => {
    // setrenderCount(renderCount + 1);
    console.log("re render hua be");
    console.log(renderCountRef.current);
    renderCountRef.current += 1;
  });

  return (
    <div>
      <h1>{randomNumber}</h1>
      <h1>Re-render Count:{renderCountRef.current} </h1>
      {/* <h1>Re-render Count: {renderCount} </h1> */}
      <button onClick={generateRandomNumber}>Generate Random number </button>
    </div>
  );
};

export default App;
