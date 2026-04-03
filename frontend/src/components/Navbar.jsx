import React from "react";
import { motion as Motion } from "framer-motion";
import logo from "../assets/hero.png";

const Navbar = () => {
  return (
    <Motion.nav
      initial={{ opacity: 0, y: -20 }}   // 👈 no horizontal shift
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center mt-6 px-4"
    >
      <div className="w-full max-w-7xl">
        
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
            <img src={logo} alt="logo" className="h-8 w-auto object-contain" />
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            {["Home", "Services", "Contact", "Careers", "Dashboard"].map((item) => (
              <a key={item} href="#" className="relative group">
                <span className="group-hover:text-black transition duration-200">
                  {item}
                </span>

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-medium 
                         shadow-[0_6px_15px_rgba(249,115,22,0.3)]
                         hover:shadow-[0_10px_20px_rgba(249,115,22,0.4)]
                         active:scale-95 transition-all duration-200"
            >
              Sign In
            </button>

            <button
              className="px-5 py-2.5 rounded-xl font-medium border border-gray-300 
                         hover:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </Motion.nav>
  );
};

export default Navbar;