import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import "./index.css";
import DoctorAnita from "./pages/DoctorAnita";
import DoctorPankaj from "./pages/DoctorPankaj";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

// PublicRoute: redirects logged-in users to their dashboard
function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    const role = localStorage.getItem("role");
    switch (role) {
      case "admin":
        return <Navigate to="/admin/dashboard" replace />;
      case "doctor":
        return <Navigate to="/doctor/dashboard" replace />;
      case "patient":
        return <Navigate to="/patient/dashboard" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return children;
}

export default function App() {
  const location = useLocation();

  // Hide navbar/footer on these paths
  const hideNavFooter = ["/login", "/register"];
  const showNavFooter = !hideNavFooter.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      {/* Navbar */}
      {showNavFooter && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />

          {/* Protected Patient Routes */}
          <Route
            path="/book"
            element={
              <ProtectedRoute role="patient">
                <BookAppointment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          {/* Auth Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* Dashboards */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/dashboard"
            element={
              <ProtectedRoute role="doctor">
                <DoctorDashboard />
              </ProtectedRoute>
            }
          />
           <Route path="/doctors/dr-pankaj-kumar-chaurasiya" element={<DoctorPankaj />} />
  <Route path="/doctors/dr-anita-chaurasiya" element={<DoctorAnita />} />
          <Route
            path="/patient/dashboard"
            element={
              <ProtectedRoute role="patient">
                <PatientDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      {showNavFooter && <Footer />}
    </div>
  );
}
