


import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const backgroundImageUrl = "/Gemini_Generated_Image_g7m8gzg7m8gzg7m8.png";

export default function Hero() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero-section"
      role="banner"
      aria-labelledby="hero-heading"
      className="text-white bg-cover bg-center relative min-h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Animated Heading */}
        <motion.h1
          id="hero-heading"
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Transform Your Enterprise with{" "}
          <span className="text-blue-300">Intelligent Cloud & AI</span> Solutions
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Expert consulting in Salesforce, Azure CRM, and Data Science to drive
          your business forward with measurable results.
        </motion.p>

        {/* Animated Button */}
        <motion.a
          href="#contact"
          onClick={scrollToContact}
          className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 inline-flex items-center space-x-3 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.15, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Schedule a Consultation</span>
          <ArrowRight size={24} />
        </motion.a>
      </div>
    </section>
  );
}
