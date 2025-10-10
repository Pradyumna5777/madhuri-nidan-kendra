import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Doctors Data
const doctors = [
  {
    name: "Dr. Pankaj Kumar Chaurasiya",
    specialty: "Physician & Pediatrician",
    qualifications: "B.A.M.S. (Ranchi), C.C.H. (Mumbai)",
    image: "/images/hos1.png",
    experience: "10+ years",
    bio: "Specialized in pediatric care and general medicine with extensive experience in treating children and adults."
  },
  {
    name: "Dr. Anita Chaurasiya",
    specialty: "Gynecologist and Obstetrician",
    qualifications: "B.H.M.S. (Nasik), C.C.H. & C.G.O. (Mumbai)",
    image: "/images/hosss.png",
    experience: "8+ years",
    bio: "Expert in women's health, pregnancy care, and gynecological treatments with a compassionate approach."
  },
];

// Services
const services = [
  { name: "Operations", icon: "🩺", description: "Surgical procedures with modern equipment" },
  { name: "Child Vaccination", icon: "💉", description: "Complete immunization schedule for children" },
  { name: "Health Checkups", icon: "❤️", description: "Comprehensive health assessments" },
  { name: "Laboratory Tests", icon: "🔬", description: "Accurate diagnostic testing" },
  { name: "Emergency Care", icon: "🚑", description: "24/7 emergency medical services" },
  { name: "Consultation", icon: "👨‍⚕️", description: "Expert medical advice and guidance" },
];

// Testimonials
const testimonials = [
  {
    text: "The doctors are very professional and caring. Booking appointments online is a breeze!",
    author: "Sita R.",
    rating: 5
  },
  {
    text: "Excellent healthcare facilities and very supportive staff. Highly recommended!",
    author: "Ramesh K.",
    rating: 5
  },
  {
    text: "I felt truly cared for during my visit. The team is amazing!",
    author: "Anjali P.",
    rating: 5
  },
  {
    text: "Very clean and organized clinic. Doctors explained everything patiently.",
    author: "Vikram S.",
    rating: 4
  },
  {
    text: "Quick appointments and friendly staff. Totally satisfied!",
    author: "Neha M.",
    rating: 5
  },
  {
    text: "Best pediatric care I have ever seen. Highly recommend Dr. Pankaj.",
    author: "Ritu S.",
    rating: 5
  },
];

// Gallery
const galleryImages = ["/images/a1.jpg", "/images/a2.jpg", "/images/a1.jpg"];

// Animation variants
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

export default function Home() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!autoPlay || !scrollRef.current || testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay]);

  // Scroll effect
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.firstChild;
      if (card) {
        const cardWidth = card.offsetWidth + 24; // card width + gap
        container.scrollTo({
          left: currentIndex * cardWidth,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    return "⭐".repeat(rating);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO Meta */}
      <Helmet>
        <title>Top Doctors in Hasanpura, Siwan | Madhuri Nidan Kendra</title>
        <meta
          name="description"
          content="Book appointments with top doctors in Hasanpura, Siwan at Madhuri Nidan Kendra. Expert physicians, gynecologists, pediatricians, and more."
        />
        <meta
          name="keywords"
          content="doctors in Hasanpura, top doctors Siwan, Madhuri Nidan Kendra, best clinic Hasanpura, pediatrician Siwan, gynecologist Hasanpura"
        />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Top Doctors in Hasanpura, Siwan | Madhuri Nidan Kendra"
        />
        <meta
          property="og:description"
          content="Book appointments with top doctors in Hasanpura, Siwan at Madhuri Nidan Kendra. Expert physicians, gynecologists, pediatricians, and more."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/clinic-social.png"
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Doctors in Hasanpura, Siwan | Madhuri Nidan Kendra"
        />
        <meta
          name="twitter:description"
          content="Book appointments with top doctors in Hasanpura, Siwan at Madhuri Nidan Kendra."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/images/clinic-social.png"
        />

        {/* Organization JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            name: "Madhuri Nidan Kendra",
            url: "https://yourdomain.com",
            logo: "https://yourdomain.com/images/health.png",
            sameAs: [
              "https://www.facebook.com/YourPage",
              "https://www.instagram.com/YourPage",
            ],
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
          })}
        </script>

        {/* FAQ JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you accept walk-ins?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, but we recommend booking an appointment for faster service.",
                },
              },
              {
                "@type": "Question",
                name: "What are your clinic timings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We are open from 9 AM – 9 PM, Monday to Saturday.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide emergency services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide urgent care and emergency consultation.",
                },
              },
            ],
          })}
        </script>

        {/* Doctors JSON-LD */}
        {doctors.map((doc, idx) => (
          <script key={idx} type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: doc.name,
              image: `https://yourdomain.com${doc.image}`,
              medicalSpecialty: doc.specialty,
              worksFor: {
                "@type": "MedicalOrganization",
                name: "Madhuri Nidan Kendra",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "opp. M. H. Nagar Police Station",
                addressLocality: "Hasanpura",
                addressRegion: "Siwan",
                postalCode: "841236",
                addressCountry: "IN",
              },
            })}
          </script>
        ))}
      </Helmet>

      {/* Hero Section */}
     <section className="relative min-h-[80vh] flex items-center justify-center bg-[url('/images/clinic.webp')] bg-cover bg-center overflow-hidden">
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-blue-700/20 backdrop-blur-sm"></div>
  
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
    <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
    <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full"></div>
  </div>

  <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      {/* Mobile Logo */}
      <motion.img
        src="/images/health.png"
        alt="Hospital Logo"
        className="w-20 h-20 mb-4 block md:hidden mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      {/* Brand Name Container */}
      <motion.div
        className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.img
          src="/images/health.png"
          alt="Madhuri Nidan Kendra"
          className="hidden md:block w-12 h-12 mr-4"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <span className="text-2xl md:text-3xl font-bold text-white">
         MADHURI NIDAN KENDRA
        </span>
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Your Health,
        <br />
        <span className="text-blue-200">Our Priority</span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Expert medical care with the best doctors in Hasanpura, Siwan. 
        Book appointments easily and experience compassionate healthcare.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
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
          <Link
            to="/doctors"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            👨‍⚕️ Meet Our Doctors
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.2 }}
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-white text-lg"
    >
      ↓
    </motion.div>
  </motion.div>
