import React from "react";

const App = () => {
  return (
    <div className=" mt-28 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-xl space-y-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>
      <p className="mt-4 text-gray-600">
        This is a sample paragraph styled with Tailwind CSS.
      </p>
    </div>
  );
};

export default App;
