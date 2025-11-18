import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Select Your Gender
        </h2>
        <div className="flex flex-col space-y-4">
          <label
            htmlFor="male"
            className="flex items-center gap-x-3 cursor-pointer"
          >
            <input
              id="male"
              type="radio"
              name="gender"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.id)}
              className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-lg text-gray-700 font-medium">Male</span>
          </label>
          <label
            htmlFor="female"
            className="flex items-center gap-x-3 cursor-pointer"
          >
            <input
              id="female"
              type="radio"
              name="gender"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.id)}
              className="form-radio h-5 w-5 text-pink-600 border-gray-300 focus:ring-pink-500"
            />
            <span className="text-lg text-gray-700 font-medium">Female</span>
          </label>
          <label
            htmlFor="other"
            className="flex items-center gap-x-3 cursor-pointer"
          >
            <input
              id="other"
              type="radio"
              name="gender"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.id)}
              className="form-radio h-5 w-5 text-purple-600 border-gray-300 focus:ring-purple-500"
            />
            <span className="text-lg text-gray-700 font-medium">Other</span>
          </label>
        </div>
        <button
          onClick={() => console.log(gender)}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
