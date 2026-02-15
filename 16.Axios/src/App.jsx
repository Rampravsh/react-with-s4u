import axios from "axios";

function App() {
  const fetchData = async () => {
    const res = await fetch("http://jsonplaceholder.typicode.com/users",);
    const data = await res.json();
    console.log(data);
  };

  // const fetchData = async () => {
  //   const data = await axios.get("http://jsonplaceholder.typicode.com/users");
  //   console.log(data);
  // };
  return (
    <>
      <h1>project setup</h1>
      <button
        onClick={fetchData}
        className="bg-amber-300 p-4 rounded-2xl mt-4 hover:bg-amber-400"
      >
        Fetch data on click
      </button>
    </>
  );
}

export default App;
