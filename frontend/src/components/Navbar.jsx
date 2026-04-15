import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/TTS1.png";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

let lastScrollY = window.scrollY;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/careers" },
    { name: "About", path: "/about" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling DOWN
        setShowNav(false);
      } else {
        // scrolling UP
        setShowNav(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: showNav ? 0 : -100
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full flex justify-center mt-6 px-4 fixed top-0 left-0 z-50"
    >
      <div className="w-full max-w-6xl relative">

        {/* Container */}
        <div className="flex items-center justify-between px-8 py-4 
          bg-white/90 backdrop-blur-md 
          rounded-2xl border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
          hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]
          transition-all duration-300">

          {/* Logo → Home */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path} className="relative group">
                {({ isActive }) => (
                  <>
                    <span className="group-hover:text-black transition duration-200">
                      {item.name}
                    </span>

                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink to="/">
              <button className="bg-orange-500 cursor-pointer text-white px-5 py-2.5 rounded-xl font-medium 
                shadow-[0_6px_15px_rgba(249,115,22,0.3)]
                active:scale-95 transition-all duration-200">
                Sign In
              </button>
            </NavLink>

            <NavLink to="/">
              <button className="px-5 cursor-pointer bg-green-500 py-2.5 text-white rounded-xl font-medium border border-gray-300 
                active:scale-95 transition-all duration-200">
                Sign Up
              </button>
            </NavLink>
          </div>

          {/* Mobile Toggle */}
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
              transition={{ duration: 0.25 }}
              className="md:hidden absolute left-0 right-0 mt-3 px-6 py-4 
                bg-white/90 backdrop-blur-md 
                rounded-2xl border border-gray-200
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                z-50"
            >
              <div className="flex flex-col gap-4 text-gray-600 font-medium">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive ? "text-black font-semibold" : ""
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  <button className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-medium">
                    Sign In
                  </button>
                </NavLink>

                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  <button className="px-5 bg-green-500 py-2.5 text-white rounded-xl font-medium">
                    Sign Up
                  </button>
                </NavLink>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>

      </div>
    </Motion.nav>
  );
};

export default Navbar;