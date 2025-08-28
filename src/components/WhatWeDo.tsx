import React from "react";
import { ArrowRight } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section id="what-we-do-section" className="py-20 bg-white">
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
            CLOUDEATION TECHNOLOGIES is a premier technology consulting partner with extensive experience in Salesforce, Microsoft Azure, and cutting-edge Data Science and AI. Our expert team creates powerful, scalable solutions, provides seamless cloud migration and integration, and offers expert implementation support. Whether you are implementing a CRM system for the first time, seeking to unlock insights from your data with AI, or looking to build a secure, cost-effective custom cloud application, our team has the expertise to guide you.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We're the technology experts who will make your platforms work for you, so you can focus on your growth!
          </p>

          {/* Button */}
          <a href="#who-we-helped" className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300">
            See Whom We’ve Helped
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
