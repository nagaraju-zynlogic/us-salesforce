import React from "react";
import { ArrowRight } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="bg-[#0d4263] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-200 tracking-wide mb-12">
          HOW WE WORK
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left column */}
          <div className="space-y-6">
            <p className="text-xl font-semibold">
              We apply our nonprofit experience ...
            </p>
            <p className="text-xl font-semibold">
              We are community builders ...
            </p>

            {/* Button */}
            <button className="mt-6 inline-flex items-center bg-[#89bfa3] hover:bg-[#7aad91] text-black font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300">
              Let's Work Together
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">We respond to your needs ...</p>
              <ArrowRight size={24} />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">We make you more resilient ...</p>
              <ArrowRight size={24} />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">We strengthen what you already have ...</p>
              <ArrowRight size={24} />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">We stay with you on your journey ...</p>
              <ArrowRight size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
