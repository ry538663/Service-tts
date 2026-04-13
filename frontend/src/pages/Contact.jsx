import React, { useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion as Motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        
        try {
            await addDoc(collection(db, "generalInquiries"), {
                ...formData,
                timestamp: serverTimestamp(),
            });
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setStatus("error");
        }
    };

    return (

        <> 
        <Navbar/>
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* HEADING */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Get in Touch
                    </Motion.h1>
                    <Motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 text-lg"
                    >
                        Have a project in mind or just want to say hello? We'd love to hear from you. 
                        Our team typically responds within 24 hours.
                    </Motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* CONTACT FORM */}
                    <Motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                <textarea 
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your project..."
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                disabled={status === "sending"}
                                className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all active:scale-95 ${
                                    status === "success" 
                                    ? "bg-green-600 shadow-green-200" 
                                    : "bg-green-500 shadow-green-200 hover:shadow-green-300"
                                }`}
                            >
                                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                            </button>
                        </form>
                    </Motion.div>

                    {/* CONTACT INFO */}
                    <Motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-14 h-14 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                    <HiOutlineMail />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-500 text-sm">support@trinitytech.com</p>
                                <p className="text-gray-500 text-sm">info@trinitytech.com</p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-14 h-14 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                    <HiOutlinePhone />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-gray-500 text-sm">+1 (555) 000-1111</p>
                                <p className="text-gray-500 text-sm">+1 (555) 222-3333</p>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-[#1E2F6E] p-8 rounded-3xl shadow-xl flex items-start gap-6 text-white relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                           <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                                <HiOutlineLocationMarker />
                           </div>
                           <div>
                                <h3 className="font-bold text-xl mb-2">Our Office</h3>
                                <p className="text-white/70 leading-relaxed">
                                    123 Innovation Drive, Tech Suite 500<br />
                                    Silicon Valley, CA 94025<br />
                                    United States
                                </p>
                           </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900 ml-1">Follow Our Journey</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: FaLinkedinIn, color: "hover:bg-green-600" },
                                    { icon: FaTwitter, color: "hover:bg-green-500" },
                                    { icon: FaInstagram, color: "hover:bg-green-600" }
                                ].map((social, i) => (
                                    <a 
                                        key={i}
                                        href="#"
                                        className={`w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:-translate-y-1 shadow-sm`}
                                    >
                                        <social.icon className="text-xl" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Motion.div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Contact;