// Doctors.jsx
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { motion, AnimatePresence } from "framer-motion";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [expandedDoctorId, setExpandedDoctorId] = useState(null);

  useEffect(() => {
    axiosInstance.get("/doctors")
      .then(res => setDoctors(res.data))
      .catch(console.error);
  }, []);

  const toggleExpand = (id) => setExpandedDoctorId(expandedDoctorId === id ? null : id);

  return (
    <div className="mx-auto p-6 md:p-16 bg-gray-50 min-h-screen relative">
      <Helmet>
        <title>Top Doctors in Hasanpura, Siwan - Madhuri Nidan Kendra</title>
        <meta
          name="description"
          content="Book appointments with the best doctors in Hasanpura, Siwan Bihar. Madhuri Nidan Kendra offers expert medical care and consultation."
        />
        <meta
          name="keywords"
          content="doctors in Hasanpura, top doctors Siwan, medical clinic Hasanpura, Madhuri Nidan Kendra"
        />
        <link rel="canonical" href="https://yourdomain.com/doctors" />
      </Helmet>

      {/* Page Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12 text-center relative z-10">
        Meet Our Doctors
      </h2>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {doctors.length === 0 ? (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No doctors available yet.
          </p>
        ) : (
          doctors.map((doc) => {
            const isExpanded = expandedDoctorId === doc._id;
            return (
              <motion.div
                key={doc._id}
                layout
                onClick={() => toggleExpand(doc._id)}
                className={`bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-lg cursor-pointer overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:scale-105 pt-16 ${
                  isExpanded ? "border-blue-400 shadow-2xl" : "border-transparent"
                }`}
              >
                {/* Doctor Image */}
                <div className="flex justify-center -mt-16">
                  <motion.img
                    src={doc.image || "https://via.placeholder.com/400x400?text=Doctor"}
                    alt={doc.name}
                    className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full border-4 border-white shadow-md"
                    layout
                  />
                </div>

                {/* Card Body */}
                <motion.div className="p-6 text-center" layout>
                  <motion.h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1" layout>
                    {doc.name}
                  </motion.h3>
                  <motion.p className="italic text-gray-600 mb-4">{doc.specialty}</motion.p>

                  {/* Expanded Info */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-left mt-4"
                      >
                        <p className="text-gray-700 mb-3">{doc.bio}</p>
                        <h4 className="font-semibold text-gray-800 mb-2">Studies / Achievements:</h4>
                        {doc.studies && doc.studies.length > 0 ? (
                          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                            {doc.studies.map((study, i) => <li key={i}>{study}</li>)}
                          </ul>
                        ) : (
                          <p className="text-gray-500 mb-4">No studies listed.</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4 mt-4">
                    <a
                      href={`tel:+91${doc.phone || "9939497429"}`}
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      Call
                    </a>
                    <a
                      href={`mailto:${doc.email || "info@clinic.com"}`}
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition"
                    >
                      Email
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Optional Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-blue-100 rounded-full top-[-100px] left-[-100px] opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-green-100 rounded-full bottom-[-150px] right-[-150px] opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
