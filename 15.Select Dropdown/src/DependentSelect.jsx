import React, { useState } from "react";
import data from "./assets/data";

const DependentSelect = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  //   console.log(Object.keys(data));
  console.log(selectedCountry, selectedState);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md flex flex-col space-y-4">
          {/* Country Select */}
          <div>
            <label
              htmlFor="country-select"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select Country:
            </label>
            <div className="relative">
              <select
                id="country-select"
                name="country-select"
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedState("");
                  setSelectedCountry(e.target.value);
                }}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-sm"
              >
                <option value="">---Select Country---</option>
                {Object.keys(data).map((countryName) => {
                  return (
                    <option key={countryName} value={countryName}>
                      {countryName}
                    </option>
                  );
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* State Select */}
          {selectedCountry && (
            <div>
              <label
                htmlFor="state-select"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Select State:
              </label>
              <div className="relative">
                <select
                  id="state-select"
                  name="state-select"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-sm"
                >
                  <option value="">---Select State---</option>
                  {data[selectedCountry].map((state) => {
                    return (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    );
                  })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DependentSelect;
