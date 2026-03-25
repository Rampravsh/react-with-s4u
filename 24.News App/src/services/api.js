import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2/",
});

// Request Interceptor (Request jane se pehle)
api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      apiKey: import.meta.env.VITE_NEWS_API,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor (Response aane ke baad)
api.interceptors.response.use(
  (response) => {
    // Agar response sahi hai, to sirf data return karein (pura object nahi)
    return response;
  },
  async (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      console.log("Session expired or Unauthorized access");
    }

    return Promise.reject(errorMessage);
  },
);

export default api;
