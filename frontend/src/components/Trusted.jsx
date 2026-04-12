import React from "react";

import logo1 from "../assets/TrustImage/logo1.svg";
import logo2 from "../assets/TrustImage/logo2.svg";
import logo3 from "../assets/TrustImage/logo3.svg";
import logo4 from "../assets/TrustImage/logo4.svg";
import logo5 from "../assets/TrustImage/logo5.svg";
import logo6 from "../assets/TrustImage/logo6.svg";
import logo7 from "../assets/TrustImage/logo7.svg";
import logo8 from "../assets/TrustImage/logo8.svg";
import logo9 from "../assets/TrustImage/logo9.svg";

const Trusted = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
  ];

  return (
    <div className="w-full my-15 py-12 md:py-16 px-4 sm:px-6 lg:px-10 bg-gray-50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        
        {/* LEFT TEXT */}
        <div className="min-w-0 md:min-w-[280px] text-center md:text-left">
          <p className="text-xs sm:text-sm text-gray-500 tracking-widest uppercase leading-relaxed">
            Trusted by leading <br className="hidden md:block" />
            brands and startups
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative w-full overflow-hidden">
          
          <div
            className="flex w-max gap-8 sm:gap-10 md:gap-12 items-center"
            style={{
              animation: "scroll 20s linear infinite",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-5 sm:h-6 md:h-6 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>

        </div>

      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

    </div>
  );
};

export default Trusted;