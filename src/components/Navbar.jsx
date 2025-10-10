import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Get user info from localStorage
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <img
              src="/images/original.png"
              alt="Madhuri Nidan Kendra"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="font-bold text-lg sm:text-xl md:text-2xl text-blue-700 whitespace-nowrap transition-colors duration-300">
              Madhuri Nidan Kendra
            </span>
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium px-2 py-1 transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium px-2 py-1 transform hover:scale-105"
            >
              Doctors
            </Link>
            <Link
              to="/book"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium px-2 py-1 transform hover:scale-105"
            >
              Appointment
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium px-2 py-1 transform hover:scale-105"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium px-2 py-1 transform hover:scale-105"
            >
              About
            </Link>
            <Link
              to="/account"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium px-2 py-1 transform hover:scale-105"
            >
              My Account
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-sm md:text-base transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium text-sm md:text-base transform hover:scale-105"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                {role === "admin" && (
                  <Link
                    to="/admin/dashboard"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium text-sm md:text-base transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Admin
                  </Link>
                )}
                {role === "doctor" && (
                  <Link
                    to="/doctor/dashboard"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium text-sm md:text-base transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Doctor
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 font-medium text-sm md:text-base transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Tablet Menu - Hidden on mobile and desktop */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-sm transform hover:scale-105"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="border border-blue-600 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 font-medium text-sm transform hover:scale-105"
                >
                  Register
                </Link>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                {role === "admin" && (
                  <Link
                    to="/admin/dashboard"
                    className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium text-sm transform hover:scale-105"
                  >
                    Admin
                  </Link>
                )}
                {role === "doctor" && (
                  <Link
                    to="/doctor/dashboard"
                    className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium text-sm transform hover:scale-105"
                  >
                    Doctor
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 font-medium text-sm transform hover:scale-105"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Tablet Navigation - Hidden on mobile and desktop */}
        <div className="hidden md:flex lg:hidden justify-center border-t border-gray-200 pt-3 pb-2">
          <div className="flex space-x-4 overflow-x-auto">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium text-sm whitespace-nowrap px-2 py-1 transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/doctors"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium text-sm whitespace-nowrap px-2 py-1 transform hover:scale-105"
            >
              Doctors
            </Link>
            <Link
              to="/book"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium text-sm whitespace-nowrap px-2 py-1 transform hover:scale-105"
            >
              Appointment
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium text-sm whitespace-nowrap px-2 py-1 transform hover:scale-105"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium text-sm whitespace-nowrap px-2 py-1 transform hover:scale-105"
            >
              About
            </Link>
            <Link
              to="/account"
              className="text-gray-700 hover:text-blue-700 transition-all duration-300 font-medium text-sm whitespace-nowrap px-2 py-1 transform hover:scale-105"
            >
              My Account
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation and Image */}
      <div
        className={`
        lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 z-40
        transform transition-all duration-500 ease-in-out
        ${
          isOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }
      `}
      >
        {/* Overlay */}
        <div
          className={`
            absolute inset-0 bg-black transition-opacity duration-500
            ${isOpen ? "opacity-30" : "opacity-0"}
          `}
          onClick={closeMobileMenu}
        />

        {/* Menu Content with Image Sidebar */}
        <div
          className={`
          relative bg-white h-full ml-auto shadow-2xl flex
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          w-full max-w-sm
        `}
        >
          {/* Image Sidebar */}
          <div className="w-1/3 bg-gradient-to-b from-blue-600 to-blue-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-white"></div>

            {/* Medical-themed Image or Icon */}
            <div className="flex flex-col items-center justify-center h-full p-4 text-white">
              <div
                className={`
                transform transition-all duration-700 delay-300
                ${
                  isOpen
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-8 opacity-0 scale-90"
                }
              `}
              >
                <img
                  src="/images/original.png" // You can replace this with a medical-themed image
                  alt="Madhuri Nidan Kendra"
                  className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full bg-white p-2 shadow-lg mb-4"
                />
              </div>

              <div
                className={`
                text-center transition-all duration-700 delay-500
                ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
              >
                <h3 className="font-bold text-lg mb-2">Madhuri Nidan Kendra</h3>
                <p className="text-blue-100 text-sm opacity-90">
                  Your Health, Our Priority
                </p>
              </div>

              {/* Decorative Medical Icons */}
              <div
                className={`
                absolute bottom-6 left-0 right-0 flex justify-center space-x-4
                transition-all duration-700 delay-700
                ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
              >
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs">🏥</span>
                </div>
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs">❤️</span>
                </div>
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-xs">⚕️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Content */}
          <div className="w-2/3 flex flex-col">
            {/* Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-700">Menu</h3>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:rotate-90"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Scrollable Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-4 pt-4 pb-6 space-y-1">
                {/* Navigation Links with Staggered Animation */}
                {[
                  { to: "/", label: "Home", icon: "🏠" },
                  { to: "/doctors", label: "Doctors", icon: "👨‍⚕️" },
                  { to: "/book", label: "Appointment", icon: "📅" },
                  { to: "/contact", label: "Contact", icon: "📞" },
                  { to: "/about", label: "About", icon: "ℹ️" },
                  { to: "/account", label: "My Account", icon: "👤" },
                ].map((link, index) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`
                      flex items-center space-x-3 py-3 px-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg 
                      transition-all duration-500 font-medium border border-transparent hover:border-blue-200
                      transform hover:translate-x-1
                      ${
                        isOpen
                          ? `translate-x-0 opacity-100`
                          : "translate-x-8 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                    }}
                    onClick={closeMobileMenu}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="flex-1">{link.label}</span>
                    <span className="text-blue-400 transform transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* Auth Buttons with Staggered Animation */}
              <div className="px-4 pb-6">
                <div className="pt-4 border-t border-gray-200">
                  {!token ? (
                    <div className="flex flex-col space-y-3">
                      <Link
                        to="/login"
                        className={`
                          block py-3 bg-blue-600 text-white rounded-lg text-center font-medium 
                          hover:bg-blue-700 transition-all duration-500 transform hover:scale-105
                          shadow-md hover:shadow-lg
                          ${
                            isOpen
                              ? `translate-x-0 opacity-100`
                              : "translate-x-8 opacity-0"
                          }
                        `}
                        style={{
                          transitionDelay: isOpen ? "600ms" : "0ms",
                        }}
                        onClick={closeMobileMenu}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className={`
                          block py-3 border-2 border-blue-600 text-blue-600 rounded-lg text-center 
                          font-medium hover:bg-blue-50 transition-all duration-500 transform hover:scale-105
                          ${
                            isOpen
                              ? `translate-x-0 opacity-100`
                              : "translate-x-8 opacity-0"
                          }
                        `}
                        style={{
                          transitionDelay: isOpen ? "700ms" : "0ms",
                        }}
                        onClick={closeMobileMenu}
                      >
                        Register
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-3">
                      {role === "admin" && (
                        <Link
                          to="/admin/dashboard"
                          className={`
                            flex items-center justify-center space-x-2 py-3 bg-green-600 text-white rounded-lg 
                            font-medium hover:bg-green-700 transition-all duration-500 transform hover:scale-105
                            shadow-md hover:shadow-lg
                            ${
                              isOpen
                                ? `translate-x-0 opacity-100`
                                : "translate-x-8 opacity-0"
                            }
                          `}
                          style={{
                            transitionDelay: isOpen ? "600ms" : "0ms",
                          }}
                          onClick={closeMobileMenu}
                        >
                          <span>⚙️</span>
                          <span>Admin</span>
                        </Link>
                      )}
                      {role === "doctor" && (
                        <Link
                          to="/doctor/dashboard"
                          className={`
                            flex items-center justify-center space-x-2 py-3 bg-green-600 text-white rounded-lg 
                            font-medium hover:bg-green-700 transition-all duration-500 transform hover:scale-105
                            shadow-md hover:shadow-lg
                            ${
                              isOpen
                                ? `translate-x-0 opacity-100`
                                : "translate-x-8 opacity-0"
                            }
                          `}
                          style={{
                            transitionDelay: isOpen ? "600ms" : "0ms",
                          }}
                          onClick={closeMobileMenu}
                        >
                          <span>👨‍⚕️</span>
                          <span>Doctor</span>
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          handleLogout();
                          closeMobileMenu();
                        }}
                        className={`
                          flex items-center justify-center space-x-2 w-full py-3 bg-red-600 text-white rounded-lg 
                          font-medium hover:bg-red-700 transition-all duration-500 transform hover:scale-105
                          shadow-md hover:shadow-lg
                          ${
                            isOpen
                              ? `translate-x-0 opacity-100`
                              : "translate-x-8 opacity-0"
                          }
                        `}
                        style={{
                          transitionDelay: isOpen
                            ? `${role ? "700ms" : "800ms"}`
                            : "0ms",
                        }}
                      >
                        <span>🚪</span>
                        <span>Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
