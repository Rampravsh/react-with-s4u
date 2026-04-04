import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      appid: import.meta.env.VITE_WEATHER_API,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
