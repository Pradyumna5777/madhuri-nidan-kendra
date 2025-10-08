import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false); // track full bg load

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const role = localStorage.getItem("role");
      switch (role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "doctor":
          navigate("/doctor/dashboard");
          break;
        case "patient":
          navigate("/patient/dashboard");
          break;
        default:
          navigate("/");
      }
    }
  }, [navigate]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.post("/auth/register", form);
      setMessage("Registered successfully!");
      setForm({ name: "", email: "", password: "" });
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || "Registration failed");
    }
    setLoading(false);
  };

  // Preload full-res background
  useEffect(() => {
    const img = new Image();
    img.src = "/images/bg.webp"; // optimized image
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Low-res placeholder */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          bgLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('/images/bg-small.jpg')" }}
      ></div>

      {/* Full background */}
      {bgLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-100"
          style={{ backgroundImage: "url('/images/bg.webp')" }}
        ></div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>

      {/* Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Register
        </h2>

        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
            required
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-medium"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
