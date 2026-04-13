import React from "react";
import TTS1 from "../assets/TTS1.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E2F6E] text-white px-6 md:px-16 py-14">

      {/* Top Grid */}
      <div className="grid md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <img
            src={TTS1}
            alt="Company Logo"
            className="h-20 mb-4 object-contain"
          />

          <p className="text-sm text-white/80 leading-relaxed">
            TriUnity Tech helps businesses turn ideas into powerful digital solutions,
            including web, mobile, and AI-driven applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 md:ml-10 ml-0 border-b border-white/20 pb-2 w-fit">
            Quick Links
          </h3>

          <ul className="space-y-2 md:ml-10 ml-0  text-sm text-white/80">
            {[
              "Home Page",
              "Services Page",
              "About Us Page",
              "Careers Page",
              "Contact Page",
            ].map((item, index) => (
              <li key={index} className="relative w-fit cursor-pointer group">
                <span className="group-hover:text-white transition duration-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 border-b border-white/20 pb-2 w-fit">
            Services We Provide
          </h3>

          <ul className="space-y-2 text-sm text-white/80">
            {[
              "Full Stack Development",
              "Android App Development",
              "Shopify Development",
              "AI & Machine Learning",
              "Frontend Development",
              "Backend Development",
            ].map((item, index) => (
              <li key={index} className="relative w-fit cursor-pointer group">
                <span className="group-hover:text-white transition duration-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Policies */}
        <div>
          <h3 className="font-semibold mb-4 border-b border-white/20 pb-2 w-fit">
            Our Policies
          </h3>

          <ul className="space-y-2 text-sm text-white/80">
            {[
              "Privacy Policy",
              "Terms & Conditions",
              "Refund Policy",
              "Shipping & Delivery Policy",
              "Cancellation Policy",
            ].map((item, index) => (
              <li key={index} className="relative w-fit cursor-pointer group">
                <span className="group-hover:text-white transition duration-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[0.5px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/20 my-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="flex items-center gap-4">
          <img
            src={TTS1}
            alt="TTS Logo"
            className="h-8 object-contain"
          />
          <span className="text-white/70 text-sm">
            The World’s Top Talent, On Demand®
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">

          <a
            href="https://www.linkedin.com/company/triunity-tech-solution/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/triunitytechsolutions?igsh=dHNxc2RkOGU5M3lm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>

        </div>

      </div> {/* ✅ FIXED */}

      {/* Bottom Links */}
      <div className="text-center text-sm text-white/70 mt-8 border-t border-white/20 pt-6">
        © 2026 TriUnity Tech. All rights reserved. &nbsp; | &nbsp;
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        &nbsp; | &nbsp;
        <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
      </div>

    </footer>
  );
};

export default Footer;