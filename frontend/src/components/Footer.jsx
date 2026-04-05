import React from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#1E2F6E] text-white px-6 md:px-16 py-14">
      
      {/* Top Grid */}
      <div className="grid md:grid-cols-4 gap-10">

        {/* Hire Talent */}
        <div>
          <h3 className="font-semibold mb-4 border-b border-white/20 pb-2">
            Hire Talent
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Hire Freelance Developers</li>
            <li>Hire Freelance Designers</li>
            <li>Hire Freelance Marketers</li>
            <li>Hire Freelance Management Consultants</li>
            <li>Hire Freelance Project Managers</li>
            <li>Hire Freelance Product Managers</li>
            <li>Hire Freelance Sales Experts</li>
          </ul>
        </div>

        {/* Featured Skills */}
        <div>
          <h3 className="font-semibold mb-4 border-b border-white/20 pb-2">
            Featured Skills
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Software Developers</li>
            <li>Web Developers</li>
            <li>Mobile App Developers</li>
            <li>iOS Developers</li>
            <li>AI Engineers</li>
            <li>Node.js Developers</li>
            <li>PHP Developers</li>
            <li>React.js Developers</li>
            <li>AngularJS Developers</li>
            <li>Python Developers</li>
          </ul>
        </div>

        {/* More Skills */}
        <div>
          <h3 className="font-semibold mb-4 border-b border-white/20 pb-2 invisible">
            Hidden
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Full-stack Developers</li>
            <li>Front-end Developers</li>
            <li>UX Designers</li>
            <li>UI Designers</li>
            <li>Web Designers</li>
            <li>Mobile App Designers</li>
            <li>Graphic Designers</li>
            <li>Brand Designers</li>
            <li>SEO Experts</li>
            <li>Social Media Content Creators</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-4 border-b border-white/20 pb-2">
            About
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Why TTS</li>
            <li>Contact Us</li>
            <li>Press Center</li>
            <li>Careers</li>
            <li>About Us</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/20 my-10"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">TTS</h2>
          <span className="text-white/70 text-sm">
            The World’s Top Talent, On Demand®
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition">
            <FaLinkedinIn />
          </div>
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition">
            <FaTwitter />
          </div>
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition">
            <FaFacebookF />
          </div>
          <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition">
            <FaInstagram />
          </div>
        </div>

      </div>

      {/* Bottom Links */}
      <div className="text-center text-sm text-white/70 mt-8 border-t border-white/20 pt-6">
        Copyright 2010 - 2026 TTS, LLC &nbsp; | &nbsp; Privacy Policy &nbsp; |
        &nbsp; Website Terms &nbsp; | &nbsp; Accessibility
      </div>

    </footer>
  );
};

export default Footer;