</section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: "👨‍⚕️",
                title: "Expert Doctors",
                desc: "Consult with certified and experienced medical professionals dedicated to your health."
              },
              {
                icon: "🏥",
                title: "Modern Facilities",
                desc: "State-of-the-art equipment for accurate diagnosis and effective treatment."
              },
              {
                icon: "📱",
                title: "Easy Booking",
                desc: "Book your appointments online in just a few clicks, anytime anywhere."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover="hover"
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services tailored to meet all your medical needs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                variants={fadeInUp}
                whileHover="hover"
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    {/* Doctors Section */}
<section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
        Meet Our Expert Doctors
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Highly qualified and experienced medical professionals dedicated to your well-being
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {doctors.map((doctor) => {
        // Create URL-friendly slug from doctor's name
        const slug = doctor.name.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, '');
        
        return (
          <motion.div
            key={doctor.name}
            variants={fadeInUp}
            whileHover="hover"
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => window.location.href = `/doctors/${slug}`}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 p-6 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-blue-200 shadow-lg"
                  />
                </motion.div>
              </div>
              <div className="md:w-3/5 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                  {doctor.name}
                </h3>
                <div className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full mb-3">
                  {doctor.experience} Experience
                </div>
                <p className="text-blue-600 font-semibold text-lg mb-3">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 mb-4">
                  {doctor.qualifications}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {doctor.bio}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/book"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book Consultation
                    </Link>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-center mt-12"
    >
      <Link
        to="/doctors"
        className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
      >
        View All Doctors →
      </Link>
    </motion.div>
  </div>
</section>

     {/* Testimonials Section */}
<section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4">
        Patient Stories
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
        Hear what our patients have to say about their experience at Madhuri Nidan Kendra
      </p>
    </motion.div>

    <div className="relative">
      {/* Testimonials Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-2 sm:px-4 py-4 snap-x snap-mandatory scroll-smooth"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            className="min-w-[85vw] xs:min-w-[300px] sm:min-w-[350px] md:min-w-[400px] lg:min-w-[500px] bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg flex-shrink-0 snap-start border border-blue-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="text-yellow-400 text-xl sm:text-2xl mb-3 sm:mb-4">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic">
              "{testimonial.text}"
            </p>
            <footer className="font-semibold text-gray-800 text-right text-base sm:text-lg">
              – {testimonial.author}
            </footer>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6 md:mt-8">
        <motion.button
          onClick={prevTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-sm md:text-base"
          aria-label="Previous testimonial"
        >
          ←
        </motion.button>
        <motion.button
          onClick={nextTestimonial}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-sm md:text-base"
          aria-label="Next testimonial"
        >
          →
        </motion.button>
      </div>

      {/* Dots Indicator for Mobile */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === idx ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                q: "Do you accept walk-ins?",
                a: "Yes, but we recommend booking an appointment for faster service and to ensure doctor availability."
              },
              {
                q: "What are your clinic timings?",
                a: "We are open from 9:00 AM to 9:00 PM, Monday to Sunday. Emergency services are available 24/7."
              },
              {
                q: "Do you provide emergency services?",
                a: "Yes, we provide urgent care and emergency consultation. Call +91 9939497429 for immediate assistance."
              },
              {
                q: "Who are the top doctors in Hasanpura, Siwan, Bihar?",
                a: "Madhuri Nidan Kendra has the best doctors specializing in general medicine, pediatrics, gynecology, and more in Hasanpura, Siwan, Bihar."
              },
              {
                q: "How can I book an appointment with a doctor in Hasanpura?",
                a: "You can book an appointment online through our website, call us at +91 9939497429, or visit our clinic directly."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Take Care of Your Health?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the best healthcare in Hasanpura, Siwan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  📞 Call: +91 9939497429
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}