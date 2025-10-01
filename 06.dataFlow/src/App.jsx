import React from "react";
import Layout from "./Layout";
import "./App.css";
import Button from "./Button";
import Comp from "./Comp";

const App = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      {/* <Layout>
        <div>Content goes here</div>
        <footer>Footer goes here</footer>
      </Layout>
      <Button label={<h1>Click Me</h1>} />
      <Button onClick={handleClick}>
        <h1>Click Me</h1>
      </Button> */}
      <Comp age={30} />
      <Comp name="Jane Smith" />
    </div>
  );
};

export default App;
