import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://be-cloudy.onrender.com/api");

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
