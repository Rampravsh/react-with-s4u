import React from "react";
import Wrapper from "./Wrapper";
import { categories } from "../constant";
import { useNews } from "../context/NewsContext";

const Category = () => {
  const { fetchNews } = useNews();
  const handleClick = (e) => {
    const category = e.target.innerText.toLowerCase();
    fetchNews(`top-headlines?q=${category}`);
  };

  return (
    <Wrapper>
      <div className="flex items-center md:justify-center mt-5 px-2 gap-2 overflow-x-scroll md:overflow-hidden">
        {categories.map((item) => (
          <button key={item} onClick={handleClick} className="btn btn-neutral">
            {item}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

export default Category;
