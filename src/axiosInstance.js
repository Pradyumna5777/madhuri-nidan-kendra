import axios from "axios";

const baseURL = import.meta.env.DEV
  ? "http://localhost:5000/api"
  : "https://doctor-management-backend-k8ns.onrender.com/api";

const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
