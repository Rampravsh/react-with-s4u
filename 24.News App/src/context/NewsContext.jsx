import { createContext, useContext } from "react";
import { useState } from "react";
import { fetchNews } from "../feature/fetchNews";

const NewsContext = createContext();

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  // This function will be provided in the context to fetch and set news.
  const fetchNewsInProvider = async (url) => {
    const articles = await fetchNews(url);
    setNews(articles);
  };

  const value = { news, setNews, fetchNews: fetchNewsInProvider };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
