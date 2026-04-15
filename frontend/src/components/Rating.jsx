import React from "react";
import logo1 from "../assets/RatingImage/logo1.svg";
import logo2 from "../assets/RatingImage/logo2.svg";
import logo3 from "../assets/RatingImage/logo3.svg";
import { Quote } from "lucide-react";


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
          Clients rate TTS {" "}
          <span className="text-yellow-400">★★★★★</span> 4.9 out of 5 on average
          based on 4,000+ reviews.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="bg-white shadow-sm border rounded-md p-6">
            <Quote size={25} strokeWidth={2} className="text-blue-600 scale-x-[-1] mb-2 rotate-180"  />
            <p className="text-gray-600 text-sm leading-relaxed">
              We’ve been working with TriUnity Tech for quite some time now, and the experience has been outstanding. Their developers consistently deliver high-quality work, communicate effectively, and integrate seamlessly with our team.
            </p>
            <p className="text-yellow-400 mt-4">★★★★★</p>

            <div className="mt-6">
              <p className="font-semibold text-sm">Rohit Singh</p>
              <p className="text-gray-500 text-xs mb-2">Project Manager</p>
              <img
                src={logo1}
                alt="company logo"
                className="h-6 w-20 object-contain"/>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-sm border rounded-md p-6">
            <Quote size={25} strokeWidth={2} className="text-blue-600 scale-x-[-1] mb-2 rotate-180"  />
            <p className="text-gray-600 text-sm leading-relaxed">
              TriUnity Tech understood our requirements clearly and delivered a complete solution exactly as promised. Their ability to execute quickly and efficiently, combined with strong communication and technical expertise, truly impressed us.            </p>
            <p className="text-yellow-400 mt-4">★★★★★</p>

            <div className="mt-6">
              <p className="font-semibold text-sm">Simran Kaur</p>
              <p className="text-gray-500 text-xs mb-2">
                Entrepreneur
              </p>
              <img
                src={logo2}
                alt="company logo"
                className="h-6 w-20 object-contain"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-sm border rounded-md p-6">
            <Quote size={25} strokeWidth={2} className="text-blue-600 scale-x-[-1] mb-2 rotate-180"  />
            <p className="text-gray-600 text-sm leading-relaxed">
              Working with TriUnity Tech was effortless. We shared our idea, and they turned it into a fully functional product with great attention to detail and a strong focus on quality, ensuring everything was delivered exactly as expected.     </p>
            <p className="text-yellow-400 mt-4">★★★★★</p>

            <div className="mt-6">
              <p className="font-semibold text-sm">Vikas Jain</p>
              <p className="text-gray-500 text-xs mb-2">
                Operations Head
              </p>
              <img
                src={logo3}
                alt="company logo"
                className="h-6 w-20 object-contain"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}