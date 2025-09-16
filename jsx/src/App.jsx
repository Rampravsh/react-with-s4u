import "./App.css";
import React from "react";

function App() {
  let name = "rampravesh kumar";
  let age = 17;
  function greet() {
    return "My name is rpk";
  }
  const arr = [
    "apple",
    "banana",
    "grapes",
    "mango",
    "orange",
    "kiwi",
    "cherry",
  ];

  return (
    <>
      {/* <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius delectus
        architecto laboriosam, veritatis eum incidunt libero corrupti eligendi
        minus nihil omnis iusto molestias saepe vero, corporis asperiores sunt
        excepturi dolore?
      </h1> */}
      {/* <h1>
        hello {name} {greet()}
      </h1> */}
      {/* <h1>{age > 18 ? "you can drive" : "you can not drie"}</h1> */}
      {/* <h1>{console.log(greet())}</h1> */}
      {/* inline style */}
      {/* <h1
        style={{
          backgroundColor: "red",
          fontSize: "80px",
        }}
      >
        Hello style
      </h1> */}
      {/* <div>
        {age > 18 ? (
          <p style={{ color: "green" }}>you can drive</p>
        ) : (
          <p style={{ color: "red" }}>you can not drive</p>
        )}
      </div> */}
      {/* {true && <p>if true then run </p>} */}
      {/* <div>
        <ul>
          {arr.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div> */}
      {/* <div>{React.createElement("h1", null, "hello react create element")}</div> */}
      {/* {React.createElement(
        "h1",
        { id: "heading", style: { color: "red" } },
        "hello react create element"
      )} */}
      {/* {React.createElement(
        "a",
        { href: "https://www.youtube.com/" },
        "go to youtube"
      )} */}

      {/* {React.createElement("h1", { className: "heading" }, `hello ${name}`)} */}
    </>
  );
}

export default App;
