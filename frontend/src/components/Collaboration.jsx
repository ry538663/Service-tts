import React from "react";

// import logos
import TTS from "../assets/Collaboration/TTS1.png";
import motorola from "../assets/Collaboration/motorola.png";
import salesforce from "../assets/Collaboration/salesforce.png";
import microsoft from "../assets/Collaboration/microsoft.png";
import google from "../assets/Collaboration/google.webp";
import Microsoft1 from "../assets/Collaboration/Microsoft1.avif";
import Tata from "../assets/Collaboration/Tata.avif";

export default function CollaborationsSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20 min-h-screen">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900">
          Collaborations With Leading Brands
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          We collaborate with a number of top-tier companies in reimagining the future of work.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
          
          {/* Top Image ONLY changed */}
          <div className="h-48">
            <img
              src={Tata}
              alt="collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5">
            <p className="text-xs text-gray-500 mb-2">Topic: Partnership</p>

            <h3 className="text-lg font-semibold text-gray-900 leading-snug min-h-[80px]">
              The Opportunity Loop: An Inside Look at How to Attract and Retain Top Talent
            </h3>

            <div className="border-t my-6"></div>

            {/* Bottom part UNCHANGED */}
            <div className="flex items-center gap-4">
              <img src={TTS} alt="TTS" className="h-12 object-contain" />
              <span className="text-lg font-semibold text-gray-900">TTS</span>

              <span className="text-gray-400 text-lg">+</span>

              <img src={motorola} alt="Motorola" className="h-9 object-contain" />
              <span className="text-lg font-semibold text-gray-900">TATA</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">

          {/* Top Image ONLY changed */}
          <div className="h-48">
            <img
              src={google}
              alt="collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5">
            <p className="text-xs text-gray-500 mb-2">Topic: Partnership</p>

            <h3 className="text-lg font-semibold text-gray-900 leading-snug min-h-[80px]">
              Industry Perspective: Salesforce on Team Alignment and Agile Talent
            </h3>

            <div className="border-t my-6"></div>

            {/* Bottom part UNCHANGED */}
            <div className="flex items-center gap-4">
              <img src={TTS} alt="TTS" className="h-12 object-contain" />
              <span className="text-lg font-semibold text-gray-900">TTS</span>

              <span className="text-gray-400 text-lg">+</span>

              <img src={salesforce} alt="Salesforce" className="h-9 object-contain" />
              <span className="text-lg font-semibold text-gray-900">Google</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">

          {/* Top Image ONLY changed */}
          <div className="h-48">
            <img
              src={Microsoft1}
              alt="collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5">
            <p className="text-xs text-gray-500 mb-2">Topic: Partnership</p>

            <h3 className="text-lg font-semibold text-gray-900 leading-snug min-h-[80px]">
              Call to Action: The On-demand Business Model
            </h3>

            <div className="border-t my-6"></div>

            {/* Bottom part UNCHANGED */}
            <div className="flex items-center gap-4">
              <img src={TTS} alt="TTS" className="h-12 object-contain" />
              <span className="text-lg font-semibold text-gray-900">TTS</span>

              <span className="text-gray-400 text-lg">+</span>

              <img src={microsoft} alt="Microsoft" className="h-10 object-contain" />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Ready to get started?</p>
        <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-2 rounded-md transition">
          Hire For Work
        </button>
      </div>

    </section>
  );
}