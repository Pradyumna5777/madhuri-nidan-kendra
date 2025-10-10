import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "../axiosInstance";

export default function Account() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/login");
    
    setIsLoading(true);
    axiosInstance
      .get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        navigate("/login");
      });
  }, [navigate, token]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Loading animation
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-blue-700 font-semibold text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Loading your account...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-red-500 text-lg mb-4">Failed to load user data</div>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Login
          </button>
        </motion.div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
      <div className="text-center mb-8">
  <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-3">
    My Account
  </h1>
  <p className="text-gray-600 text-lg">
    Welcome back, {user.name}!
  </p>
</div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Navigation - Responsive */}
          <motion.div
            className="w-full lg:w-1/4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              {/* User Profile Summary */}
              <motion.div
  className="text-center mb-6 pb-6 border-b border-gray-200"
  variants={itemVariants}
>
  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
    {user.name.charAt(0).toUpperCase()}
  </div>
  <h3 className="font-semibold text-gray-800 text-lg mb-2">{user.name}</h3>
  <p className="text-gray-600 text-sm break-words px-2 truncate max-w-full">
    {user.email}
  </p>

</motion.div>
              {/* Navigation Tabs for Mobile/Tablet */}
              <div className="lg:hidden mb-6">
                <div className="flex overflow-x-auto space-x-2 pb-2">
                  {["profile", "quickLinks", "actions"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        activeTab === tab
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab === "profile" && "Profile"}
                      {tab === "quickLinks" && "Quick Links"}
                      {tab === "actions" && "Actions"}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* Mobile/Tablet Content */}
                <div className="lg:hidden">
                  {activeTab === "profile" && (
                    <motion.div
                      key="profile-mobile"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-4"
                    >
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm text-gray-500">Full Name</label>
                          <p className="font-medium">{user.name}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-500">Email</label>
                          <p className="font-medium">{user.email}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-500">Member Since</label>
                          <p className="font-medium">
                            {new Date(user.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "quickLinks" && (
                    <motion.div
                      key="links-mobile"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <h4 className="font-semibold text-gray-800 mb-4">Quick Access</h4>
                      <div className="space-y-2">
                        <QuickLinks user={user} />
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "actions" && (
                    <motion.div
                      key="actions-mobile"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <h4 className="font-semibold text-gray-800 mb-4">Account Actions</h4>
                      <div className="space-y-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleLogout}
                          className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-md"
                        >
                          Logout
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </AnimatePresence>

              {/* Desktop Navigation */}
              <div className="hidden lg:block space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Quick Access</h4>
                  <QuickLinks user={user} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Account Actions</h4>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-md"
                  >
                    Logout
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content - Hidden on mobile when other tabs are active */}
          <motion.div
            className={`flex-1 ${
              activeTab !== "profile" ? "hidden lg:block" : ""
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <motion.div
                className="flex items-center justify-between mb-8"
                variants={itemVariants}
              >
                <h2 className="text-2xl font-bold text-gray-800">Profile Details</h2>
              
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <motion.div variants={itemVariants}>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-500">Email Address</label>
                    <p className="text-lg font-semibold text-gray-800">{user.email}</p>
                  </div>
                </motion.div>


                <motion.div variants={itemVariants}>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-500">Member Since</label>
                    <p className="text-lg font-semibold text-gray-800">
                      {new Date(user.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info Section */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-200"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {Math.floor((new Date() - new Date(user.createdAt)) / (1000 * 60 * 60 * 24))}
                    </div>
                    <div className="text-sm text-gray-600">Days with us</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      Active
                    </div>
                    <div className="text-sm text-gray-600">Account Status</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      Verified
                    </div>
                    <div className="text-sm text-gray-600">Email Status</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Quick Links Component
const QuickLinks = ({ user }) => (
  <div className="space-y-3">
    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
      <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">
        <span className="text-lg">🏠</span>
        <span>Home</span>
      </Link>
    </motion.div>
    
    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
      <Link to="/doctors" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">
        <span className="text-lg">👨‍⚕️</span>
        <span>Doctors</span>
      </Link>
    </motion.div>
    
    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
      <Link to="/book" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">
        <span className="text-lg">📅</span>
        <span>Book Appointment</span>
      </Link>
    </motion.div>
    
    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
      <Link to="/contact" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors">
        <span className="text-lg">📞</span>
        <span>Contact</span>
      </Link>
    </motion.div>

    {user.role === "admin" && (
      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
        <Link to="/admin/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors">
          <span className="text-lg">⚙️</span>
          <span>Admin Dashboard</span>
        </Link>
      </motion.div>
    )}
    
    {user.role === "doctor" && (
      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
        <Link to="/doctor/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors">
          <span className="text-lg">🩺</span>
          <span>Doctor Dashboard</span>
        </Link>
      </motion.div>
    )}
    
    {user.role === "patient" && (
      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
        <Link to="/patient/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors">
          <span className="text-lg">👤</span>
          <span>Patient Dashboard</span>
        </Link>
      </motion.div>
    )}
  </div>
);