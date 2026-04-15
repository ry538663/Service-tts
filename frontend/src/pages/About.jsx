import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Trusted from "../components/Trusted";
import Stats from "../components/Stats";
import { Target, Eye, Award, Rocket } from "lucide-react";

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40  overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-gradient-to-r from-green-50 to-transparent rounded-full blur-3xl opacity-50" />

                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            We Build the Future <br />
                            <span className="text-orange-500 bg-clip-text ">
                                With Technology & Innovation
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto ">
                            At TTS, we are dedicated to transforming ideas into powerful digital solutions.
                            Our passion for excellence drives everything we do.
                        </p>
                    </motion.div>
                </div>
            </section>
            <Trusted />


            {/* Mission & Vision */}
            <section className="py-20 pt-0 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    >
                        {/* Mission */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                                <Target size={30} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To empower businesses worldwide by providing innovative, scalable, and reliable technical solutions.
                                We strive to be the backbone of our clients' digital success through expert execution and transparency.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                                <Eye size={30} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To become a global leader in technology services, recognized for our creative approach to complex problems
                                and our unwavering commitment to quality and client satisfaction.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 ">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                                <div className="space-y-4 text-lg text-gray-600">
                                    <p>
                                        Started with a vision to bridge the gap between complex technology and business needs,
                                        TTS began as a small group of passionate developers and designers.
                                    </p>
                                    <p>
                                        Today, we have grown into a multi-disciplinary team delivering top-tier solutions in
                                        web development, mobile apps, and custom software. We believe that every project is
                                        a partnership, and your success is our success.
                                    </p>
                                </div>

                                <div className="mt-10 grid grid-cols-2 gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                                            <Award size={20} />
                                        </div>
                                        <span className="font-semibold text-gray-800">Elite Talent</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-50 text-green-500 rounded-full flex items-center justify-center shrink-0">
                                            <Rocket size={20} />
                                        </div>
                                        <span className="font-semibold text-gray-800">Fast Delivery</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="md:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                    alt="Our Team Working"
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl z-0" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl z-0" />
                        </div>
                    </div>
                </div>
            </section>

            <div
            className="mt-20"
            >
                <Team />
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-6 max-w-6xl">
                <Stats />
            </div>

            <Footer />
        </div>
    );
};

export default About;