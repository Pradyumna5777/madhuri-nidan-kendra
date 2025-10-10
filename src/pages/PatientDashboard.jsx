import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaClock, 
  FaPhoneAlt, 
  FaUserMd, 
  FaStethoscope,
  FaTrash,
  FaEdit,
  FaSearch,
  FaFilter,
  FaExclamationTriangle
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, []);

  useEffect(() => {
    filterAndSortAppointments();
  }, [appointments, searchTerm, statusFilter, sortBy]);

  const fetchAppointments = async () => {
    try {
      const res = await axiosInstance.get("/appointments", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAppointments(res.data.appointments || []);
    } catch (err) {
      console.error("Error fetching appointments:", err.response?.data || err);
      MySwal.fire("Error", "Failed to load appointments", "error");
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctors = async () => {
    try {
      const res = await axiosInstance.get("/doctors");
      setDoctors(res.data);
    } catch (err) {
      console.error("Error fetching doctors:", err.response?.data || err);
    }
  };

  const filterAndSortAppointments = () => {
    let filtered = appointments.filter(appt => {
      const matchesSearch = appt.doctor?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           appt.phone?.includes(searchTerm);
      const matchesStatus = statusFilter === "all" || appt.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    // Sort appointments
    filtered.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      if (sortBy === "date") {
        return dateB - dateA; // Newest first
      } else if (sortBy === "doctor") {
        return a.doctor?.name?.localeCompare(b.doctor?.name);
      }
      return 0;
    });

    setFilteredAppointments(filtered);
  };

  const handleCancel = async (id) => {
    const result = await MySwal.fire({
      title: "Cancel Appointment?",
      text: "Are you sure you want to cancel this appointment? This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
      reverseButtons: true,
      customClass: {
        popup: 'rounded-2xl'
      }
    });

    if (!result.isConfirmed) return;

    try {
      await axiosInstance.put(`/appointments/cancel/${id}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      
      setAppointments(prev =>
        prev.map(appt => 
          appt._id === id ? { ...appt, status: "cancelled" } : appt
        )
      );
      
      MySwal.fire({
        title: "Cancelled!",
        text: "Your appointment has been cancelled successfully.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        customClass: {
          popup: 'rounded-2xl'
        }
      });
    } catch (err) {
      console.error("Cancel error:", err.response?.data || err.message);
      MySwal.fire({
        title: "Error!",
        text: "Failed to cancel appointment. Please try again.",
        icon: "error",
        customClass: {
          popup: 'rounded-2xl'
        }
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800 border-green-200";
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "cancelled": return "bg-red-100 text-red-800 border-red-200";
      case "completed": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "confirmed": return "✅";
      case "pending": return "⏳";
      case "cancelled": return "❌";
      case "completed": return "✅";
      default: return "📅";
    }
  };

  const isUpcoming = (date) => {
    return new Date(date) > new Date();
  };

  const fadeInUp = { 
    hidden: { opacity: 0, y: 30 }, 
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    } 
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  if (loading) {
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
            Loading your appointments...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            My Appointments
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage your medical appointments and track your healthcare journey
          </p>
        </motion.div>

        {/* Stats & Quick Actions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            variants={fadeInUp}
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {appointments.length}
            </div>
            <div className="text-gray-600">Total Appointments</div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            variants={fadeInUp}
          >
            <div className="text-3xl font-bold text-green-600 mb-2">
              {appointments.filter(a => a.status === "confirmed").length}
            </div>
            <div className="text-gray-600">Confirmed</div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            variants={fadeInUp}
          >
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {appointments.filter(a => a.status === "pending").length}
            </div>
            <div className="text-gray-600">Pending</div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
            variants={fadeInUp}
          >
            <div className="text-3xl font-bold text-red-600 mb-2">
              {appointments.filter(a => a.status === "cancelled").length}
            </div>
            <div className="text-gray-600">Cancelled</div>
          </motion.div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaSearch className="inline mr-2" />
                Search Appointments
              </label>
              <input
                type="text"
                placeholder="Search by doctor name or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </motion.div>

            {/* Status Filter */}
            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaFilter className="inline mr-2" />
                Filter by Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
              </select>
            </motion.div>

            {/* Sort By */}
            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="date">Date (Newest First)</option>
                <option value="doctor">Doctor Name</option>
              </select>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Action */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/book"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FaCalendarAlt />
            <span>Book New Appointment</span>
          </Link>
        </motion.div>

        {/* Appointments Grid */}
        <AnimatePresence>
          {filteredAppointments.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                {appointments.length === 0 ? "No Appointments Yet" : "No Matching Appointments"}
              </h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {appointments.length === 0 
                  ? "You haven't booked any appointments yet. Schedule your first appointment to get started."
                  : "Try adjusting your search criteria or filters to find your appointments."
                }
              </p>
              {appointments.length === 0 && (
                <Link
                  to="/book"
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                >
                  <FaCalendarAlt />
                  <span>Book Your First Appointment</span>
                </Link>
              )}
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {filteredAppointments.map((appt) => {
                const apptDate = new Date(appt.date);
                const dateStr = apptDate.toLocaleDateString('en-IN', { 
                  weekday: 'short', 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                });
                const timeStr = apptDate.toLocaleTimeString('en-IN', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                });

                return (
                  <motion.div
                    key={appt._id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    variants={fadeInUp}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Status Header */}
                    <div className={`border-b ${getStatusColor(appt.status)} px-6 py-3`}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm flex items-center space-x-2">
                          <span>{getStatusIcon(appt.status)}</span>
                          <span className="capitalize">{appt.status}</span>
                        </span>
                        {isUpcoming(appt.date) && appt.status !== "cancelled" && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            Upcoming
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Appointment Content */}
                    <div className="p-6">
                      {/* Doctor Info */}
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <FaUserMd className="text-xl" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">
                            {appt.doctor?.name || "Doctor"}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {appt.doctor?.specialty || "General Physician"}
                          </p>
                        </div>
                      </div>

                      {/* Appointment Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <FaCalendarAlt className="text-blue-500" />
                          <span className="font-medium">{dateStr}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <FaClock className="text-green-500" />
                          <span className="font-medium">{timeStr}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <FaPhoneAlt className="text-purple-500" />
                          <span className="font-medium">{appt.phone}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      {appt.status !== "cancelled" && isUpcoming(appt.date) && (
                        <div className="flex space-x-3">
                          <motion.button
                            onClick={() => handleCancel(appt._id)}
                            className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <FaTrash />
                            <span>Cancel</span>
                          </motion.button>
                        </div>
                      )}

                      {appt.status === "cancelled" && (
                        <div className="text-center py-3">
                          <div className="flex items-center justify-center space-x-2 text-red-600 font-semibold">
                            <FaExclamationTriangle />
                            <span>Appointment Cancelled</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}