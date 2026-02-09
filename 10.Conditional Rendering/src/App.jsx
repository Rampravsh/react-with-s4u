import "./App.css";
import A from "./component/A.jsx";
import B from "./component/B.jsx";
import C from "./component/C.jsx";
import ConditionalRenderingExamples from "./examples.jsx";

function App() {
  // const name="rampravesh kumar"

  // const opntion = "a";

  // let content = <h1>Hello how are you</h1>;

  // if (opntion === "a") {
  //   content = <A />;
  // } else if (opntion === "b") {
  //   content = <B />;
  // } else {
  //   content = <C />;
  // }

  const color = "red";

  return (
    <div>
      <h1 style={{ backgroundColor: color === "red" ? "red" : "blue" }}>
        Hello how are you
      </h1>
      {/* <h1 className={{backgroundColor: 'blue'}}>hii </h1> */}

      {/* <div>{content}</div> */}

      {/* <ConditionalRenderingExamples /> */}

      {/* {
        name?<h1>{name}</h1>:null
      } */}

      {/* {
        name && <h1> {name} </h1> && <h1>sabse last bala dikhega && eske bad </h1>
      } */}
    </div>
  );
}

export default App;
