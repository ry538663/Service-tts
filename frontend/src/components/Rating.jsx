import React from "react";

export default function ClientSatisfaction() {
  return (
    <section className="bg-gray-50 py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-semibold text-gray-800">
          Our Clients’ Satisfaction is Our Top Priority
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          We have a reputation for helping clients around the world find success
          on their most important projects.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-6"></div>

        {/* Stats */}
        <div className="flex justify-center gap-12 text-center mb-6">
          <div>
            <p className="text-xl font-semibold text-gray-800">140+</p>
            <p className="text-gray-500 text-sm">Countries Served</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">30,000+</p>
            <p className="text-gray-500 text-sm">Clients Served</p>
          </div>
        </div>

        {/* Rating */}
        <p className="text-gray-600 text-sm mb-10">
          Clients rate Toptal {" "}
          <span className="text-yellow-400">★★★★★</span> 4.9 out of 5 on average
          based on 4,000+ reviews.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-white shadow-sm border rounded-md p-6">
            <p className="text-blue-500 text-2xl mb-2">“</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              I have been working with Toptal. I have been working with Toptal
              engineers for several years now. They have consistently taken very
              professional, highly productive, great team players, good
              communicators, and willing to go above and beyond.
            </p>
            <p className="text-yellow-400 mt-4">★★★★★</p>

            <div className="mt-6">
              <p className="font-semibold text-sm">Ian Sisk-Rees</p>
              <p className="text-gray-500 text-xs mb-2">Co-Founder</p>
              <div className="bg-gray-200 h-6 w-20 flex items-center justify-center text-xs">
                LOGO
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-sm border rounded-md p-6">
            <p className="text-blue-500 text-2xl mb-2">“</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Toptal is my go-to source. Toptal is my go-to source to find highly
              vetted talent with strong expertise and the ability to quickly
              ramp up.
            </p>
            <p className="text-yellow-400 mt-4">★★★★★</p>

            <div className="mt-6">
              <p className="font-semibold text-sm">Trent Capetta</p>
              <p className="text-gray-500 text-xs mb-2">
                Co-Founder & CTO
              </p>
              <div className="bg-gray-200 h-6 w-20 flex items-center justify-center text-xs">
                LOGO
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-sm border rounded-md p-6">
            <p className="text-blue-500 text-2xl mb-2">“</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Creating an app for the game with the pressure on and tight
              deadlines was made possible with Toptal.
            </p>
            <p className="text-yellow-400 mt-4">★★★★★</p>

            <div className="mt-6">
              <p className="font-semibold text-sm">Conor Kearney</p>
              <p className="text-gray-500 text-xs mb-2">
                Director of Operations
              </p>
              <div className="bg-gray-200 h-6 w-20 flex items-center justify-center text-xs">
                LOGO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}