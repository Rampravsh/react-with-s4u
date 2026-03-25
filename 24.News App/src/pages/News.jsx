import React from "react";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";

const News = () => {
  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-center mt-10 mb-4">TaZa NeWs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Wrapper>
  );
};

export default News;
