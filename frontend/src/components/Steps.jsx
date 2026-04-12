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

      <h1 className="text-4xl font-semibold mb-16">How It Works</h1>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">

        {/* Line + Circles */}
        <div className="flex items-center justify-center mb-16 gap-0">

          {/* Step 1 */}
          <div className="flex items-center">
            <div
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${step >= 1
                ? "border-green-500 text-green-500 opacity-100 scale-100"
                : "opacity-0 scale-75"
                }`}
            >
              1
            </div>

            {/* Arrow 1 */}
            <div className="w-80 h-[2px] mx-2 my-2 relative">
              <div
                className={`h-full bg-green-500 transition-all duration-700 ${step >= 2 ? "w-full" : "w-0"
                  }`}
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center">
            <div
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${step >= 2
                ? "border-green-500 text-green-500 opacity-100 scale-100"
                : "opacity-0 scale-75"
                }`}
            >
              2
            </div>

            {/* Arrow 2 */}
            <div className="w-80 h-[2px] mx-2 my-2 relative">
              <div
                className={`h-full bg-green-500 transition-all duration-700 ${step >= 3 ? "w-full" : "w-0"
                  }`}
              />
            </div>
          </div>

          {/* Step 3 */}
          <div
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 ${step >= 3
              ? "border-green-500 text-green-500 opacity-100 scale-100"
              : "opacity-0 scale-75"
              }`}
          >
            3
          </div>
        </div>

        {/* Content */}
        <div className="flex items-start  justify-center px-8 gap-20">

          <div className="w-[260px] mx-6">
            <div className={`transition-all duration-700 ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Step 1: Share Your Project
              </h3>
              <p className="text-gray-600">
                Tell us your requirements and goals. We carefully understand your needs before starting.
              </p>
            </div>
          </div>

          <div className="w-[260px] mx-6">
            <div className={`transition-all duration-700 ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Step 2: We Build It
              </h3>
              <p className="text-gray-600">
                Our team works on your project with focus and keeps you updated at every step.              </p>
            </div>
          </div>

          <div className="w-[260px] mx-6">
            <div className={`transition-all duration-700 ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <h3 className="text-xl font-semibold mb-2 text-black">
                Step 3: Final Delivery              </h3>
              <p className="text-gray-600">
                Receive your completed project, ready to use and aligned with your expectations.              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className="md:hidden flex flex-col items-center px-4">

        <div className="w-full max-w-sm">

          {/* Step 1 */}
          <div className="flex items-start gap-4 mb-3">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${step >= 1
                  ? "border-green-500 text-green-500"
                  : "border-gray-300 text-gray-300"
                  }`}
              >
                1
              </div>

              <div className="w-[2px] h-16 bg-gray-300 relative">
                <div
                  className={`absolute top-0 left-0 w-full bg-green-500 transition-all duration-700 ${step >= 2 ? "h-full" : "h-0"
                    }`}
                />
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-lg font-semibold text-black">
                Step 1: Share Your Project
              </h3>
              <p className="text-gray-600 text-sm">
                Tell us your requirements and goals. We carefully understand your needs before starting.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4 mb-3">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${step >= 2
                  ? "border-green-500 text-green-500"
                  : "border-gray-300 text-gray-300"
                  }`}
              >
                2
              </div>

              <div className="w-[2px] h-16 bg-gray-300 relative">
                <div
                  className={`absolute top-0 left-0 w-full bg-green-500 transition-all duration-700 ${step >= 3 ? "h-full" : "h-0"
                    }`}
                />
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-lg font-semibold text-black">
                Step 2: We Build It
              </h3>
              <p className="text-gray-600 text-sm">
                Our team works on your project with focus and keeps you updated at every step.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${step >= 3
                    ? "border-green-500 text-green-500"
                    : "border-gray-300 text-gray-300"
                  }`}
              >
                3
              </div>

              {/* Invisible line to maintain alignment */}
              <div className="w-[2px] h-16 opacity-0" />
            </div>

            <div className="text-left">
              <h3 className="text-lg font-semibold text-black">
                Step 3: Final Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Receive your completed project, ready to use and aligned with your expectations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}