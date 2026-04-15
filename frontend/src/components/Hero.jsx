import React from "react";
import { motion as Motion } from "framer-motion";
import img from "../assets/hero1.jpeg";
import img2 from "../assets/hero2.jpeg";
import img3 from "../assets/hero3.jpeg";
import img4 from "../assets/hero4.png";
import img5 from "../assets/hero5.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full pt-24 h-fit sm:mt-20 mt-8 flex items-center justify-center px-4 sm:px-6 lg:px-8">

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-1">

        {/* RIGHT (Image) → FIRST on mobile */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[480px] h-[300px] sm:h-[350px] md:h-[400px]"
        >

          <div className="absolute top-[8%] left-[10%] w-[55%] h-[35%] bg-gray-200 rounded-2xl shadow-md opacity-70 z-10">
            <img src={img} className="w-full h-full object-cover rounded-2xl" />
          </div>

          <div className="absolute top-[45%] left-[-4%] w-[60%] h-[40%] bg-gray-100 rounded-2xl shadow-lg z-20">
            <img src={img2} className="w-full h-full object-cover rounded-2xl" />
          </div>

          <div className="absolute top-[50%] left-[58%] w-[45%] h-[35%] bg-white rounded-2xl shadow-xl border z-30">
            <img src={img4} className="w-full h-full object-contain rounded-2xl" />
          </div>

          <div className="absolute top-[15%] right-[-1%] w-[35%] h-[30%] bg-gray-100 rounded-xl shadow-md z-40">
            <img src={img3} className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="absolute bottom-[4%] left-[10%] -translate-x-1/2 w-[50%] h-[15%]  bg-gray-100 rounded-full shadow-md z-40">
            <img src={img5} className="w-full h-full object-cover rounded-full" />
          </div>

        </Motion.div>

        {/* LEFT (Text) → SECOND on mobile */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 w-full lg:max-w-xl text-center lg:text-left"
        >
          <p className="text-gray-400 mb-3 text-sm sm:text-base">
            Powered by AI Technology
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Turn Your Ideas Into Reality - With Expert Execution
          </h1>

          <p className="text-gray-500 mt-4 text-sm sm:text-base md:text-lg">
            We help businesses build websites, apps, and custom solutions. Share your project with us and we’ll handle everything from start to finish - delivering fast, scalable, and reliable results without the hassle.
          </p>

          <button
            onClick={() => navigate("/services")}
            className="mt-6 cursor-pointer px-6 py-3 rounded-full bg-indigo-500 text-white font-medium shadow-md 
  hover:shadow-lg transform transition duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Get Started
          </button>
        </Motion.div>

      </div>
    </div>
  );
};

export default Hero;