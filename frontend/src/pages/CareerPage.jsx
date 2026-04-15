import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineGlobe, HiOutlineClock, HiOutlineUsers } from "react-icons/hi";
import { MdOutlineRocketLaunch, MdOutlinePsychology, MdOutlineRocket, MdOutlineFavoriteBorder } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Careers = () => {
    const jobs = [
        {
            id: 1,
            title: "Senior Full-stack Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-time",
            icon: <HiOutlineBriefcase />,
            color: "text-green-500",
            bgColor: "bg-green-50"
        },
        {
            id: 2,
            title: "UX/UI Product Designer",
            department: "Design",
            location: "On-site / Remote",
            type: "Full-time",
            icon: <MdOutlinePsychology />,
            color: "text-green-500",
            bgColor: "bg-green-50"
        },
        {
            id: 3,
            title: "Marketing Strategy Lead",
            department: "Growth",
            location: "Remote",
            type: "Full-time",
            icon: <MdOutlineRocketLaunch />,
            color: "text-green-500",
            bgColor: "bg-green-50"
        },
        {
            id: 4,
            title: "HR & People Ops",
            department: "Operations",
            location: "Hybrid",
            type: "Part-time",
            icon: <HiOutlineUsers />,
            color: "text-green-500",
            bgColor: "bg-green-50"
        }
    ];

    const benefits = [
        {
            title: "Global Flexiblity",
            desc: "Work from anywhere in the world. We value results over office presence.",
            icon: <HiOutlineGlobe />,
        },
        {
            title: "Growth Budget",
            desc: "Annual allowance for books, courses, and conferences to sharpen your skills.",
            icon: <MdOutlineRocketLaunch />,
        },
        {
            title: "Wellness Support",
            desc: "Comprehensive health insurance and mental health support for you and your family.",
            icon: <MdOutlineFavoriteBorder />,
        }
    ];

    const [activeCategory, setActiveCategory] = useState("All Jobs");
 

    const categories = ["All Jobs", "Engineering", "Design", "Growth", "Operations"];

    const filteredJobs = activeCategory === "All Jobs"
        ? jobs
        : jobs.filter(job => job.department === activeCategory);

   

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-white pt-32 pb-20 px-6">
                <div className="max-w-7xl pt-10 mx-auto">

                    {/* HERO SECTION */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-500 font-bold tracking-widest uppercase text-sm mb-4 block"
                        >
                            Join the Revolution
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            Shape the Future of <br className="hidden md:block" /> Digital Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-lg md:text-xl leading-relaxed"
                        >
                            We’re looking for passionate creators, thinkers, and builders to join our mission in transforming how business technology is built and delivered.
                        </motion.p>
                    </div>

                    {/* BENEFITS SECTION */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-green-100 hover:bg-white hover:shadow-2xl hover:shadow-green-500/5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl text-green-500 mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* OPEN POSITIONS */}
                    <div className="mb-20">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Open Positions</h2>
                                <p className="text-gray-500">Come and do the best work of your life.</p>
                            </div>
                            <div className="flex gap-2 bg-gray-100 p-1.5 rounded-2xl overflow-x-auto max-w-full">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-6 py-2.5 font-bold rounded-xl text-sm transition-all whitespace-nowrap ${activeCategory === cat
                                                ? "bg-white text-gray-900 shadow-sm"
                                                : "text-gray-500 hover:text-gray-900"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 min-h-[400px]">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job, index) => (
                                    <motion.div
                                        key={job.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group bg-white p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`w-14 h-14 ${job.bgColor} ${job.color} rounded-2xl flex items-center justify-center text-2xl`}>
                                                {job.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-500 transition-colors">{job.title}</h3>
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span className="flex items-center gap-1.5"><HiOutlineBriefcase /> {job.department}</span>
                                                    <span className="flex items-center gap-1.5"><HiOutlineGlobe /> {job.location}</span>
                                                    <span className="flex items-center gap-1.5"><HiOutlineClock /> {job.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                           
                                            className="w-full md:w-auto px-8 py-3 bg-gray-900 text-white font-bold rounded-2xl group-hover:bg-green-600 transition-colors active:scale-95"
                                        >
                                            Apply Now
                                        </button>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-20 text-gray-400 font-medium">
                                    No positions found in this category.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* BOTTOM CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[3rem] bg-[#1E2F6E] p-10 md:p-20 text-center text-white overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/20 to-transparent"></div>
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Don’t see a fit?</h2>
                            <p className="text-white/70 text-lg mb-10">
                                We’re always on the lookout for exceptional talent. If you’re passionate about what we do, send us your resume and tell us why you’d be a great fit.
                            </p>
                            <a
                                href="mailto:careers@trinitytech.com"
                                className="inline-block px-10 py-4 bg-green-500 text-white font-bold rounded-2xl shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all active:scale-95"
                            >
                                Send Your Resume
                            </a>
                        </div>
                    </motion.div>

                </div>

            </div>
            <Footer />
        </>
    );
};

export default Careers;