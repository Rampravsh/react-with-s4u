import { useRef } from "react";

function App() {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus()
    console.log(inputRef);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <input type="text" placeholder="type something" ref={inputRef}/>
        <button className="p-1 bg-amber-200 rounded-2xl ml-2 cursor-pointer" onClick={handleFocus}>Focus</button>
      </div>
    </>
  );
}

export default App;
