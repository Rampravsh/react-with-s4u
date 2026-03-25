import React from "react";
import Wrapper from "./Wrapper";
import { categories } from "../constant";

const Category = () => {
  return (
    <Wrapper>
      <div className="flex items-center md:justify-center mt-5 px-2 gap-2 overflow-x-scroll md:overflow-hidden">
        {categories.map((item) => (
          <button key={item} className="btn btn-neutral">
            {item}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Category;
