import React, { useEffect, useState } from "react";

const PracticeOnRadio = () => {
  const [method, setMethod] = useState("");
  const payments = [
    { id: "UPI", info: "Instant transfer via UPI apps" },
    { id: "Card", info: "Pay using creadit or debit card" },
    { id: "COD", info: "Pay when the order arrives" },
  ];
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Select Payment Method
        </h2>
        <div className="flex flex-col space-y-4">
          {payments.map((item) => (
            <label
              key={item.id}
              htmlFor={item.id}
              className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 ease-in-out
                ${
                  method === item.id
                    ? "bg-blue-50 border-blue-500 border-2 shadow-md"
                    : "bg-gray-50 border-gray-300 border hover:bg-gray-100"
                }`}
            >
              <input
                type="radio"
                name="method"
                checked={method === item.id}
                id={item.id}
                onChange={() => setMethod(item.id)}
                className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 mr-3"
              />
              <span className="text-lg font-medium text-gray-800">
                {item.id}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-800 text-center min-h-[60px] flex items-center justify-center">
          {method ? (
            <p className="text-md font-semibold">
              {payments.find((p) => p.id === method)?.info}
            </p>
          ) : (
            <p className="text-md text-gray-500">
              Select a payment method to see details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeOnRadio;
