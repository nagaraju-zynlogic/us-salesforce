import React from "react";
import { ArrowRight } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="w-full">
          <img
            src="/what-we-do-homepage.jpg" // Replace with your actual image path
            alt="Typing on laptop"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#104569] mb-6">What We Do</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Data Geeks Lab is a Salesforce.org consulting partner with extensive
            experience working with NonProfit Success Pack, PatronManager, and
            Marketing Cloud Account Engagement (Pardot). Our US-based team
            creates practical solutions, provides training and coaching, and
            offers admin support. Whether you are implementing Salesforce from
            scratch, seeking to expand your use of the platform, or looking for
            guidance to manage staff or organizational change, we can help.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We’re the geeks who will make your data work for you, so you can
            focus on your mission!
          </p>

          {/* Button */}
          <button className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300">
            See Whom We’ve Helped
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
