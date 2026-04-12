import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/TTS1.png";
 
import { AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center mt-6 px-4"
    >
      <div className="w-full max-w-6xl relative">

        {/* 3D Container */}
        <div
          className="flex items-center justify-between px-8 py-4 
                     bg-white/90 backdrop-blur-md 
                     rounded-2xl border border-gray-200
                     shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
                     hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                     transition-all duration-300"
        >

          {/* Logo */}
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            {["Home", "Services", "Contact", "Careers", "About"].map((item) => (
              <a key={item} href="#" className="relative group">
                <span className="group-hover:text-black transition duration-200">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-medium 
                         shadow-[0_6px_15px_rgba(249,115,22,0.3)]
                         cursor-pointer
                         active:scale-95 transition-all duration-200">
              Sign In
            </button>

            <button className="px-5 bg-green-500 py-2.5 text-white rounded-xl font-medium border border-gray-300 
                         cursor-pointer active:scale-95 transition-all duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <Motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden absolute left-0 right-0 mt-3 px-6 py-4 
                 bg-white/90 backdrop-blur-md 
                 rounded-2xl border border-gray-200
                 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                 z-50"
            >

              <div className="flex flex-col gap-4 text-gray-600 font-medium">
                {["Home", "Services", "Contact", "Careers", "About"].map((item) => (
                  <a key={item} href="#" className="relative group">
                    <span className="group-hover:text-black transition duration-200">
                      {item}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <button className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-medium 
                   shadow-[0_6px_15px_rgba(249,115,22,0.3)]
                   cursor-pointer
                   active:scale-95 transition-all duration-200">
                  Sign In
                </button>

                <button className="px-5 bg-green-500 py-2.5 text-white rounded-xl font-medium border border-gray-300 
                   cursor-pointer active:scale-95 transition-all duration-200">
                  Sign Up
                </button>
              </div>

            </Motion.div>
          )}
        </AnimatePresence>

      </div>
    </Motion.nav>
  );
};

export default Navbar;