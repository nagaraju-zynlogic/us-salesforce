import React from "react";
import { ArrowRight } from "lucide-react";

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
          Contact Us Today!
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-700 mb-8">
          Tell us how we can help make your data headaches go away!
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-900 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-800 transition"
          >
            Let&apos;s Work Together
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
