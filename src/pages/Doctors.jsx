// Doctors.jsx
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [expandedDoctorId, setExpandedDoctorId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get("/doctors")
      .then(res => {
        setDoctors(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const toggleExpand = (id, e) => {
    e.stopPropagation(); // Prevent navigation when expanding
    setExpandedDoctorId(expandedDoctorId === id ? null : id);
  };

  // Navigate to doctor's individual page
  const handleDoctorClick = (doctor) => {
    // Create a URL-friendly slug from doctor's name
    const slug = doctor.name.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    
    navigate(`/doctors/${slug}`, { state: { doctor } });
  };

  // Get unique specialties for filter
  const specialties = ["all", ...new Set(doctors.map(doc => doc.specialty))];

  // Filter doctors based on search and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter === "all" || doctor.specialty === specialtyFilter;
    return matchesSearch && matchesSpecialty;
  });

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
      y: -8,
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
            Loading our expert doctors...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Top Doctors in Hasanpura, Siwan - Madhuri Nidan Kendra</title>
        <meta
          name="description"
          content="Book appointments with the best doctors in Hasanpura, Siwan Bihar. Madhuri Nidan Kendra offers expert medical care and consultation."
        />
        <meta
          name="keywords"
          content="doctors in Hasanpura, top doctors Siwan, medical clinic Hasanpura, Madhuri Nidan Kendra, best physicians Siwan"
        />
        <link rel="canonical" href="https://yourdomain.com/doctors" />

        {/* Structured Data for Medical Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Madhuri Nidan Kendra",
            "url": "https://yourdomain.com",
            "logo": "https://yourdomain.com/images/health.png",
            "description": "Expert medical care with the best doctors in Hasanpura, Siwan",
            "medicalSpecialty": ["General Medicine", "Pediatrics", "Gynecology", "Obstetrics"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "opp. M. H. Nagar Police Station",
              "addressLocality": "Hasanpura",
              "addressRegion": "Siwan",
              "postalCode": "841236",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 9939497429",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Expert Doctors
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet our team of highly qualified and experienced healthcare professionals dedicated to your well-being
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <motion.div
          className="mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search Input */}
              <motion.div variants={fadeInUp}>
                <label className="block font-semibold text-gray-700 mb-3">
                  🔍 Search Doctors
                </label>
                <input
                  type="text"
                  placeholder="Search by name or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              {/* Specialty Filter */}
              <motion.div variants={fadeInUp}>
                <label className="block font-semibold text-gray-700 mb-3">
                  🩺 Filter by Specialty
                </label>
                <select
                  value={specialtyFilter}
                  onChange={(e) => setSpecialtyFilter(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                >
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>
                      {specialty === "all" ? "All Specialties" : specialty}
                    </option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* Results Count */}
            <motion.div
              className="mt-4 text-center"
              variants={fadeInUp}
            >
              <p className="text-gray-600">
                Showing {filteredDoctors.length} of {doctors.length} doctors
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Doctor Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {filteredDoctors.length === 0 ? (
            <motion.div
              className="col-span-full text-center py-16"
              variants={fadeInUp}
            >
              <div className="text-6xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                No doctors found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search criteria or filter
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSpecialtyFilter("all");
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            filteredDoctors.map((doctor) => {
              const isExpanded = expandedDoctorId === doctor._id;
              return (
                <motion.div
                  key={doctor._id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
                  variants={fadeInUp}
                  whileHover="hover"
                  initial="hidden"
                  animate="visible"
                  onClick={() => handleDoctorClick(doctor)}
                >
                  {/* Doctor Card */}
                  <div className="relative">
                    {/* Doctor Image & Basic Info */}
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
                        <motion.div
                          className="flex-shrink-0"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <img
                            src={doctor.image || "/images/doctor-placeholder.png"}
                            alt={doctor.name}
                            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-blue-200 shadow-lg"
                          />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                            {doctor.name}
                          </h3>
                          <p className="text-blue-600 font-semibold mb-2">
                            {doctor.specialty}
                          </p>
                          {doctor.qualifications && (
                            <p className="text-gray-600 text-sm mb-3">
                              {doctor.qualifications}
                            </p>
                          )}
                          {doctor.experience && (
                            <div className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                              {doctor.experience} experience
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="flex justify-between items-center mt-4">
                        <motion.button
                          onClick={(e) => toggleExpand(doctor._id, e)}
                          className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors flex items-center space-x-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{isExpanded ? "Show Less" : "Quick View"}</span>
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            ▼
                          </motion.span>
                        </motion.button>

                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate('/book', { state: { selectedDoctor: doctor._id } });
                          }}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Book Now
                        </motion.button>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="border-t border-gray-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="p-6 bg-gray-50">
                            {/* Bio */}
                            {doctor.bio && (
                              <div className="mb-6">
                                <h4 className="font-semibold text-gray-800 mb-3">About Dr. {doctor.name.split(' ')[0]}</h4>
                                <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
                              </div>
                            )}

                            {/* Studies & Achievements */}
                            {doctor.studies && doctor.studies.length > 0 && (
                              <div className="mb-6">
                                <h4 className="font-semibold text-gray-800 mb-3">🎓 Education & Achievements</h4>
                                <ul className="space-y-2">
                                  {doctor.studies.map((study, index) => (
                                    <li key={index} className="flex items-start">
                                      <span className="text-green-500 mr-2 mt-1">✓</span>
                                      <span className="text-gray-700">{study}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Specializations */}
                            {doctor.specializations && doctor.specializations.length > 0 && (
                              <div className="mb-6">
                                <h4 className="font-semibold text-gray-800 mb-3">⭐ Specializations</h4>
                                <div className="flex flex-wrap gap-2">
                                  {doctor.specializations.map((spec, index) => (
                                    <span
                                      key={index}
                                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                    >
                                      {spec}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Action Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate('/book', { state: { selectedDoctor: doctor._id } });
                                }}
                                className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                              >
                                📅 Book Appointment
                              </motion.button>
                              
                              <motion.button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDoctorClick(doctor);
                                }}
                                className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md"
                              >
                                👨‍⚕️ View Full Profile
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Can't Find the Right Doctor?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Our team is here to help you find the perfect healthcare professional for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/book')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                📅 Book General Appointment
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}