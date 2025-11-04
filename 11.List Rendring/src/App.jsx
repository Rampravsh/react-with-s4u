import "./App.css";
import ArrayOfArray from "./component/ArrayOfArray";
import ArrayOfObject from "./component/ArrayOfObject";
import NameList from "./component/NameList";

function App() {
  return (
    <>
      <h1>example of list rendring in array</h1>
      <NameList />
      <br />
      <h1>example of list rendring in array of object</h1>
      <ArrayOfObject />
      <h1>example of list rendring in array of array</h1>
      <ArrayOfArray />
    </>
  );
}

export default App;
