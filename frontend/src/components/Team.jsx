import React from "react";


import person1 from "../assets/TeamIcons/Green1.png";
import person2 from "../assets/TeamIcons/Green2.png";
import person3 from "../assets/TeamIcons/Green3.png";
import person4 from "../assets/TeamIcons/Green4.png";
import img1 from "../assets/TeamIcons/download.jpeg";
import img2 from "../assets/TeamIcons/download (1).jpeg";
import img3 from "../assets/TeamIcons/download (2).jpeg";


const Team = () => {
    return (
        <div className="w-full py-20 px-30">

            <div className="max-w-6xl mx-auto flex items-center gap-16">

                {/* LEFT SIDE */}
                <div className="flex-1">

                    <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
                        Empowering Your Business with , <br /> Expert Teams
                    </h1>

                    <p className="text-gray-500 mt-4 max-w-md">
                        Get skilled professionals on demand to power your projects.
                    </p>

                    {/* Team GRID */}
                    <div className="grid grid-cols-2 gap-12 mt-10">

                        {/* FEATURE 1 */}
                        <div className="flex flex-col gap-4 max-w-[260px]">

                            {/* ICON */}
                            <div className="w-30 h-14  flex items-center justify-center bg-white">
                                <img src={person1} alt="" className="  object-cover" />
                            </div>

                            <h3 className="font-semibold text-lg text-gray-900">
                                Hire Quickly
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                Get access to skilled professionals within 24–48 hours. Scale your team up or down based on your project needs with complete flexibility.
                            </p>
                        </div>

                        {/* FEATURE 2 */}
                        <div className="flex flex-col gap-4 max-w-[260px]">

                            <div className="w-35 h-14  flex items-center justify-center bg-white">
                                <img src={person3} alt="" className="  object-cover" />
                            </div>

                            <h3 className="font-semibold text-lg">
                                The Top 3%
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                Work with highly vetted experts selected through rigorous screening, ensuring top-quality performance and reliability.
                            </p>
                        </div>

                        {/* FEATURE 3 */}
                        <div className="flex flex-col gap-4 max-w-[260px]">

                            <div className="w-35 h-14  flex items-center justify-center bg-white">
                                <img src={person4} alt="" className="  object-cover" />
                            </div>

                            <h3 className="font-semibold text-lg">
                                Future Ready
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                Our team uses the latest tools and trends to build modern and future-ready solutions.
                            </p>
                        </div>

                        {/* FEATURE 4 */}
                        <div className="flex flex-col gap-4 max-w-[260px]">

                            <div className="w-35 h-14  flex items-center justify-center bg-white">
                                <img src={person2} alt="" className="  object-cover" />
                            </div>

                            <h3 className="font-semibold text-lg">
                                A Level Above
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                               We maintain the highest standards of quality, professionalism, and technical excellence in every project we deliver.
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE (CARDS) */}
                <div className="flex-1 relative h-[650px]">

                    {/* CARD 1 */}
                    <div className="absolute top-0 z-10 left-25 w-[220px]  bg-white rounded-xl shadow-lg overflow-hidden">
                        <img src={img1} alt="" className="w-full h-[250px] object-cover" />
                        <div className="p-4">
                            <h4 className="font-semibold">Ning Xu</h4>
                            <p className="text-sm text-gray-500">Product Designer</p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="absolute  z-1 top-20 left-85 right-0 w-[220px] bg-white rounded-xl shadow-lg overflow-hidden">
                        <img src={img2} alt="" className="w-full h-[270px] object-cover" />
                        <div className="p-4">
                            <h4 className="font-semibold">Jacqueline</h4>
                            <p className="text-sm text-gray-500">Consultant</p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="absolute  bottom-0 left-20 w-[220px] bg-white rounded-xl shadow-lg overflow-hidden">
                        <img src={img3} alt="" className="w-full h-[250px] object-cover" />
                        <div className="p-4">
                            <h4 className="font-semibold">Mohab Ayman</h4>
                            <p className="text-sm text-gray-500">AI Developer</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Team;