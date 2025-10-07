// src/axiosInstance.js
import axios from "axios";

const isLocal = window.location.hostname === "localhost";

const baseURL = isLocal
  ? "http://localhost:5000/api" // local dev
  : "https://doctor-management-backend-k8ns.onrender.com/api"; // live backend

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
