import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Doctors Data
const doctors = [
  {
    name: "Dr. Pankaj Kumar Chaurasiya",
    specialty: "Physician & Pediatrician",
    qualifications: "B.A.M.S. (Ranchi), C.C.H. (Mumbai)",
    image: "/images/hos1.png",
  },
  {
    name: "Dr. Anita Chaurasiya",
    specialty: "Gynecologist and Obstetrician",
    qualifications: "B.H.M.S. (Nasik), C.C.H. & C.G.O. (Mumbai)",
    image: "/images/hosss.png",
  },
];

// Services
const services = [
  "Operations",
  "Child Vaccination",
  "Health Checkups",
  "Laboratory Tests",
];

// Testimonials
const testimonials = [
  {
    text: "The doctors are very professional and caring. Booking appointments online is a breeze!",
    author: "Sita R.",
  },
  {
    text: "Excellent healthcare facilities and very supportive staff. Highly recommended!",
    author: "Ramesh K.",
  },
  {
    text: "I felt truly cared for during my visit. The team is amazing!",
    author: "Anjali P.",
  },
  {
    text: "Very clean and organized clinic. Doctors explained everything patiently.",
    author: "Vikram S.",
  },
  {
    text: "Quick appointments and friendly staff. Totally satisfied!",
    author: "Neha M.",
  },
  {
    text: "Best pediatric care I have ever seen. Highly recommend Dr. Pankaj.",
    author: "Ritu S.",
  },
  {
    text: "I appreciated the professionalism and warmth. Great experience!",
    author: "Amit K.",
  },
  {
    text: "State-of-the-art facilities and supportive doctors. Feeling healthy again!",
    author: "Priya T.",
  },
  {
    text: "Excellent consultation and follow-up. Very happy with the service.",
    author: "Sanjay D.",
  },
  {
    text: "The staff made me feel comfortable and well-informed about my treatment.",
    author: "Kiran B.",
  },
  {
    text: "Amazing experience! Friendly doctors and smooth process.",
    author: "Alok C.",
  },
  {
    text: "Highly skilled doctors with great patient care. Would recommend to all.",
    author: "Shweta R.",
  },
];

// Gallery
const galleryImages = ["/images/a1.jpg", "/images/a2.jpg", "/images/a1.jpg"];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!scrollRef.current || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.firstChild?.offsetWidth + 24;
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative bg-blue-50 min-h-screen flex flex-col items-center text-center px-4">
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
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full py-6 flex flex-col items-center justify-center bg-[url('/images/clinic.webp')] bg-cover bg-center rounded-lg shadow-md relative"
      >
        <motion.img
          src="/images/health.png"
          alt="Hospital Logo"
          className="w-20 h-20 mb-4 block md:hidden relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring",
            stiffness: 120,
          }}
          className="flex items-center bg-white px-6 py-3 rounded-full mb-6 shadow-lg"
        >
          <motion.img
            src="/images/health.png"
            alt="Hospital Logo"
            className="hidden md:block w-12 h-12 mr-3"
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <span className="text-red-600 text-2xl md:text-3xl font-extrabold uppercase tracking-wider">
            Madhuri Nidan Kendra
          </span>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-4"
        >
          Welcome to Our Clinic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-xl backdrop-blur-xs text-white mb-6 max-w-2xl text-center"
        >
          Your health is our priority. Book appointments with top doctors
          easily.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/book"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </motion.div>

      {/* Highlights Section */}
      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            title: "Expert Doctors",
            desc: "Consult with certified and experienced medical professionals.",
          },
          {
            title: "Modern Facilities",
            desc: "State-of-the-art equipment for accurate diagnosis & treatment.",
          },
          {
            title: "Easy Booking",
            desc: "Book your appointments online in just a few clicks.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className="bg-white p-6 rounded shadow hover:shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Doctors Section */}
      <motion.div
        className="mt-16 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-8">
          Meet Our Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded shadow flex flex-col items-center"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-50 h-50 object-cover rounded-full mb-4 border-4 border-blue-200"
              />
              <h4 className="text-xl font-bold text-gray-800">{doctor.name}</h4>
              <p className="text-gray-600 mt-2">{doctor.qualifications}</p>
              <span className="mt-1 text-blue-700 font-medium">
                {doctor.specialty}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="mt-16 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded shadow text-center transition"
            >
              <h4 className="font-bold mb-2">{service}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.section
        className="mt-16 w-full max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-4">
          {[
            {
              q: "Do you accept walk-ins?",
              a: "Yes, but we recommend booking an appointment for faster service.",
            },
            {
              q: "What are your clinic timings?",
              a: "We are open from 9 AM – 9 PM, Monday to Saturday.",
            },
            {
              q: "Do you provide emergency services?",
              a: "Yes, we provide urgent care and emergency consultation.",
            },
            {
              q: "Who are the top doctors in Hasanpura, Siwan, Bihar?",
              a: "Madhuri Nidan Kendra has the best doctors specializing in general medicine, pediatrics, gynecology, and more in Hasanpura, Siwan, Bihar.",
            },
            {
              q: "How can I book an appointment with a doctor in Hasanpura?",
              a: "You can book an appointment online through our website or call +91 9939497429.",
            },
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white p-4 rounded shadow"
            >
              <dt className="font-bold text-gray-800">{faq.q}</dt>
              <dd className="text-gray-600 mt-2">{faq.a}</dd>
            </motion.div>
          ))}
        </dl>
      </motion.section>

      {/* Testimonials */}
    <motion.div
  className="mt-16 w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ staggerChildren: 0.2 }}
>
  <h2 className="text-3xl font-bold text-blue-800 mb-4 sm:mb-6 text-center">
    What Our Patients Say
  </h2>

  {/* Scrollable container */}
  <div
    ref={scrollRef}
    className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide px-2 sm:px-4 py-4 sm:py-6 snap-x snap-mandatory scroll-smooth"
  >
    {testimonials.map((t, idx) => (
      <motion.div
        key={idx}
        className="min-w-[70%] sm:min-w-[280px] md:min-w-[340px] bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all flex-shrink-0 snap-start border border-gray-100"
        variants={fadeInUp}
        whileHover={{ scale: 1.05 }}
      >
        <p className="italic text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
          “{t.text}”
        </p>
        <footer className="mt-3 sm:mt-4 font-semibold text-gray-900 text-right text-xs sm:text-sm md:text-base">
          – {t.author}
        </footer>
      </motion.div>
    ))}
  </div>

  
</motion.div>


      {/* Gallery */}
      <motion.div
        className="mt-16 w-full max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Clinic</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Clinic ${idx + 1}`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="rounded shadow object-cover w-full h-64"
            />
          ))}
        </div>
      </motion.div>

      {/* Contact / CTA */}
      <motion.div
        className="mt-16 bg-blue-600 text-white p-8 rounded shadow text-center w-full max-w-3xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p>
          Call us at{" "}
          <a href="tel:+919939497429" className="underline">
            +91 9939497429
          </a>
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-block bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}
