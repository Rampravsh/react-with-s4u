import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <>
      <div className="text-3xl font-bold underline text-center bg-blend-soft-light">
        Context API
      </div>

      <div className="grid grid-cols-2 gap-4 m-4 p-4 min-h-[800px] border-4 border-blue-500">
        <A />
        <B />
      </div>
    </>
  );
}

export default App;
