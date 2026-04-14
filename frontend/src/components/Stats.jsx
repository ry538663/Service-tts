import React from 'react'
import { motion } from "framer-motion";

const Stats = () => {
    // 🔥 Animation Variants
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    return (
        <div>
            {/* STATS SECTION */}
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
                className="my-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-300 pt-16"
            >
                {[
                    { label: "Client Satisfaction", value: "99%" },
                    { label: "Projects", value: "150+" },
                    { label: "Experts", value: "25+" },
                    { label: "Support", value: "24/7" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        className="text-center"
                    >
                        <div className="text-3xl font-bold text-gray-900">
                            {stat.value}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Stats