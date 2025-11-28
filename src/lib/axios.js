import axios from "axios"

export const axiosInstance = axios.create({
     baseURL: "http://localhost:5001/api" || "https://be-cloudy.vercel.app",
    withCredentials: true,
});
