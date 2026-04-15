import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Steps from "../components/Steps";
import Faq from "../components/Faq";
import { motion as Motion } from "framer-motion";
import bgImage from "../assets/download.png";
import { services } from "../data/servicesData";
import Stats from "../components/Stats";


const ServicesPage = () => {

    const navigate = useNavigate();
    return (
        <div className="bg-white pt-24 min-h-screen ">

            {/* Navbar */}
            <Navbar />
            <Motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="pt-18 px-6">
                    <div className="max-w-6xl mx-auto bg-[#181e2c] border border-gray-800 rounded-2xl overflow-hidden">

                        <div className="flex flex-col md:flex-row items-center">

                            {/* LEFT TEXT */}
                            <div className="flex-1 px-20 py-12 text-left">
                                <h1 className="text-4xl md:text-5xl mb-5 font-bold text-white mb-4">
                                    Our Services...
                                </h1>

                                <p className="text-gray-300 text-lg max-w-md">
                                    We provide complete digital solutions to help businesses grow, scale, and succeed in the modern digital world.
                                </p>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="flex-1 h-[250px] md:h-[400px]">
                                <img
                                    src={bgImage}
                                    alt="Services"
                                    className="w-full h-full object-cover object-right"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </Motion.div>

            {/* Services Grid */}

            <div className="max-w-6xl mx-auto px-6 py-16 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-green-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                            <button onClick={() => navigate(`/service/${service.slug}`)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium shadow-md hover:bg-green-600 transition">
                                Get Started
                            </button>
                        </Motion.div>
                    ))}

                </div>
            </div>
            <Steps />

            <Faq />

            {/* CTA Section */}
            <div className="bg-green-50  text-center py-16 px-6">
                <h2 className="text-3xl font-semibold mb-4">
                    Have a Project in Mind?
                </h2>
                <p className="mb-6 ">
                    Let’s build something amazing together.
                </p>
                <a
                    href="https://forms.gle/hkaXfDvSnStoC1xr9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition"
                >
                    Get Started
                </a>
            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default ServicesPage;