import React from "react";

const Trusted = () => {
  const logos = [
    "src/assets/TrustImage/logo1.svg",
    "src/assets/TrustImage/logo2.svg",
    "src/assets/TrustImage/logo3.svg",
 "src/assets/TrustImage/logo4.svg",
    "src/assets/TrustImage/logo5.svg",
    "src/assets/TrustImage/logo6.svg",
    "src/assets/TrustImage/logo7.svg",
    "src/assets/TrustImage/logo8.svg",
    "src/assets/TrustImage/logo9.svg",
  ];

  return (
    <div className="w-full py-16 px-10 bg-gray-50 overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex items-center gap-10">
        
        {/* LEFT TEXT */}
        <div className="min-w-[280px]">
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            Trusted by leading <br /> brands and startups
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative w-full overflow-hidden">
          
          <div
            className="flex w-max gap-12 items-center"
            style={{
              animation: "scroll 20s linear infinite",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-6 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>

        </div>

      </div>

      {/* INLINE KEYFRAMES */}
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