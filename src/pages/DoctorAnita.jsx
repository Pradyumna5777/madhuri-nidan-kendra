import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DoctorAnita() {
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
    { name: "Pregnancy Care", icon: "🤰", description: "Complete antenatal and postnatal care" },
    { name: "Infertility Treatment", icon: "👶", description: "Expert guidance for conception" },
    { name: "Menstrual Disorders", icon: "🩸", description: "Treatment for PCOS, PCOD, and irregularities" },
    { name: "Women's Wellness", icon: "💖", description: "Comprehensive women's health checkups" },
    { name: "Family Planning", icon: "🏠", description: "Counseling and contraceptive guidance" },
    { name: "Gynecological Surgery", icon: "🩺", description: "Minimally invasive procedures" }
  ];

  const qualifications = [
    "B.H.M.S. (Nasik)",
    "C.C.H. & C.G.O. (Mumbai)",
    "8+ Years of Experience",
    "Specialized in Women's Health"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Helmet>
        <title>Dr. Anita Chaurasiya | Gynecologist | Madhuri Nidan Kendra, Siwan</title>
        <meta
          name="description"
          content="Consult Dr. Anita Chaurasiya, experienced Gynecologist and Obstetrician at Madhuri Nidan Kendra, Hasanpura, Siwan. Expert in women's health, maternity, and reproductive care."
        />
        <meta
          name="keywords"
          content="Dr Anita Chaurasiya, Gynecologist in Siwan, Obstetrician in Hasanpura, Madhuri Nidan Kendra, Women health doctor, Pregnancy specialist, Best lady doctor near me"
        />
        <link
          rel="canonical"
          href="https://madhuri-nidan-kendra.vercel.app/doctors/dr-anita-chaurasiya"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Dr. Anita Chaurasiya | Gynecologist | Madhuri Nidan Kendra" />
        <meta property="og:description" content="Expert Gynecologist and Obstetrician specializing in women's health, pregnancy care, and reproductive wellness." />
        <meta property="og:image" content="https://madhuri-nidan-kendra.vercel.app/images/hosss.png" />
        <meta property="og:url" content="https://madhuri-nidan-kendra.vercel.app/doctors/dr-anita-chaurasiya" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Anita Chaurasiya | Gynecologist" />
        <meta name="twitter:description" content="Expert Gynecologist and Obstetrician at Madhuri Nidan Kendra, Siwan" />
        <meta name="twitter:image" content="https://madhuri-nidan-kendra.vercel.app/images/hosss.png" />

        {/* Structured Data for Google (Schema.org) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Anita Chaurasiya",
            "image": "https://madhuri-nidan-kendra.vercel.app/images/hosss.png",
            "medicalSpecialty": ["Gynecology", "Obstetrics"],
            "qualifications": "B.H.M.S. (Nasik), C.C.H. & C.G.O. (Mumbai)",
            "experience": "8+ years",
            "description": "Expert Gynecologist and Obstetrician specializing in women's health, pregnancy care, and reproductive wellness.",
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
            "url": "https://madhuri-nidan-kendra.vercel.app/doctors/dr-anita-chaurasiya",
            "sameAs": [
              "https://madhuri-nidan-kendra.vercel.app",
              "https://www.google.com/maps?q=Madhuri+Nidan+Kendra+Hasanpura+Siwan"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
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
                  src="/images/hosss.png"
                  alt="Dr. Anita Chaurasiya"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                >
                  8+ Years Experience
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
                Dr. Anita Chaurasiya
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl text-pink-200 mb-4 font-semibold"
                variants={fadeInUp}
              >
                Gynecologist & Obstetrician
              </motion.p>
              <motion.div
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6"
                variants={fadeInUp}
              >
                <p className="text-lg md:text-xl text-pink-100">
                  B.H.M.S. (Nasik), C.C.H. & C.G.O. (Mumbai)
                </p>
              </motion.div>
              <motion.p
                className="text-lg md:text-xl text-pink-100 leading-relaxed mb-8"
                variants={fadeInUp}
              >
                Expert in women's health, pregnancy care, infertility treatment, 
                and comprehensive gynecological services with a compassionate approach.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/book"
                    className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
                  >
                    📅 Book Appointment
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="tel:+919771781666"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 inline-block"
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
            About Dr. Anita Chaurasiya
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Anita Chaurasiya is a highly skilled and compassionate Gynecologist and Obstetrician 
                practicing at Madhuri Nidan Kendra, Hasanpura, Siwan. With over 8 years of dedicated experience 
                in women's health, she provides expert care in pregnancy management, infertility treatment, 
                menstrual disorders, and overall reproductive wellness.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Her approach combines medical expertise with emotional support, ensuring every patient 
                receives personalized care in a comfortable and confidential environment. Dr. Anita is 
                known for her patient-centric approach and commitment to women's health empowerment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                She stays updated with the latest advancements in gynecology and obstetrics to provide 
                the best possible care to her patients in Siwan and surrounding areas.
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
                    className="flex items-center space-x-4 p-3 bg-pink-50 rounded-lg"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
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
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-pink-100"
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

        {/* Consultation Section */}
        <motion.section
          className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl lg:text-3xl font-bold mb-6"
            variants={fadeInUp}
          >
            Ready to Consult with Dr. Anita?
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-pink-100 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Take the first step towards better women's health. Book your appointment today 
            and experience compassionate, expert care.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book"
                className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                📅 Book Appointment Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+919771781666"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 inline-block"
              >
                📞 Call: +91 9771781666
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
                className="text-center p-6 bg-pink-50 rounded-xl"
                variants={fadeInUp}
              >
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="font-semibold text-gray-800 mb-2">Madhuri Nidan Kendra</h3>
                <p className="text-gray-600">Opp. M.H. Nagar Police Station, Hasanpura, Siwan - 841236</p>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-pink-50 rounded-xl"
                variants={fadeInUp}
              >
                <div className="text-3xl mb-4">🕒</div>
                <h3 className="font-semibold text-gray-800 mb-2">Consultation Hours</h3>
                <p className="text-gray-600">Monday - Sunday: 24/7</p>
              </motion.div>
              <motion.div
                className="text-center p-6 bg-pink-50 rounded-xl"
                variants={fadeInUp}
              >
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-semibold text-gray-800 mb-2">Emergency Contact</h3>
                <p className="text-gray-600">+91 9939497429</p>
                <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}