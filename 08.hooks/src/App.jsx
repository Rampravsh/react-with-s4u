import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log(`Clicked ${count} times`);
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
    </>
  );
}

export default App;
