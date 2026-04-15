import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Servicespage from "./pages/Servicespage"; // Import the Services page
import ServiceDetail from "./pages/ServiceDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import Careers from "./pages/CareerPage";
import About from "./pages/About";
import PolicyPage from "./pages/Policies";

function App() {
  return (
    <AuthProvider> {/* ✅ Wrap everything */}
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/service/:slug" element={<ServiceDetail/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/policies/:slug" element={<PolicyPage/>} /> 
           {/* Add this line */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;