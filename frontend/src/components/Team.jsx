import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import person1 from "../assets/TeamIcons/Green1.png";
import person2 from "../assets/TeamIcons/Green2.png";
import person3 from "../assets/TeamIcons/Green3.png";
import person4 from "../assets/TeamIcons/Green4.png";
import img1 from "../assets/TeamIcons/download.png";
import img2 from "../assets/TeamIcons/download (1).png";
import img3 from "../assets/TeamIcons/download (2).png";

const Team = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    return (
        <div className="w-full py-10 px-6 md:px-10 lg:px-10 overflow-x-hidden">

            {/* Wrapper */}
            <div className="max-w-6xl mx-auto w-full">

                {/* MOBILE/TAB TITLE */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:hidden">
                    <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
                        Empowering Your Business with <br /> Expert Teams
                    </h1>

                    <p className="text-gray-500 mt-4 max-w-md">
                        Get skilled professionals on demand to power your projects.
                    </p>
                </div>

                {/* SLIDER CONTAINER */}
                <div className="overflow-hidden lg:overflow-visible">

                    <div
                        className="flex lg:flex-row w-full transition-transform duration-300 ease-out"

                        style={{ transform: `translateX(-${activeSlide * 100}%)` }}

                        onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}

                        onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}

                        onTouchEnd={() => {
                            const distance = touchStart - touchEnd;
                            const threshold = 80;

                            if (distance > threshold && activeSlide < 1) {
                                setActiveSlide(1);
                            } else if (distance < -threshold && activeSlide > 0) {
                                setActiveSlide(0);
                            }
                        }}
                    >

                        {/* LEFT SIDE */}
                        <div className="flex-1 min-w-full  lg:min-w-0 shrink-0">

                            {/* DESKTOP TITLE */}
                            <div className="hidden lg:flex flex-col items-center lg:items-start text-center lg:text-left">
                                <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
                                    Empowering Your Business with <br /> Expert Teams
                                </h1>

                                <p className="text-gray-500 mt-4 max-w-md">
                                    Get skilled professionals on demand to power your projects.
                                </p>
                            </div>

                            {/* GRID */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:mt-10 mt-20
    justify-items-center lg:justify-items-start 
    items-start">

                                <div className="flex flex-col gap-4 max-w-[260px] w-full">
                                    <div className="w-30 h-14 flex items-center justify-center bg-white">
                                        <img src={person1} alt="" className="object-cover" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-gray-900">
                                        Full Handling
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        We take care of your entire project from start to finish, so you don’t have to worry about anything.
                                        Every step is managed with care to ensure smooth and successful completion.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 max-w-[260px] w-full">
                                    <div className="w-35 h-14 flex items-center justify-center bg-white">
                                        <img src={person3} alt="" className="object-cover" />
                                    </div>
                                    <h3 className="font-semibold text-lg">
                                        Trusted Quality
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        We focus on delivering results that meet your expectations with attention to every detail.
                                        Our goal is to provide outcomes that truly satisfy your needs.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 max-w-[260px] w-full">
                                    <div className="w-35 h-14 flex items-center justify-center bg-white">
                                        <img src={person4} alt="" className="object-cover" />
                                    </div>
                                    <h3 className="font-semibold text-lg">
                                        On-Time Delivery
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Your work is completed within the promised time, with clear updates at every step.
                                        We stay committed to deadlines so you can plan your next move with confidence.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 max-w-[260px] w-full">
                                    <div className="w-35 h-14 flex items-center justify-center bg-white">
                                        <img src={person2} alt="" className="object-cover" />
                                    </div>
                                    <h3 className="font-semibold text-lg">
                                        Easy Process
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        Just share your requirements, and we’ll handle everything smoothly without any hassle.
                                        We make the entire experience simple, clear, and stress-free for you.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="
    flex-1 min-w-full lg:min-w-0 shrink-0 
    relative lg:h-[650px] mt-16 lg:mt-0
    flex flex-col items-center gap-6
    md:grid md:grid-cols-2 md:gap-6 md:place-items-center
    lg:block
">

                            {/* CARD 1 */}
                            <div className="w-[220px] bg-white rounded-xl shadow-lg overflow-hidden
        lg:absolute lg:top-[-5%] lg:left-25">
                                <img src={img1} alt="" className="w-full h-[250px] object-cover" />
                                <div className="p-4 pt-2">
                                    <h4 className="font-semibold">Shobhit Jain </h4>
                                    <p className="text-[12px] text-gray-500">Assistant Technical Manager | DXC Technology</p>
                                    <p className="text-[12px] text-gray-500">11+ years experience in technical management</p>
                                </div>
                            </div>

                            {/* CARD 2 */}
                            <div className="w-[220px] bg-white rounded-xl shadow-lg overflow-hidden
        lg:absolute lg:top-20 lg:left-85">
                                <img src={img2} alt="" className="w-full h-[270px] object-cover" />
                                <div className="p-4 pt-2">
                                    <h4 className="font-semibold">Abhinesh Yadav</h4>
                                    <p className="text-[12px] text-gray-500">Cloud Computing Manager | TCS</p>
                                    <p className="text-[12px] text-gray-500">9+ years of experience in Cloud & Data Solutions</p>
                                </div>
                            </div>

                            {/* CARD 3 */}
                            <div className="
        w-[220px] bg-white rounded-xl shadow-lg overflow-hidden
        md:col-span-2 md:justify-self-center
        lg:absolute lg:bottom-[-5%] lg:left-20
    ">
                                <img src={img3} alt="" className="w-full h-[250px] object-cover" />
                                <div className="p-4">
                                    <h4 className="font-semibold">Chandresh Yadav</h4>
                                    <p className="text-[12px] text-gray-500">Power BI Manager | TCS</p>
                                    <p className="text-[12px] text-gray-500">12+ years experience in Power BI & Analytics</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-8 lg:hidden">
                {[0, 1].map((i) => (
                    <div
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${activeSlide === i ? "bg-black" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>

        </div>

    );
};

export default Team;