import "./App.css";
import Card from "./card";
import Example from "./Example";

function App() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      {/* {arr.map((item) => (
        <Card key={item} />
      ))} */}

      <Example />
    </>
  );
}

export default App;
