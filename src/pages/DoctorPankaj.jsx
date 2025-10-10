import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DoctorPankaj() {
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

  const services = [
    { name: "General Medicine", icon: "🩺", description: "Comprehensive treatment for common illnesses and chronic conditions" },
    { name: "Pediatric Care", icon: "👶", description: "Specialized healthcare for children from infancy to adolescence" },
    { name: "Child Vaccination", icon: "💉", description: "Complete immunization schedule and preventive care" },
    { name: "Health Checkups", icon: "❤️", description: "Regular health assessments and preventive screenings" },
    { name: "Fever & Infections", icon: "🌡️", description: "Expert treatment for viral and bacterial infections" },
    { name: "Growth Monitoring", icon: "📊", description: "Tracking child development and growth milestones" }
  ];

  const qualifications = [
    "B.A.M.S. (Ranchi)",
    "C.C.H. (Mumbai)",
    "10+ Years of Experience",
    "Specialized in Pediatrics",
    "General Medicine Expert"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Helmet>
        <title>Dr. Pankaj Kumar Chaurasiya | Physician & Pediatrician | Madhuri Nidan Kendra, Siwan</title>
        <meta
          name="description"
          content="Consult Dr. Pankaj Kumar Chaurasiya, experienced Physician & Pediatrician at Madhuri Nidan Kendra, Hasanpura, Siwan. Expert in general medicine, child healthcare, and preventive treatments."
        />
        <meta
          name="keywords"
          content="Dr Pankaj Kumar Chaurasiya, Madhuri Nidan Kendra, Physician, Pediatrician, Doctor in Siwan Hasanpura, Best doctor near me, Child specialist, General physician"
        />
        <link
          rel="canonical"
          href="https://madhuri-nidan-kendra.vercel.app/doctors/dr-pankaj-kumar-chaurasiya"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Dr. Pankaj Kumar Chaurasiya | Physician & Pediatrician | Madhuri Nidan Kendra" />
        <meta property="og:description" content="Expert Physician and Pediatrician specializing in general medicine, child healthcare, and comprehensive medical treatments." />
        <meta property="og:image" content="https://madhuri-nidan-kendra.vercel.app/images/hos1.png" />
        <meta property="og:url" content="https://madhuri-nidan-kendra.vercel.app/doctors/dr-pankaj-kumar-chaurasiya" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Pankaj Kumar Chaurasiya | Physician & Pediatrician" />
        <meta name="twitter:description" content="Expert Physician and Pediatrician at Madhuri Nidan Kendra, Siwan" />
        <meta name="twitter:image" content="https://madhuri-nidan-kendra.vercel.app/images/hos1.png" />

        {/* Structured Data for Google (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Pankaj Kumar Chaurasiya",
            "image": "https://madhuri-nidan-kendra.vercel.app/images/hos1.png",
            "medicalSpecialty": ["General Practice", "Pediatrics"],
            "qualifications": "B.A.M.S. (Ranchi), C.C.H. (Mumbai)",
            "experience": "10+ years",
            "description": "Expert Physician and Pediatrician specializing in general medicine, child healthcare, and comprehensive medical treatments.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Madhuri Nidan Kendra, Opp. M.H. Nagar Police Station, Hasanpura",
              "addressLocality": "Siwan",
              "addressRegion": "Bihar",
              "postalCode": "841236",
              "addressCountry": "India"
            },
            "affiliation": {
              "@type": "Organization",
              "name": "Madhuri Nidan Kendra"
            },
            "url": "https://madhuri-nidan-kendra.vercel.app/doctors/dr-pankaj-kumar-chaurasiya",
            "sameAs": [
              "https://madhuri-nidan-kendra.vercel.app",
              "https://www.google.com/maps?q=Madhuri+Nidan+Kendra+Hasanpura+Siwan"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Doctor Image */}
            <motion.div
              className="flex justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <div className="relative">
                <motion.img
                  src="/images/hos1.png"
                  alt="Dr. Pankaj Kumar Chaurasiya"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                >
                  10+ Years Experience
                </motion.div>
              </div>
            </motion.div>

            {/* Doctor Info */}
            <motion.div
              className="text-center lg:text-left"
              variants={fadeInUp}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                variants={fadeInUp}
              >
                Dr. Pankaj Kumar Chaurasiya
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl text-blue-200 mb-4 font-semibold"
                variants={fadeInUp}
              >
                Physician & Pediatrician
              </motion.p>
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6"
                variants={fadeInUp}
              >
                <p className="text-lg md:text-xl text-blue-100">
                  B.A.M.S. (Ranchi), C.C.H. (Mumbai)
                </p>
              </motion.div>
              <motion.p
                className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8"
                variants={fadeInUp}
              >
                Expert in general medicine and pediatric care with comprehensive 
                experience in treating patients of all ages, from children to adults.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/book"
                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
                  >
                    📅 Book Appointment
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:+919939497429"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-block"
                  >
                    📞 Call Now
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* About Section */}
        <motion.section
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUp}
          >
            About Dr. Pankaj Kumar Chaurasiya
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Pankaj Kumar Chaurasiya is a highly experienced Physician and Pediatrician 
                practicing at Madhuri Nidan Kendra, Hasanpura, Siwan. With over 10 years of 
                dedicated medical practice, he provides expert consultation and treatment for 
                general health conditions, child care, and preventive medicine.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                His expertise spans across all age groups, making him a trusted healthcare 
                provider for entire families. Dr. Pankaj is particularly renowned for his 
                gentle approach with children and his comprehensive understanding of 
                pediatric health issues.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                He believes in preventive healthcare and focuses on educating patients 
                about maintaining good health through proper lifestyle and timely medical 
                interventions.
              </p>
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Qualifications & Expertise</h3>
              <div className="space-y-4">
                {qualifications.map((qualification, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <span className="text-gray-700 font-medium">{qualification}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
            variants={fadeInUp}
          >
            Specialized Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-blue-100"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Section */}
        <motion.section
          className="mb-16 md:mb-24 bg-blue-50 rounded-2xl p-8 lg:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
            variants={fadeInUp}
          >
            Why Choose Dr. Pankaj?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "👨‍⚕️", title: "Dual Specialization", desc: "Expert in both General Medicine and Pediatrics" },
              { icon: "⏰", title: "10+ Years Experience", desc: "Extensive experience in diverse medical cases" },
              { icon: "👶", title: "Child-Friendly", desc: "Gentle approach that makes children comfortable" },
              { icon: "🏠", title: "Family Care", desc: "Comprehensive healthcare for entire families" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Consultation Section */}
        <motion.section
          className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 lg:p-12 text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl lg:text-3xl font-bold mb-6"
            variants={fadeInUp}
          >
            Ready to Consult with Dr. Pankaj?
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Experience comprehensive healthcare for you and your family. 
            Book your appointment today with our expert Physician and Pediatrician.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                📅 Book Appointment Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+919939497429"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-block"
              >
                📞 Call: +91 9939497429
              </a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Clinic Information */}
        <motion.section
          className="mt-16 md:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <motion.h2
              className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center"
              variants={fadeInUp}
            >
              Clinic Information
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <motion.div
                className="text-center p-6 bg-blue-50 rounded-xl"
                variants={fadeInUp}
              >
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="font-semibold text-gray-800 mb-2">Madhuri Nidan Kendra</h3>
                <p className="text-gray-600">Opp. M.H. Nagar Police Station, Hasanpura, Siwan - 841236</p>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-blue-50 rounded-xl"
                variants={fadeInUp}
              >
                <div className="text-3xl mb-4">🕒</div>
                <h3 className="font-semibold text-gray-800 mb-2">Consultation Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 24/7</p>
                <p className="text-sm text-gray-500 mt-1">Emergency services available</p>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-blue-50 rounded-xl"
                variants={fadeInUp}
              >
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-semibold text-gray-800 mb-2">Emergency Contact</h3>
                <p className="text-gray-600">+91 9939497429</p>
                <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}