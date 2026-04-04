import { useEffect, useState } from "react";

export default function HiringSteps() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 2500),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full py-20 bg-white text-center">
      <h1 className="text-4xl font-semibold mb-16">Hiring Made Easy</h1>

      {/* Line + Circles */}
      <div className="flex items-center justify-center mb-16 gap-10">
        
        {/* Step 1 */}
        <div className="flex items-center">
          <div
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${
              step >= 1
                ? "border-green-500 text-green-500 opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            1
          </div>

          {/* Arrow 1 */}
          <div className="w-80 h-[2px] mx-2 my-2 relative">
            <div
              className={`h-full bg-green-500 transition-all duration-700 ${
                step >= 2 ? "w-full" : "w-0"
              }`}
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-center">
          <div
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${
              step >= 2
                ? "border-green-500 text-green-500 opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            2
          </div>

          {/* Arrow 2 */}
          <div className="w-80 h-[2px] mx-2 my-2 relative">
            <div
              className={`h-full bg-green-500 transition-all duration-700 ${
                step >= 3 ? "w-full" : "w-0"
              }`}
            />
          </div>
        </div>

        {/* Step 3 */}
        <div
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${
            step >= 3
              ? "border-green-500 text-green-500 opacity-100 scale-100"
              : "opacity-0 scale-75"
          }`}
        >
          3
        </div>
      </div>

      {/* Content aligned under each circle */}
      <div className="flex items-start justify-center px-8 gap-20">
        
        {/* Step 1 Content */}
        <div className="w-[260px] mx-6">
          <div
            className={`transition-all duration-700 ${
              step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-black">
              Talk to One of Our Industry Experts
            </h3>
            <p className="text-gray-600">
              An expert on our team will work with you to understand your goals,
              technical needs, and team dynamics.
            </p>
          </div>
        </div>

        {/* Step 2 Content */}
        <div className="w-[260px] mx-6 ">
          <div
            className={`transition-all duration-700 ${
              step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-black">
              Work With Hand-Selected Talent
            </h3>
            <p className="text-gray-600">
              Within days, we'll introduce you to the right talent for your
              project. Average time to match is under 24 hours.
            </p>
          </div>
        </div>

        {/* Step 3 Content */}
        <div className="w-[260px] mx-6">
          <div
            className={`transition-all duration-700 ${
              step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-black">
              The Right Fit, Guaranteed
            </h3>
            <p className="text-gray-600">
              Work with your new team member on a trial basis (pay only if
              satisfied), ensuring you hire the right people for the job.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}