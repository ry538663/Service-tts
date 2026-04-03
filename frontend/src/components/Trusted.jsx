import React from "react";

const Trusted = () => {
  return (
    <div className="w-full py-16 px-10 bg-gray-50">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <p className="text-sm text-gray-500 tracking-widest uppercase mb-10">
          Trusted by leading brands and startups
        </p>

        {/* Logos Row */}
        <div className="flex items-center justify-between flex-wrap gap-8 opacity-70">

          <img src="/logos/logo1.png" alt="brand" className="h-6 object-contain grayscale hover:grayscale-0 transition" />
          <img src="/logos/logo2.png" alt="brand" className="h-6 object-contain grayscale hover:grayscale-0 transition" />
          <img src="/logos/logo3.png" alt="brand" className="h-6 object-contain grayscale hover:grayscale-0 transition" />
          <img src="/logos/logo4.png" alt="brand" className="h-6 object-contain grayscale hover:grayscale-0 transition" />
          <img src="/logos/logo5.png" alt="brand" className="h-6 object-contain grayscale hover:grayscale-0 transition" />
          <img src="/logos/logo6.png" alt="brand" className="h-6 object-contain grayscale hover:grayscale-0 transition" />

        </div>

      </div>
    </div>
  );
};

export default Trusted;