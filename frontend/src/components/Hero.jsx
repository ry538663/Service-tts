import React from "react";
import { motion as Motion } from "framer-motion";
import img from "../assets/hero1.jpeg";
import img2 from "../assets/hero2.jpeg";
import img3 from "../assets/hero3.jpeg";
import img4 from "../assets/hero4.png";
import img5 from "../assets/hero5.png";


const Hero = () => {
    return (
        <div className="w-ful min-h-[600px] flex items-center px-10">

            {/* container with controlled gap */}
            <div className="w-full max-w-7xl mx-auto flex items-center gap-12">

                {/* LEFT SIDE */}
                <Motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-xl"
                >
                    <p className="text-gray-400 mb-4">Powered by AI Technology</p>

                    <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
                        Turn Your Ideas Into Reality — With Expert Developers
                    </h1>

                    <p className="text-gray-500 mt-5">
                        We help businesses build websites, apps, and custom tech solutions.
                        Hire skilled developers or let us handle your complete project —
                        fast, scalable, and reliable.
                    </p>

                    <button className="mt-6 px-6 py-3 rounded-full bg-indigo-500 text-white font-medium shadow-md hover:shadow-lg transition">
                        Get Started →
                    </button>
                </Motion.div>

                {/* RIGHT SIDE */}

                {/* slightly reduced width */}
                <Motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-[480px] h-[400px]"
                >

                    {/* BACK CARD 1 */}
                    <div className="absolute top-0 left-40 w-[300px] h-[180px] bg-gray-200 rounded-2xl shadow-md opacity-70 z-10">
                        <img src={img} alt="assets/hero1.jpeg" className="w-full h-full object-cover" />
                    </div>

                    {/* BACK CARD 2 */}
                    <div className="absolute top-40 left-10 w-[350px] h-[200px] bg-gray-100 rounded-2xl shadow-lg z-20">
                        <img src={img2} alt="assets/hero2.jpeg" className="w-full h-full object-cover" />
                    </div>

                    {/* FRONT CARD */}
                    <div className="absolute top-45 left-100 w-[260px] h-[180px] bg-white rounded-2xl shadow-xl border z-30">
                        <img src={img4} alt="assets/hero3.jpeg" className="w-full h-full object-contain" />
                    </div>

                    {/* TOP RIGHT */}
                    <div className="absolute right-0 left-120 top-10 w-[180px] h-[130px] bg-gray-100 rounded-xl shadow-md z-40">
                        <img src={img3} alt="assets/hero3.jpeg" className="w-full h-full object-cover" />

                    </div>
                    {/* BOTTOM CENTER */}
                    <div className="absolute top-95 left-15 -translate-x-1/2 w-[220px] h-[60px] bg-gray-100 rounded-full shadow-md z-40">
                        <img src={img5} alt="assets/hero3.jpeg" className="w-full h-full object-cover" />

                    </div>

                </Motion.div>

            </div>
        </div>
    );
};

export default Hero;
