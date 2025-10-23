import "./App.css";

function App() {
  // const consoleHello = () => console.log("hello world");

  // const testingFun = (e) => {
  //   setTimeout(() => {
  //     console.log(e.target.value);
  //   }, 1000);
  //   // console.log("test hua hai");
  // };

  // function testing(name) {
  //   console.log(`hello how are you ${name}`);
  // }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   console.log(e);
  //   console.log("submit ho gya ");
  // }
  function parentHandler(e) {
    console.log(e);
    console.log("parent pe click hua hai");
  }
  function childHandler(e) {
    e.stopPropagation();
    console.log("child pe click hua hai");
    // console.log(e.target);
  }

  return (
    <>
      <div
        onClick={parentHandler}
        style={{ backgroundColor: "blue", padding: "100px" }}
      >
        Parent Click
        <div
          style={{ backgroundColor: "green", padding: "70px" }}
          onClick={childHandler}
        >
          Child Click
        </div>
      </div>
      {/* <button onClick={() => testing("Rampravesh")}>Click</button> */}
      {/* <h1
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
      <input type="text" onChange={consoleHello} placeholder="Enter name" /> */}
      {/* <form onSubmit={submitHandler} action="">
        <input type="text" placeholder="say hi" />
        <button>submit</button>
      </form> */}

      {/* <button onClick={testingFun}>Click me</button>
      <input type="text" onChange={testingFun} placeholder="say something" /> */}
    </>
  );
}

export default App;
