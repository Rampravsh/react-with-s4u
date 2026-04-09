import axios from "axios";

const api = axios.create({
  baseURL: "https://699451fafade7a9ec0f50362.mockapi.io/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
