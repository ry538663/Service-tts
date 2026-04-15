import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, FileText, Clock, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { policies } from "./../data/PoliciesData";

const PolicyPage = () => {
  const { slug } = useParams();
  const policy = policies[slug];

  

  if (!policy) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-32   text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Policy Not Found</h1>
          <p className="text-gray-600 mb-8">The policy you are looking for does not exist or has been moved.</p>
          <Link to="/" className="text-orange-600 font-semibold hover:underline flex items-center justify-center gap-2">
            <ChevronLeft size={20} /> Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />

      <main className="container  mx-auto px-6 max-w-4xl pb-20 pt-24">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {policy.title}
              </h1>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> Last Updated: {policy.lastUpdated}
                </span>
              </div>
            </div>
          </div>
          
          <div className="h-px bg-gray-100 w-full mb-10" />

          {/* Policy Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {policy.content.split("\n").map((line, index) => {
              const trimmedLine = line.trim();
              if (trimmedLine.startsWith("###")) {
                return (
                  <h3 key={index} className="text-xl font-bold text-gray-900 mt-10 mb-4">
                    {trimmedLine.replace("###", "").trim()}
                  </h3>
                );
              }
              if (trimmedLine === "") return <br key={index} />;
              return <p key={index} className="mb-4">{trimmedLine}</p>;
            })}
          </div>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-[#1E2F6E] to-[#2a4192] rounded-3xl p-8 md:p-10 text-white shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">Questions about our policies?</h2>
          <p className="text-white/80 mb-6 max-w-xl">
            If you have any questions or concerns regarding our {policy.title.toLowerCase()}, 
            please reach out to our legal team.
          </p>
          <a 
            href="mailto:legal@triunitytech.com" 
            className="inline-block bg-white text-[#1E2F6E] px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Legal Team
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PolicyPage;