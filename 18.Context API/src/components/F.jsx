import React from "react";
import { useMycontext } from "../hook/ContextApi";

const F = () => {
  const { setfirst } = useMycontext();
  return (
    <div className="bg-red-500 ">
      F
      <button
        onClick={() => setfirst((prev) => prev + 1)}
        className="bg-amber-300 rounded-2xl p-4 mt-6"
      >
        count
      </button>
    </div>
  );
};

export default F;
