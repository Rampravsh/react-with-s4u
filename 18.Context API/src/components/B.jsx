import React from "react";
import E from "./E";
import F from "./F";

const B = () => {
  return (
    <div className="bg-green-500 text-3xl font-bold text-center">
      B
      <div className="grid grid-cols-2 gap-4 m-4 p-4 h-1/2 border-4 border-gray-500">
        <E />
        <F />
      </div>
    </div>
  );
};

export default B;
