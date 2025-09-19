import { useState } from "react";
import Button from "./button";

function Card(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div
        className="Card"
        style={{
          marginBottom: "20px",
          backgroundColor: "#7c4747ff",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>{count}</h1>
        <div>
          <Button name="Increment" onClick={increment} />
          <Button name="Decrement" onClick={decrement} />
        </div>
        <h2>This is {props.title} Card Component</h2>
        <p>It can display various content.</p>
      </div>
    </>
  );
}

export default Card;
