// Doctors.jsx
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { motion, AnimatePresence } from "framer-motion";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [expandedDoctorId, setExpandedDoctorId] = useState(null);

  useEffect(() => {
    axiosInstance.get("/doctors").then(res => setDoctors(res.data)).catch(console.error);
  }, []);

  const toggleExpand = (id) => setExpandedDoctorId(expandedDoctorId === id ? null : id);

  return (
    <div className="mx-auto p-6 md:p-16 bg-blue-50">
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
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Madhuri Nidan Kendra",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "opp. M. H. Nagar Police Station",
              "addressLocality": "Hasanpura",
              "addressRegion": "Siwan",
              "postalCode": "841236",
              "addressCountry": "IN"
            },
            "telephone": "+91 9939497429",
            "url": "https://yourdomain.com"
          })}
        </script>
      </Helmet>

      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
        Our Doctors
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
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
                className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
                  isExpanded ? "shadow-xl border-2 border-blue-500" : "hover:shadow-lg"
                }`}
              >
                <motion.img
                  src={doc.image || "https://via.placeholder.com/400x400?text=Doctor"}
                  alt={doc.name}
                  className="w-full h-64 md:h-72 lg:h-80 object-contain rounded-t-xl mb-4 bg-gray-100"
                  layout
                />
                <motion.h3 className="text-xl font-bold mb-1" layout>
                  {doc.name}
                </motion.h3>
                <motion.p className="italic text-gray-600 mb-2" layout>
                  {doc.specialty}
                </motion.p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                      <p className="text-gray-700 mb-2">{doc.bio}</p>
                      <h4 className="font-semibold mb-1">Studies / Achievements:</h4>
                      {doc.studies && doc.studies.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1 mb-2">
                          {doc.studies.map((study, i) => <li key={i}>{study}</li>)}
                        </ul>
                      ) : (
                        <p className="text-gray-500 mb-2">No studies listed.</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
