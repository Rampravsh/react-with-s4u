import React, { useState } from "react";

const RadioMap = () => {
  const [gender, setGender] = useState("");
  const genders = ["male", "female", "other"];
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Select Your Gender
        </h2>
        <div className="flex flex-col space-y-4">
          {genders.map((item) => {
            return (
              <label
                key={item}
                htmlFor={item}
                className="flex items-center gap-x-3 cursor-pointer"
              >
                <input
                  id={item}
                  type="radio"
                  name="gender"
                  checked={gender === item}
                  onChange={(e) => setGender(e.target.id)}
                  className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-lg text-gray-700 font-medium">
                  {item}
                </span>
              </label>
            );
          })}
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
};

export default RadioMap;
