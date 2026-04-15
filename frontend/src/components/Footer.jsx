import React from "react";
import TTS1 from "../assets/TTS1.png";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";


const Footer = () => {

  const servicesLinks = [
    { name: "All Services", path: "/services" },
    { name: "Website Services", path: "/service/website-services" },
    { name: "App Services", path: "/service/app-services" },
    { name: "AI & ML Services", path: "/service/ai-machine-learning" },
    { name: "Content Writing", path: "/service/content-writing" },
  ];
  const pageLinks = [
    { name: "Home Page", path: "/" },
    { name: "Services Page", path: "/services" },
    { name: "About Us Page", path: "/about" },
    { name: "Careers Page", path: "/careers" },
    { name: "Contact Page", path: "/contact" },
  ];
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
            TriUnity Tech Solutions helps businesses turn ideas into powerful digital solutions,
            including web, mobile, and AI-driven applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 md:ml-10 ml-0 border-b border-white/20 pb-2 w-fit">
            Quick Links
          </h3>

          <ul className="space-y-2 md:ml-10 ml-0 text-sm text-white/80">
            {pageLinks.map((item, index) => (
              <li key={index} className="relative w-fit cursor-pointer group">
                <NavLink to={item.path}>
                  {({ isActive }) => (
                    <>
                      <span
                        className={`transition duration-300 ${isActive ? "text-white" : "group-hover:text-white"
                          }`}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`absolute left-0 -bottom-1 h-[0.5px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      ></span>
                    </>
                  )}
                </NavLink>
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
            {servicesLinks.map((item, index) => (
              <li key={index} className="relative w-fit cursor-pointer group">
                <NavLink to={item.path}>
                  {({ isActive }) => (
                    <>
                      <span
                        className={`transition duration-300 ${isActive ? "text-white" : "group-hover:text-white"
                          }`}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`absolute left-0 -bottom-1 h-[0.5px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Policies */}
        <div>
          <h3 className="font-semibold mb-4 border-b border-white/20 pb-2 w-fit">
            Our Policies
          </h3>

          <ul className="space-y-2 text-sm">
            {[
              { name: "Privacy Policy", slug: "privacy-policy" },
              { name: "Refund Policy", slug: "refund-policy" },
              { name: "Delivery Policy", slug: "shipping-policy" },
              { name: "Cancellation Policy", slug: "cancellation-policy" },
              { name: "Terms & Conditions", slug: "terms-and-conditions" },
            ].map((item, index) => (
              <li key={index} className="w-fit">
                <NavLink
                  to={`/policies/${item.slug}`}
                  className={({ isActive }) =>
                    `relative inline-block transition duration-300 ${isActive ? "text-white font-semibold" : "text-white/80"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      {/* underline */}
                      <span
                        className={`absolute left-0 -bottom-1 h-[0.5px] bg-white transition-all duration-300
                ${isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                          }`}
                      ></span>
                    </>
                  )}
                </NavLink>
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
        © 2026 TriUnity Tech Solutions. All rights reserved. &nbsp; | &nbsp;
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        &nbsp; | &nbsp;
        <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
      </div>

    </footer>
  );
};

export default Footer;