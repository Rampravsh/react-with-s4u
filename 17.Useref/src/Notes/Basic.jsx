import React, { useRef } from "react";

const App = () => {
  const divRef = useRef();
  const handleClick = () => {
    divRef.current.style.backgroundColor = "blue";
    divRef.current.style.borderRadius = "100%";
  };
  return (
    <>
      <div ref={divRef} className="w-40 h-40 bg-amber-200">
        App
      </div>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default App;
