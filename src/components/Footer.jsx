import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaEnvelope,
  FaStethoscope,
  FaHeart,
  FaArrowRight
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const location = useLocation();

  const footerLinks = {
    "Quick Links": [
      { name: "Home", path: "/", icon: "🏠" },
      { name: "Doctors", path: "/doctors", icon: "👨‍⚕️" },
      { name: "Book Appointment", path: "/book", icon: "📅" },
      { name: "Services", path: "/services", icon: "🩺" },
      { name: "About Us", path: "/about", icon: "ℹ️" },
      { name: "Contact", path: "/contact", icon: "📞" }
    ],
    "Services": [
      { name: "General Medicine", path: "/services#general" },
      { name: "Pediatric Care", path: "/services#pediatric" },
      { name: "Gynecology", path: "/services#gynecology" },
      { name: "Health Checkups", path: "/services#checkups" },
      { name: "Vaccination", path: "/services#vaccination" },
      { name: "Emergency Care", path: "/services#emergency" }
    ],
    "Doctors": [
      { name: "Dr. Pankaj Chaurasiya", path: "/doctors/dr-pankaj-kumar-chaurasiya" },
      { name: "Dr. Anita Chaurasiya", path: "/doctors/dr-anita-chaurasiya" },
      { name: "View All Doctors", path: "/doctors" }
    ]
  };

  const socialLinks = [
    { 
      icon: FaFacebook, 
      href: "https://facebook.com/madhurinidankendra", 
      color: "hover:text-blue-400",
      name: "Facebook"
    },
    { 
      icon: FaInstagram, 
      href: "https://instagram.com/madhurinidankendra", 
      color: "hover:text-pink-500",
      name: "Instagram"
    },
    { 
      icon: FaTwitter, 
      href: "https://twitter.com/madhurinidankendra", 
      color: "hover:text-blue-300",
      name: "Twitter"
    }
  ];

  const contactInfo = [
    { 
      icon: FaMapMarkerAlt, 
      text: "Opp. M.H. Nagar Police Station, Hasanpura, Siwan - 841236",
      link: "https://maps.google.com/?q=Madhuri+Nidan+Kendra+Hasanpura+Siwan"
    },
    { 
      icon: FaPhone, 
      text: "+91 9939497429",
      link: "tel:+919939497429"
    },
    { 
      icon: FaEnvelope, 
      text: "",
      link: ""
    },
    { 
      icon: FaClock, 
      text: "Mon - Sun: 24/7",
      link: null
    }
  ];

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
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
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Brand Section */}
            <motion.div 
              className="xl:col-span-2"
              variants={fadeInUp}
            >
              <Link to="/" className="inline-block mb-6">
                <motion.div 
                  className="flex items-center space-x-3 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/images/original.png"
                    alt="Madhuri Nidan Kendra"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      Madhuri Nidan Kendra
                    </h3>
                    <p className="text-blue-200 text-sm mt-1">Your Health, Our Priority</p>
                  </div>
                </motion.div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Providing exceptional healthcare services with experienced doctors 
                and modern facilities. Your trusted medical partner in Hasanpura, Siwan.
              </p>

              {/* Emergency Badge */}
              <motion.div 
                className="bg-red-600 rounded-lg p-4 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="flex items-center space-x-3">
                  <FaStethoscope className="text-xl" />
                  <div>
                    <p className="font-semibold">Emergency Services</p>
                    <a 
                      href="tel:+919939497429" 
                      className="text-white hover:text-blue-200 transition-colors text-lg font-bold"
                    >
                      +91 9939497429
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} backdrop-blur-sm hover:bg-white/20`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.name}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div 
                key={category}
                variants={fadeInUp}
              >
                <h4 className="text-lg font-semibold mb-6 text-blue-300 border-b border-blue-700 pb-2">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.name}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group ${
                          isActiveLink(link.path) ? 'text-blue-400 font-semibold' : ''
                        }`}
                      >
                        {link.icon && <span className="text-sm">{link.icon}</span>}
                        <span className="flex-1 group-hover:text-blue-300 transition-colors">
                          {link.name}
                        </span>
                        <motion.span
                          className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                          whileHover={{ x: 3 }}
                        >
                          <FaArrowRight className="text-xs" />
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Information */}
            <motion.div 
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold mb-6 text-blue-300 border-b border-blue-700 pb-2">
                Contact Info
              </h4>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3 group"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white mt-1 flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                      <item.icon className="text-sm" />
                    </div>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-gray-300 hover:text-white transition-colors duration-300 leading-relaxed"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300 leading-relaxed">
                        {item.text}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <motion.div 
                className="mt-6 space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/book"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book Appointment
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="tel:+919939497429"
                    className="block w-full border-2 border-blue-600 text-blue-400 text-center py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Call Now
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p 
                className="text-gray-400 text-sm text-center md:text-left"
                whileHover={{ scale: 1.02 }}
              >
                &copy; {new Date().getFullYear()} Madhuri Nidan Kendra. All rights reserved.
              </motion.p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaHeart className="text-red-500" />
                  <span>Made with care for your health</span>
                </motion.div>
                
                <div className="flex space-x-4">
                  <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}