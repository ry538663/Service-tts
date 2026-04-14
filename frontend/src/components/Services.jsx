import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/servicesData";
import { useNavigate } from "react-router-dom";


const Services = () => {
    const [slide, setSlide] = useState(0);
    const navigate = useNavigate();
    const slides = [
        services.slice(0, 6),
        services.slice(6, 12),
    ];

    const MotionDiv = motion.div;

    return (
        <div className="w-full py-10 my-10 overflow-x-hidden bg-gray-50">


            {/* HEADING */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-semibold text-gray-900">
                    Our Services
                </h2>

                <p className="text-gray-500 mt-4 leading-relaxed">
                    We turn your ideas into reality with powerful web and app solutions
                    designed to deliver performance, scalability, and exceptional user experience.
                </p>
            </div>

            {/* ANIMATED GRID */}

            <div className="mt-10 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden py-5">

                <div className="max-w-[1300px] mx-auto px-6">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}

                            // ✅ ONLY change = responsive grid
                            className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3 
                    gap-8 
                    justify-items-center
                "
                        >

                            {slides[slide].map((item) => (
                                <div
                                    key={item.id}
                                    className="
                            group relative 
                            w-100 
                            h-65 
                            bg-white rounded-2xl shadow-lg 
                            transition-all duration-500 
                            transform hover:-translate-y-3 hover:shadow-2xl
                        "
                                >

                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

                                    <div className="relative z-10 p-6 flex flex-col items-start justify-between h-full">

                                        {/* ✅ EXACT SAME IMAGE — untouched */}
                                        <img src={item.icon} alt={item.title} className="w-25 h-15 object-cover" />

                                        <h3 className="text-xl font-semibold text-gray-800 mt-4">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mt-2">
                                            {item.desc}
                                        </p>

                                        <button onClick={() => navigate(`/service/${item.slug}`)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium shadow-md hover:bg-green-600 transition">
                                            Learn More
                                        </button>

                                    </div>
                                </div>
                            ))}

                        </motion.div>
                    </AnimatePresence>

                </div>
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