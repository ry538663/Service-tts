import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../data/servicesData";
import { FaCheckCircle } from "react-icons/fa";

// 👉 Import your layout components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import FAQSection from "../components/Faq";

const ServiceDetail = () => {


  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  // 🔥 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col pt-24 items-center justify-center min-h-screen bg-gray-50 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Service Not Found</h2>
          <p className="text-gray-500 mt-4">
            The service you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="mt-8 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
          >
            Back to Services
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="w-full  bg-gray-50 min-h-screen pt-40  mx-auto max-w-6xl">

        {/* HERO SECTION */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT */}
          <motion.div variants={fadeUp} className="px-5">
            <span className="inline-block px-4 py-2  bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              Service Details
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {service.title}
            </h1>

            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              {service.fullDesc}
            </p>

            {/* BENEFITS */}
            <div className="mt-10 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Key Benefits:
              </h3>

              {[
                "Customized solutions tailored to your needs",
                "Scalable architecture",
                "Modern tech stack",
                "Ongoing support",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
            <motion.div variants={fadeUp} className="mt-12 flex gap-4 flex-wrap">
              <button className="px-8 py-4 bg-green-500 text-white rounded-2xl shadow-lg hover:bg-green-600 transition">
                Get Started
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 cursor-pointer bg-white border rounded-2xl hover:bg-gray-50 transition"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative flex justify-center"
          >

            <div className="relative    bg-white p-6 rounded-3xl shadow-xl group">
              <img 
                src={service.image}
                alt={service.title}
                className="rounded-2xl h-[600px]  transform scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        </motion.div>

        <Stats/>
        <FAQSection/>
        
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetail;