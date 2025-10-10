import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return navigate("/login");
    
    axiosInstance
      .get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
        navigate("/login");
      });
  }, [navigate, token]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    try {
      const res = await axiosInstance.post("/contact", formData);
      setResponseMsg(res.data.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setResponseMsg("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
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

  const faqs = [
    {
      question: "How can I contact Madhuri Nidan Kendra?",
      answer: "You can contact us via phone at +91 9939497429, or by filling out the contact form on this page. We're also available for in-person visits at our clinic."
    },
    {
      question: "What is the clinic address?",
      answer: "Madhuri Nidan Kendra is located opposite M. H. Nagar Police Station, Hasanpura, Siwan - 841236, Bihar. We're easily accessible from all parts of the city."
    },
    {
      question: "What are your clinic timings?",
      answer: "We are open from 9:00 AM to 9:00 PM, Monday to Sunday. Please call ahead for Sunday appointments."
    },
    {
      question: "Can I book an appointment online?",
      answer: "Yes, you can book appointments online through our website. Visit the 'Book Appointment' page to schedule your visit conveniently from home."
    },
    {
      question: "Do you handle emergency cases?",
      answer: "Yes, we handle emergency medical cases. For emergencies outside regular hours, please call +91 9939497429 directly for immediate assistance."
    },
    {
      question: "What medical services do you provide?",
      answer: "We provide comprehensive healthcare services including general medicine, pediatric care, gynecology, obstetrics, and various diagnostic services with modern medical equipment."
    }
  ];

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Our Clinic",
      details: "opp. M. H. Nagar Police Station, Hasanpura, Siwan - 841236",
      description: "Easy to find location with ample parking space"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+91 9939497429",
      description: "Available for appointments and emergencies"
    },
    {
      icon: "📧",
      title: "Email Us",
      details: "support@healthcare.com",
      description: "We respond within 24 hours"
    },
    {
      icon: "🕒",
      title: "Opening Hours",
      details: "9:00 AM - 9:00 PM",
      description: "Monday to Sunday"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Madhuri Nidan Kendra - Hasanpura, Siwan</title>
        <meta
          name="description"
          content="Contact Madhuri Nidan Kendra Clinic in Hasanpura, Siwan. Get in touch via phone +91 9939497429, email, or online contact form. Find our location and hours."
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />

        {/* Structured Data for Clinic + FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Madhuri Nidan Kendra",
            "image": "https://yourdomain.com/images/health.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "opp. M. H. Nagar Police Station",
              "addressLocality": "Hasanpura",
              "addressRegion": "Siwan",
              "postalCode": "841236",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "26.2200",
              "longitude": "84.3567"
            },
            "telephone": "+91 9939497429",
            "email": "support@healthcare.com",
            "openingHours": [
              "Mo-Sa 09:00-21:00"
            ],
            "sameAs": [
              "https://www.facebook.com/YourClinicPage", 
              "https://www.instagram.com/YourClinicProfile"
            ]
          })}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get in touch with Madhuri Nidan Kendra. We're here to help with all your healthcare needs.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Reach out to us for appointments, inquiries, or emergency medical assistance. 
                Our team is ready to provide you with the best healthcare support.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="text-2xl text-blue-600 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                      <p className="text-gray-700 font-medium">{item.details}</p>
                      <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              variants={fadeInUp}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h3>
                <p className="text-gray-600 mb-4">
                  Find us easily at our convenient location in Hasanpura, Siwan.
                </p>
              </div>
              <div className="w-full h-64 sm:h-80 lg:h-96">
                <iframe
                  title="Madhuri Nidan Kendra Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.4567890123456!2d84.3567!3d26.2200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEzJzEyLjAiTiA4NMKwMjEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-2xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form & FAQ */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            {/* Contact Form */}
           <motion.div
  className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
  variants={fadeInUp}
>
  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
    Send us a Message
  </h2>
  
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Name Field */}
      <motion.div
        className="space-y-2"
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <label className="block font-semibold text-gray-700">
          Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          placeholder="Enter your full name"
        />
      </motion.div>

      {/* Email Field - Auto-populated and disabled */}
      <motion.div
        className="space-y-2"
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <label className="block font-semibold text-gray-700">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={user?.email || formData.email}
          onChange={handleChange}
          required
          disabled={!!user?.email}
          className={`w-full border border-gray-300 rounded-xl px-4 py-3 transition-all duration-300 ${
            user?.email 
              ? 'bg-gray-100 text-gray-600 cursor-not-allowed' 
              : 'focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
          placeholder={user?.email ? "Your registered email" : "Enter your email"}
        />
        {user?.email && (
          <p className="text-sm text-blue-600 mt-1">
            Using your registered email address
          </p>
        )}
      </motion.div>
    </div>

    <motion.div
      className="space-y-2"
      whileFocus={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <label className="block font-semibold text-gray-700">Subject *</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        placeholder="What is this regarding?"
      />
    </motion.div>

    <motion.div
      className="space-y-2"
      whileFocus={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <label className="block font-semibold text-gray-700">Message *</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="6"
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
        placeholder="Please describe your inquiry in detail..."
      />
    </motion.div>

    <motion.button
      type="submit"
      disabled={loading}
      whileHover={{ scale: loading ? 1 : 1.02 }}
      whileTap={{ scale: loading ? 1 : 0.98 }}
      className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <motion.span
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          Sending Message...
        </span>
      ) : (
        "Send Message"
      )}
    </motion.button>

    <AnimatePresence>
      {responseMsg && (
        <motion.p
          className={`text-center mt-4 p-3 rounded-lg font-medium ${
            responseMsg.includes("Failed") 
              ? "bg-red-100 text-red-700" 
              : "bg-green-100 text-green-700"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {responseMsg}
        </motion.p>
      )}
    </AnimatePresence>
  </form>
</motion.div>

            {/* FAQ Section */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 lg:p-8"
              variants={fadeInUp}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 lg:p-6 bg-white hover:bg-blue-50 transition-colors duration-200 flex justify-between items-center"
                    >
                      <span className="font-semibold text-gray-800 text-sm lg:text-base pr-4">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: activeFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-blue-600 text-lg flex-shrink-0"
                      >
                        ▼
                      </motion.span>
                    </button>
                    
                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 lg:p-6 pt-0">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}