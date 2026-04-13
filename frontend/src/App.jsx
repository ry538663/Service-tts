import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={} /> */}
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/careers" element={<div>Careers Page</div>} /> */}
        {/* <Route path="/about" element={<div>About Page</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;