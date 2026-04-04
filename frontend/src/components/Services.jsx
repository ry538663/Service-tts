import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AI from "../assets/ServiceImage/AI.png";
import Shopify from "../assets/ServiceImage/Shopify.png";
import Wordpress from "../assets/ServiceImage/Wordpress.png";
import ContentWriting from "../assets/ServiceImage/ContentWriting.png";
import Frontend from "../assets/ServiceImage/Frontend.png";
import Backend from "../assets/ServiceImage/Backend.png";
import UXDesign from "../assets/ServiceImage/UXDesign.png";
import FullStack from "../assets/ServiceImage/FullStack.png";
import Android from "../assets/ServiceImage/Android.png";
import SEO from "../assets/ServiceImage/SEO.png";
import API from "../assets/ServiceImage/API.png";
import Cloud from "../assets/ServiceImage/Cloud.png";
// Dummy data
const services = [

    {
        id: 1,
        title: "Full Stack Development",
        desc: "End-to-end development solutions from frontend to backend deployment.",
        icon: FullStack,

    },
    {
        id: 2,
        title: "Android Development",
        desc: "Custom Android applications built for performance, scalability, and seamless user experience.",
        icon: Android,
    },
    {
        id: 3,
        title: "Shopify Development",
        desc: "Custom Shopify stores with seamless design, secure payments, and optimized performance to grow your online business.",
        icon: Shopify,
    },
    {
        id: 4,
        title: "AI & Machine Learning",
        desc: "Intelligent AI/ML solutions to automate processes, analyze data, and build smart applications for your business.",
        icon: AI,

    },
    {
        id: 5,
        title: "Frontend Development",
        desc: "Interactive and scalable frontend solutions using React and modern tools.",
        icon: Frontend,
    },
    {
        id: 6,
        title: "Backend Development",
        desc: "Robust and secure backend systems with APIs and database integration.",
        icon: Backend,
    },
    {
        id: 7,
        title: "UI/UX Design",
        desc: "Clean, intuitive, and user-friendly designs that enhance user experience.",
        icon: UXDesign,
    },

    {
        id: 8,
        title: "Content Writing",
        desc: "High-quality, engaging, and SEO-optimized content to boost your brand and connect with your audience.",
        icon: ContentWriting,
    },
    {

        id: 9,
        title: "WordPress Development",
        desc: "Custom WordPress websites with responsive design, SEO optimization, and easy content management.",
        icon: Wordpress,

    },
    {
        id: 10,
        title: "API Development & Integration",
        desc: "Seamless integration of third-party services and custom APIs.",
        icon: API,
    },
    {
        id: 11,
        title: "Cloud & Firebase Services",
        desc: "Deploy and manage scalable apps using cloud and Firebase solutions.",
        icon: Cloud,
    },
    {
        
        id: 12,
        title: "SEO Optimization",
        desc: "Improve your website’s visibility on search engines with data-driven SEO strategies and performance optimization.",
        icon: SEO,
    },
];
const Services = () => {
    const [slide, setSlide] = useState(0);

    const slides = [
        services.slice(0, 6),
        services.slice(6, 12),
    ];

    const MotionDiv = motion.div;

    return (
        <div className="w-full py-20 px-30 bg-gray-50">


            {/* HEADING */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-semibold text-gray-900">
                    Your Vision, Our Expertise
                </h2>

                <p className="text-gray-500 mt-4 leading-relaxed">
                    We turn your ideas into reality with powerful web and app solutions
                    designed to deliver performance, scalability, and exceptional user experience.
                </p>
            </div>

            {/* ANIMATED GRID */}
            <div className="mt-16 relative overflow-hidden">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide}
                        initial={{ x: 300, opacity: 0 }}   // always from right
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}     // always exit left
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="grid grid-cols-3 gap-8 justify-items-center"
                    >

                        {slides[slide].map((item) => (
                            <div
                                key={item.id}
                                className="group relative w-100 h-65 bg-white rounded-2xl shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl "
                            >

                                {/* Glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

                                {/* Content */}
                                <div className="relative z-10 p-6 flex flex-col items-start justify-between h-full">

                                    <img src={item.icon} alt={item.title} className="w-25 h-15 object-cover" />


                                    <h3 className="text-xl font-semibold text-gray-800 mt-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-2">
                                        {item.desc}
                                    </p>

                                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium shadow-md hover:bg-green-600 transition">
                                        Learn More
                                    </button>

                                </div>
                            </div>
                        ))}

                    </motion.div>
                </AnimatePresence>

            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 mt-10">

                <button
                    onClick={() => setSlide(0)}
                    className={`px-4 py-2 rounded-lg border ${slide === 0 ? "bg-gray-900 text-white" : "hover:bg-gray-100"
                        }`}
                >
                    1
                </button>

                <button
                    onClick={() => setSlide(1)}
                    className={`px-4 py-2 rounded-lg border ${slide === 1 ? "bg-gray-900 text-white" : "hover:bg-gray-100"
                        }`}
                >
                    2
                </button>

            </div>

        </div>
    );
};

export default Services;