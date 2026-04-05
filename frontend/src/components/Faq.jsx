import React, { useState, useRef } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide top-tier talent across software development, design, and project management tailored to your business needs.",
  },
  {
    question: "How quickly can I hire talent?",
    answer:
      "You can typically hire within a few days. We match you with the best candidates based on your requirements.",
  },
  {
    question: "What makes your platform different?",
    answer:
      "We focus on quality, vetting top 3% of talent globally to ensure high performance and reliability.",
  },
  {
    question: "Do you offer flexible engagement models?",
    answer:
      "Yes, we offer hourly, part-time, and full-time engagement models based on your needs.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
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
                className={`border rounded-lg bg-white transition-all duration-500 shadow-sm hover:shadow-md ${
                  isActive ? "ring-2 ring-green-500" : ""
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

                  <span
                    className={`text-xl transform transition-transform duration-500 ease-in-out ${
                      isActive ? "rotate-180 text-green-500" : "text-gray-400"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
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