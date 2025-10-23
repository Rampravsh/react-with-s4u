import "./App.css";

function App() {
  const consoleHello = () => console.log("hello world");
  return (
    <>
      <h1
        style={{
          backgroundColor: "blue",
          color: "red",
          textTransform: "capitalize",
          padding: "10px",
        }}
      >
        hello world
      </h1>
      <button onClick={consoleHello}>Click me</button>
    </>
  );
}

export default App;
