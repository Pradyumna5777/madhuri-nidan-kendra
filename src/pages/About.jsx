import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function About() {
  const doctors = [
    {
      name: "Dr. Pankaj Kumar Chaurasiya",
      qualifications: "B.A.M.S. (Ranchi), P.G.C.H. (Mumbai)",
      specialization: "Physician & Pediatrician",
      image: "/images/hos1.png",
      experience: "10+ years",
      description: "Specialized in pediatric care and general medicine with extensive experience in treating children and adults."
    },
    {
      name: "Dr. Anita Chaurasiya",
      qualifications: "B.H.M.S. (Nasik), C.C.H. & C.G.O. (Mumbai)",
      specialization: "Gynecologist and Obstetrician",
      image: "/images/hosss.png",
      experience: "8+ years",
      description: "Expert in women's health, pregnancy care, and gynecological treatments with a compassionate approach."
    },
  ];

  const features = [
    {
      icon: "🩺",
      title: "Expert Consultation",
      description: "Professional medical advice from experienced doctors"
    },
    {
      icon: "💊",
      title: "Modern Medicine",
      description: "Latest treatments and medications available"
    },
    {
      icon: "🏥",
      title: "Clean Facilities",
      description: "Hygienic and well-maintained clinic environment"
    },
    {
      icon: "⏰",
      title: "Flexible Timings",
      description: "Convenient appointment schedules for all patients"
    },
    {
      icon: "❤️",
      title: "Patient Care",
      description: "Compassionate and personalized healthcare approach"
    },
    {
      icon: "🔬",
      title: "Accurate Diagnosis",
      description: "Precise medical assessments and treatment plans"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
        staggerChildren: 0.2
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

  return (
    <>
      <Helmet>
        <title>About Us | Madhuri Nidan Kendra, Hasanpura, Siwan</title>
        <meta
          name="description"
          content="Learn about Madhuri Nidan Kendra Clinic, our mission, facilities, and meet our expert doctors in Hasanpura, Siwan."
        />
        <link rel="canonical" href="https://yourdomain.com/about" />

        {/* Organization JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Madhuri Nidan Kendra",
            "url": "https://yourdomain.com",
            "logo": "https://yourdomain.com/images/health.png",
            "sameAs": [
              "https://www.facebook.com/YourPage",
              "https://www.instagram.com/YourPage"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "opp. M. H. Nagar Police Station",
              "addressLocality": "Hasanpura",
              "addressRegion": "Siwan",
              "postalCode": "841236",
              "addressCountry": "IN"
            },
            "contactPoint": [
              { "@type": "ContactPoint", "telephone": "+91 9939497429", "contactType": "customer service" }
            ]
          })}
        </script>

        {/* Doctors JSON-LD */}
        {doctors.map((doc, idx) => (
          <script key={idx} type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": doc.name,
              "image": `https://yourdomain.com${doc.image}`,
              "medicalSpecialty": doc.specialization,
              "worksFor": { "@type": "MedicalOrganization", "name": "Madhuri Nidan Kendra" },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "opp. M. H. Nagar Police Station",
                "addressLocality": "Hasanpura",
                "addressRegion": "Siwan",
                "postalCode": "841236",
                "addressCountry": "IN"
              }
            })}
          </script>
        ))}
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-800 mb-6"
              variants={fadeInUp}
            >
              About Madhuri Nidan Kendra
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto mb-8"
              variants={fadeInUp}
            >
              Delivering Exceptional Healthcare with Compassion and Expertise
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Introduction Section */}
        <motion.section
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">
                Our Story & Mission
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  At <strong>Madhuri Nidan Kendra Clinic</strong>, we have been delivering exceptional
                  healthcare for over a decade. Our expert doctors and dedicated medical
                  staff ensure every patient receives personalized, effective care in a
                  comfortable and safe environment.
                </p>
                <p>
                  Equipped with modern facilities and state-of-the-art equipment, our
                  clinic provides accurate diagnosis and advanced treatments. Experience
                  healthcare that truly cares, guided by the expertise of Dr. Pankaj and
                  Dr. Anita.
                </p>
                <p className="text-blue-700 font-semibold">
                  Your health is our priority. Trust us to provide the care you deserve.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-blue-100 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-2">10+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-2">5000+</div>
                    <div className="text-gray-600">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-2">24/7</div>
                    <div className="text-gray-600">Emergency Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700 mb-2">2</div>
                    <div className="text-gray-600">Expert Doctors</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-blue-800 mb-12 text-center"
            variants={fadeInUp}
          >
            Why Choose Us?
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-blue-50"
                variants={fadeInUp}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Doctors Section */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={staggerContainer}
>
  <motion.h2
    className="text-3xl sm:text-4xl font-bold text-blue-700 mb-12 text-center"
    variants={fadeInUp}
  >
    Meet Our Expert Doctors
  </motion.h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
    {doctors.map((doctor, index) => {
      // Create URL-friendly slug from doctor's name
      const slug = doctor.name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      
      return (
        <motion.div
          key={doctor.name}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
          variants={fadeInUp}
          whileHover="hover"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onClick={() => window.location.href = `/doctors/${slug}`}
        >
          <div className="flex flex-col md:flex-row">
            {/* Doctor Image */}
            <div className="md:w-2/5 p-6 flex items-center justify-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow-lg"
                />
                <div className="absolute inset-0 rounded-full border-2 border-white shadow-inner"></div>
              </motion.div>
            </div>

            {/* Doctor Info */}
            <div className="md:w-3/5 p-6 md:p-8">
              <motion.h3
                className="text-xl md:text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {doctor.name}
              </motion.h3>
              
              <motion.div
                className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {doctor.experience} Experience
              </motion.div>
              
              <motion.p
                className="text-gray-600 font-medium mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {doctor.qualifications}
              </motion.p>
              
              <motion.div
                className="text-blue-700 font-semibold text-lg mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {doctor.specialization}
              </motion.div>
              
              <motion.p
                className="text-gray-600 text-sm leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {doctor.description}
              </motion.p>

              
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.section>

        {/* Clinic Info Section */}
        <motion.section
          className="mt-16 md:mt-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Visit Our Clinic
              </h2>
              <div className="space-y-3 text-blue-100">
                <p className="flex items-center">
                  <span className="mr-3">📍</span>
                  Opp. M. H. Nagar Police Station, Hasanpura, Siwan - 841236
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📞</span>
                  +91 9939497429
                </p>
                <p className="flex items-center">
                  <span className="mr-3">🕒</span>
                  Open Monday to Sunday: 24/7
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl text-black font-semibold mb-4">Emergency Contact</h3>
                <p className="text-2xl font-bold mb-4 text-black">+91 9939497429</p>
                <p className="text-blue-600">Available 24/7 for emergency cases</p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}