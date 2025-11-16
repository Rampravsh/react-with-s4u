import React, { useState } from "react";

const App = () => {
  const [formData, setformData] = useState({
    email: "",
    checkbox: false,
  });

  const handleChange = (e) => {
    const { type, value, checked } = e.target;
    setformData((prev) => ({
      ...prev,
      [type]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(formData);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <input
        className="w-full max-w-md p-3 mb-4 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 shadow-sm"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <label
        className="flex items-center p-3 bg-white rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        htmlFor="checkbox"
      >
        <input
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mr-2"
          id="checkbox"
          type="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
        />
        <span className="text-gray-900 text-base">
          I agree to the Terms and Conditions
        </span>
      </label>
    </div>
  );
};

export default App;
