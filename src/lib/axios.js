import axios from "axios"

export const axiosInstance = axios.create({
     baseURL: "http://localhost:5001/api" || "https://fe-cloudy.vercel.app",
    withCredentials: true,
});
