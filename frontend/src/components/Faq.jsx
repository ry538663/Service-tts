import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer end-to-end digital solutions including web development, mobile app development, AI/ML, UI/UX design, and more. You can share your project idea, and we’ll handle everything from planning to final delivery.",
  },
  {
    question: "How does the project process work?",
    answer:
      "Simply share your requirements with us. Our team analyzes your needs, plans the project, and executes it step-by-step. We keep you updated throughout the process until the final delivery.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on the complexity and scope. Small projects may take a few days, while larger solutions can take a few weeks. We always ensure timely delivery without compromising quality.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes, we provide ongoing support and maintenance after delivery to ensure everything runs smoothly and any updates or improvements are handled efficiently.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 mb-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Everything you need to know about our services and process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-lg bg-white transition-all duration-500 shadow-sm hover:shadow-md ${isActive ? "ring-2 ring-green-500" : ""
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <FaChevronDown
                    className={`text-lg transition-transform duration-500 ${isActive ? "rotate-180 text-green-500" : "text-gray-400"
                      }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}