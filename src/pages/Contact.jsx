import React, { useState } from "react";
import axiosInstance from "../axiosInstance";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    try {
      const res = await axiosInstance.post("/contact", formData);
      setResponseMsg(res.data.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setResponseMsg("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  const faqs = [
    {
      question: "How can I contact Madhuri Nidan Kendra?",
      answer: "You can contact us via phone, email, or by filling out the contact form on this page."
    },
    {
      question: "What is the clinic address?",
      answer: "Madhuri Nidan Kendra opp. M. H. Nagar Police Station, Hasanpura, Siwan - 841236."
    },
    {
      question: "What are your clinic timings?",
      answer: "We are open from 9 AM to 9 PM, Monday to Saturday."
    },
    {
      question: "Can I book an appointment online?",
      answer: "Yes, you can book an appointment online using the Book Appointment page."
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
        <title>Contact Us | Madhuri Nidan Kendra</title>
        <meta
          name="description"
          content="Contact Madhuri Nidan Kendra Clinic in Hasanpura, Siwan. Get in touch with our team via phone, email, or online contact form."
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
            "telephone": "+91 9939497429",
            "email": "support@healthcare.com",
            "sameAs": ["https://www.facebook.com/YourClinicPage", "https://www.instagram.com/YourClinicProfile"]
          })}
        </script>

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <motion.div
        className="max-w-4xl mx-auto p-6 mt-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.h1 className="text-3xl font-bold text-center mb-6" variants={fadeInUp}>
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4" variants={fadeInUp}>
            {["name", "email", "subject"].map((field) => (
              <div key={field}>
                <label className="block font-medium mb-1">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            ))}
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
            {responseMsg && (
              <motion.p className="text-center mt-2 text-sm text-green-600" variants={fadeInUp}>
                {responseMsg}
              </motion.p>
            )}

            {/* FAQ Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="mb-3 bg-gray-50 p-4 rounded shadow-sm"
                  variants={fadeInUp}
                >
                  <h3 className="font-medium text-blue-700">{faq.question}</h3>
                  <p className="mt-1 text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.form>

          {/* Contact Info + Google Map */}
          <motion.div className="bg-blue-50 rounded-lg p-6 space-y-4" variants={fadeInUp}>
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="text-gray-600">Reach out using the form, or connect with us below.</p>

            <p className="font-medium">📍 Address:</p>
            <p>Madhuri Nidan Kendra opp. M. H. Nagar Police Station, Hasanpura, Siwan - 841236</p>

            <p className="font-medium">📞 Phone:</p>
            <p>+91 9939497429</p>

            <p className="font-medium">📧 Email:</p>
            <p>support@healthcare.com</p>

            <div className="mt-4 w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Madhuri Nidan Kendra Location"
                src="https://www.google.com/maps?q=Madhuri+Nidan+Kendra+opp.+M.+H.+Nagar+Police+Station,+Hasanpura,+Siwan+-+841236&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
