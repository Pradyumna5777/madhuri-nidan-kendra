import { useState, useEffect, useMemo } from "react";
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: localStorage.getItem("email") || "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    notes: ""
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

 // Memoized user object to prevent recreation on every render
  const user = useMemo(() => 
    JSON.parse(localStorage.getItem("user") || "{}"), 
  []);

  useEffect(() => {
    axiosInstance
      .get("/doctors")
      .then((res) => {
        setDoctors(res.data);
        setLoading(false);
        
        // Auto-fill user data if logged in
        if (user?.name) {
          setForm(prev => ({
            ...prev,
            name: user.name,
            email: user.email || ""
          }));
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch doctors. Please try again later.");
        setLoading(false);
      });
  }, [user?.name, user?.email]); // Only depend on specific properties

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const dateTime = new Date(`${form.date}T${form.time}`);
      
      // Validate date is not in the past
      if (dateTime < new Date()) {
        setMessage("Please select a future date and time.");
        setSubmitting(false);
        return;
      }

      const appointmentData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        doctorId: form.doctor,
        date: dateTime,
        notes: form.notes
      };

      await axiosInstance.post("/appointments", appointmentData);

      setMessage("Appointment booked successfully! You will receive a confirmation shortly.");
      setForm({ 
        name: user?.name || "", 
        email: user?.email || "", 
        phone: "", 
        doctor: "", 
        date: "", 
        time: "",
        notes: "" 
      });
    } catch (err) {
      console.error(err);
      setMessage(
        err.response?.data?.error || "Failed to book appointment. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
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
        staggerChildren: 0.15
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
            Loading available doctors...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <div className="text-red-600 text-lg mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Book Appointment | Madhuri Nidan Kendra - Hasanpura, Siwan</title>
        <meta
          name="description"
          content="Book an appointment online with top doctors at Madhuri Nidan Kendra Clinic, Hasanpura, Siwan. Easy scheduling for personalized healthcare."
        />
        <link rel="canonical" href="https://yourdomain.com/book" />

        {/* Structured Data for MedicalClinic */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Madhuri Nidan Kendra",
            url: "https://yourdomain.com",
            image: "https://yourdomain.com/images/health.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "opp. M. H. Nagar Police Station",
              addressLocality: "Hasanpura",
              addressRegion: "Siwan",
              postalCode: "841236",
              addressCountry: "IN",
            },
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91 9939497429",
                contactType: "customer service",
              },
            ],
            makesOffer: doctors.map((doc) => ({
              "@type": "MedicalProcedure",
              name: `Consultation with ${doc.name}`,
              provider: { "@type": "Physician", name: doc.name },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-blue-800 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book Your Appointment
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Schedule your visit with our expert doctors. Fast, convenient, and professional healthcare.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Appointment Form */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
              variants={fadeInUp}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Appointment Details
              </h2>

              <AnimatePresence>
                {message && (
                  <motion.div
                    className={`p-4 rounded-lg mb-6 ${
                      message.includes("successfully") 
                        ? "bg-green-100 text-green-700 border border-green-200" 
                        : "bg-red-100 text-red-700 border border-red-200"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {message}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <label className="block font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>

                  {/* Email Field - Auto-populated */}
                  <motion.div
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <label className="block font-semibold text-gray-700">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      disabled
                      className={`w-full border border-gray-300 rounded-xl px-4 py-3 transition-all duration-300 ${
                        user?.email 
                          ? 'bg-gray-100 text-gray-600 cursor-not-allowed' 
                          : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      }`}
                      placeholder={user?.email ? "Your registered email" : "Enter your email"}
                      required
                    />
                    {user?.email && (
                      <p className="text-sm text-blue-600 mt-1">
                        Using your registered email
                      </p>
                    )}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <motion.div
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <label className="block font-semibold text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>

                  {/* Doctor Selection */}
                  <motion.div
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <label className="block font-semibold text-gray-700">
                      Select Doctor *
                    </label>
                    <select
                      name="doctor"
                      value={form.doctor}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                      required
                    >
                      <option value="">Choose a doctor</option>
                      {doctors.map((doc) => (
                        <option key={doc._id} value={doc._id}>
                          {doc.name} - {doc.specialty}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date Field */}
                  <motion.div
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <label className="block font-semibold text-gray-700">
                      Appointment Date *
                    </label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>

                  {/* Time Field */}
                  <motion.div
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <label className="block font-semibold text-gray-700">
                      Preferred Time *
                    </label>
                    <input
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>

                {/* Notes Field */}
                <motion.div
                  className="space-y-2"
                  variants={fadeInUp}
                >
                  <label className="block font-semibold text-gray-700">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Any specific concerns or additional information..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                  variants={fadeInUp}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center">
                      <motion.span
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Booking Appointment...
                    </span>
                  ) : (
                    "Confirm Appointment"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Sidebar - Doctor Info & Actions */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Selected Doctor Info */}
       {form.doctor && (
  <motion.div
    className="bg-white rounded-2xl shadow-lg p-6"
    variants={fadeInUp}
  >
    <h3 className="text-xl font-semibold text-gray-800 mb-4">
      Selected Doctor
    </h3>
    {doctors
      .filter(doc => doc._id === form.doctor)
      .map(doctor => (
        <div key={doctor._id} className="text-center">
          <motion.div
            className="relative mx-auto mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={doctor.image || "/images/doctor-placeholder.png"}
              alt={doctor.name}
              className="w-20 h-20 object-cover rounded-full border-4 border-blue-200 shadow-lg mx-auto"
            />
            <motion.div
              className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              ✅
            </motion.div>
          </motion.div>
          <h4 className="font-semibold text-gray-800">{doctor.name}</h4>
          <p className="text-blue-600 text-sm mt-1">{doctor.specialty}</p>
          <p className="text-gray-600 text-sm mt-2">{doctor.qualifications}</p>
          {doctor.experience && (
            <div className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mt-2">
              {doctor.experience} experience
            </div>
          )}
        </div>
      ))}
  </motion.div>
)}

            {/* Quick Actions */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <motion.button
                  onClick={() => navigate("/doctors")}
                  whileHover={{ x: 5 }}
                  className="w-full text-left p-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200 flex items-center"
                >
                  <span className="mr-3">👨‍⚕️</span>
                  View All Doctors
                </motion.button>
                
                <motion.button
                  onClick={() => navigate("/patient/dashboard")}
                  whileHover={{ x: 5 }}
                  className="w-full text-left p-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-200 flex items-center"
                >
                  <span className="mr-3">📋</span>
                  My Appointments
                </motion.button>
                
                <motion.button
                  onClick={() => navigate("/contact")}
                  whileHover={{ x: 5 }}
                  className="w-full text-left p-3 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors duration-200 flex items-center"
                >
                  <span className="mr-3">📞</span>
                  Emergency Contact
                </motion.button>
              </div>
            </motion.div>

            {/* Clinic Info */}
            <motion.div
              className="bg-blue-50 rounded-2xl p-6"
              variants={fadeInUp}
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                📍 Clinic Information
              </h3>
              <div className="space-y-2 text-sm text-blue-700">
                <p><strong>Address:</strong> opp. M. H. Nagar Police Station, Hasanpura, Siwan - 841236</p>
                <p><strong>Phone:</strong> +91 9939497429</p>
                <p><strong>Hours:</strong> 9:00 AM - 9:00 PM (Mon-Sun)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}