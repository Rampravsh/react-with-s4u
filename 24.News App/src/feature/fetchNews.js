import api from "../services/api";

export const fetchNews = async (url = "/everything?q=india") => {
  try {
    const res = await api.get(url, {});
    const data = await res.data;
    console.log(data);
    return data.articles;
  } catch (error) {
    console.log(error);
    return [];
  }
};
