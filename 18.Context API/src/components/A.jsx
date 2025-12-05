import React from "react";
import C from "./C";
import D from "./D";
import { useMycontext } from "../hook/ContextApi";

const A = () => {
  const { first } = useMycontext();
  return (
    <div className="bg-blue-500 text-3xl font-bold text-center">
      A<p>{first}</p>
      <div className="grid grid-cols-2 gap-4 m-4 p-4 h-11/12 border-4 border-yellow-500">
        <C />
        <D />
      </div>
    </div>
  );
};

export default A;
