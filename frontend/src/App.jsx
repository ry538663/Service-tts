import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Servicespage from "./pages/Servicespage"; // Import the Services page
import ServiceDetail from "./pages/ServiceDetailPage";

function App() {
  return (
    <AuthProvider> {/* ✅ Wrap everything */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Servicespage />} />
          <Route path="/service/:slug" element={<ServiceDetail/>} />
           {/* Add this line */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;