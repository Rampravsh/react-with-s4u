import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import { useNews } from "../context/NewsContext";
import LoadingNews from "../components/LoadingNews";

const News = () => {
  const { news, fetchNews } = useNews();

  useEffect(() => {
    fetchNews();
  }, []);
  
  if (news.length === 0) {
    return <LoadingNews />;
  }

  return (
    <Wrapper>
      <h1 className="text-2xl font-bold text-center mt-10 mb-4">TaZa NeWs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mt-4">
        {news.map((item) => (
          <Card key={item.url} card={item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default News;
