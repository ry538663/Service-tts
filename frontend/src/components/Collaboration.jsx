import React from "react";

// import logos
import TTS from "../assets/Collaboration/TTS1.png";
import motorola from "../assets/Collaboration/motorola.png";
import salesforce from "../assets/Collaboration/salesforce.png";
import microsoft from "../assets/Collaboration/microsoft.png";

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
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image</span>
          </div>

          <div className="p-5">
            <p className="text-xs text-gray-500 mb-2">Topic: Partnership</p>

            <h3 className="text-lg font-semibold text-gray-900 leading-snug min-h-[80px]">
              The Opportunity Loop: An Inside Look at How to Attract and Retain Top Talent
            </h3>

            <div className="border-t my-6"></div>

            <div className="flex items-center gap-4">
              <img src={TTS} alt="TTS" className="h-12 object-contain" />
              <span className="text-lg font-semibold text-gray-900">TTS</span>

              <span className="text-gray-400 text-lg">+</span>

              <img src={motorola} alt="Motorola" className="h-12 object-contain" />
              <span className="text-lg font-semibold text-gray-900">Motorola</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image</span>
          </div>

          <div className="p-5">
            <p className="text-xs text-gray-500 mb-2">Topic: Partnership</p>

            <h3 className="text-lg font-semibold text-gray-900 leading-snug min-h-[80px]">
              Industry Perspective: Salesforce on Team Alignment and Agile Talent
            </h3>

            <div className="border-t my-6 "></div>

            <div className="flex items-center gap-4">
              <img src={TTS} alt="TTS" className="h-12 object-contain" />
              <span className="text-lg font-semibold text-gray-900">TTS</span>

              <span className="text-gray-400 text-lg">+</span>

              <img src={salesforce} alt="Salesforce" className="h-12 object-contain" />
              <span className="text-lg font-semibold text-gray-900">Salesforce</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition bg-white">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image</span>
          </div>

          <div className="p-5">
            <p className="text-xs text-gray-500 mb-2">Topic: Partnership</p>

            <h3 className="text-lg font-semibold text-gray-900 leading-snug min-h-[80px]">
              Call to Action: The On-demand Business Model
            </h3>

            <div className="border-t my-6"></div>

            <div className="flex items-center gap-4">
              <img src={TTS} alt="TTS" className="h-12 object-contain" />
              <span className="text-lg font-semibold text-gray-900">TTS</span>

              <span className="text-gray-400 text-lg">+</span>

              <img src={microsoft} alt="Microsoft" className="h-12 object-contain" />
              <span className="text-lg font-semibold text-gray-900"></span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Ready to get started?</p>
        <a
          href="https://forms.gle/hkaXfDvSnStoC1xr9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-2 rounded-md transition"
        >
          Hire For Work
        </a>
      </div>

    </section>
  );
}