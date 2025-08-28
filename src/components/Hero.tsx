// // // // // import React from 'react';
// // // // // import { ArrowRight } from 'lucide-react';

// // // // // export default function Hero() {
// // // // //   const scrollToContact = () => {
// // // // //     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// // // // //   };

// // // // //   return (
// // // // //     <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // // //           <div>
// // // // //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
// // // // //               Transform Your Enterprise with 
// // // // //               <span className="text-blue-300"> Intelligent Cloud & AI</span> Solutions
// // // // //             </h1>
// // // // //             <p className="text-xl text-blue-100 mb-8 leading-relaxed">
// // // // //               Expert consulting in Salesforce, Azure CRM, and Data Science to drive your business forward with measurable results.
// // // // //             </p>
// // // // //             <button 
// // // // //               onClick={scrollToContact}
// // // // //               className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
// // // // //             >
// // // // //               <span>Schedule a Consultation</span>
// // // // //               <ArrowRight size={20} />
// // // // //             </button>
// // // // //           </div>
          
// // // // //           <div className="hidden lg:block">
// // // // //             <div className="bg-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/50">
// // // // //               <div className="grid grid-cols-2 gap-4">
// // // // //                 <div className="bg-blue-700/50 rounded-lg p-4 text-center">
// // // // //                   <div className="text-3xl font-bold text-blue-200">500+</div>
// // // // //                   <div className="text-sm text-blue-300">Projects Delivered</div>
// // // // //                 </div>
// // // // //                 <div className="bg-blue-700/50 rounded-lg p-4 text-center">
// // // // //                   <div className="text-3xl font-bold text-blue-200">98%</div>
// // // // //                   <div className="text-sm text-blue-300">Client Satisfaction</div>
// // // // //                 </div>
// // // // //                 <div className="bg-blue-700/50 rounded-lg p-4 text-center">
// // // // //                   <div className="text-3xl font-bold text-blue-200">15+</div>
// // // // //                   <div className="text-sm text-blue-300">Years Experience</div>
// // // // //                 </div>
// // // // //                 <div className="bg-blue-700/50 rounded-lg p-4 text-center">
// // // // //                   <div className="text-3xl font-bold text-blue-200">50+</div>
// // // // //                   <div className="text-sm text-blue-300">Certified Experts</div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }




// // // // import React from 'react';
// // // // import { ArrowRight } from 'lucide-react';

// // // // // Replace with your own image in the /public folder or a web URL
// // // // const backgroundImageUrl = "https://lh3.googleusercontent.com/gg-dl/AJfQ9KQMklaFDWadcVL-PQDdQ7hKgugUACri-e-yCrah2iZeUi55jMAYc4y5H7MZLyGqdn2TXjr8kNvkvqejEzfgXXVel8z6_dBok5r9Yfnb11MWwKZNR0CiNu4EiXrTGPFOvOy8Nr7Yu-wiiuljLdh3YjVE3rbM6po3lICwR2TxfJd321mF=s1024"; // E.g. use a royalty free AI or cloud consulting background

// // // // export default function Hero() {
// // // //   const scrollToContact = () => {
// // // //     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// // // //   };

// // // //   return (
// // // //     <section
// // // //       className="pt-24 pb-16 text-white bg-cover bg-center relative"
// // // //       style={{
// // // //         backgroundImage: `url(${backgroundImageUrl})`,
// // // //         backgroundBlendMode: 'multiply',
// // // //         // backgroundColor: 'rgba(16,52,92,0.9)' // fallback navy overlay
// // // //       }}
// // // //     >
// // // //       <div className="absolute inset-0 bg-blue-900/80 pointer-events-none" />
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // //           <div>
// // // //             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
// // // //               Transform Your Enterprise with 
// // // //               <span className="text-blue-300"> Intelligent Cloud & AI</span> Solutions
// // // //             </h1>
// // // //             <p className="text-xl text-blue-100 mb-8 leading-relaxed">
// // // //               Expert consulting in Salesforce, Azure CRM, and Data Science to drive your business forward with measurable results.
// // // //             </p>
// // // //             <button 
// // // //               onClick={scrollToContact}
// // // //               className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
// // // //             >
// // // //               <span>Schedule a Consultation</span>
// // // //               <ArrowRight size={20} />
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }



// // // import React from 'react';
// // // import { ArrowRight } from 'lucide-react';

// // // // CORRECTED: Replaced the placeholder with the actual banner image URL
// // // const backgroundImageUrl = "/Gemini_Generated_Image_g7m8gzg7m8gzg7m8.png";

// // // export default function Hero() {
// // //   const scrollToContact = () => {
// // //     // This function correctly scrolls to the contact section
// // //     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// // //   };

// // //   return (
// // //     // ENHANCED: Added ARIA role for better accessibility and semantics
// // //     <section
// // //       role="banner"
// // //       aria-labelledby="hero-heading"
// // //       className="pt-24 pb-16 text-white bg-cover bg-center relative"
// // //       style={{
// // //         backgroundImage: `url(${backgroundImageUrl})`,
// // //         backgroundBlendMode: 'multiply',
// // //       }}
// // //     >
// // //       {/* This overlay darkens the background image to ensure text is readable */}
// // //       <div className="absolute inset-0 bg-blue-900/80 pointer-events-none" />

// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // //           <div>
// // //             {/* ENHANCED: Added ID for the ARIA label */}
// // //             <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
// // //               Transform Your Enterprise with
// // //               <span className="text-blue-300"> Intelligent Cloud & AI</span> Solutions
// // //             </h1>
// // //             <p className="text-xl text-blue-100 mb-8 leading-relaxed">
// // //               Expert consulting in Salesforce, Azure CRM, and Data Science to drive your business forward with measurable results.
// // //             </p>
// // //             <button
// // //               onClick={scrollToContact}
// // //               className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
// // //             >
// // //               <span>Schedule a Consultation</span>
// // //               <ArrowRight size={20} />
// // //             </button>
// // //           </div>
// // //           {/* The second column is intentionally empty to showcase the background image */}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import React from 'react';
// // import { ArrowRight } from 'lucide-react';

// // // CORRECTED: Replaced the placeholder with the actual banner image URL
// // const backgroundImageUrl = "/Gemini_Generated_Image_g7m8gzg7m8gzg7m8.png";

// // export default function Hero() {
// //   const scrollToContact = () => {
// //     // This function correctly scrolls to the contact section
// //     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   return (
// //     // ENHANCED: Added ARIA role for better accessibility and semantics
// //     <section
// //       role="banner"
// //       aria-labelledby="hero-heading"
// //       className="text-white bg-cover bg-center relative min-h-screen flex items-center"
// //       style={{
// //         backgroundImage: `url(${backgroundImageUrl})`,
// //         backgroundBlendMode: 'multiply',
// //       }}
// //     >
// //       {/* This overlay darkens the background image to ensure text is readable */}
// //       <div className="absolute inset-0 bg-blue-900/80 pointer-events-none" />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //           <div>
// //             {/* ENHANCED: Added ID for the ARIA label */}
// //             <h1
// //               id="hero-heading"
// //               className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
// //             >
// //               Transform Your Enterprise with
// //               <span className="text-blue-300"> Intelligent Cloud & AI</span> Solutions
// //             </h1>
// //             <p className="text-xl text-blue-100 mb-8 leading-relaxed">
// //               Expert consulting in Salesforce, Azure CRM, and Data Science to drive
// //               your business forward with measurable results.
// //             </p>
// //             <button
// //               onClick={scrollToContact}
// //               className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
// //             >
// //               <span>Schedule a Consultation</span>
// //               <ArrowRight size={20} />
// //             </button>
// //           </div>
// //           {/* The second column is intentionally empty to showcase the background image */}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }





// import React from "react";
// import { ArrowRight } from "lucide-react";

// const backgroundImageUrl = "/Gemini_Generated_Image_g7m8gzg7m8gzg7m8.png";

// export default function Hero() {
//   const scrollToContact = () => {
//     document
//       .getElementById("contact")
//       ?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       role="banner"
//       aria-labelledby="hero-heading"
//       className="text-white bg-cover bg-center relative min-h-screen flex items-center justify-center text-center"
//       style={{
//         backgroundImage: `url(${backgroundImageUrl})`,
//         backgroundBlendMode: "multiply",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-blue-900/80 pointer-events-none" />

//       <div className="max-w-4xl mx-auto px-4 relative z-10">
//         <h1
//           id="hero-heading"
//           className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
//         >
//           Transform Your Enterprise with
//           <span className="text-blue-300"> Intelligent Cloud & AI</span> Solutions
//         </h1>
//         <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//           Expert consulting in Salesforce, Azure CRM, and Data Science to drive
//           your business forward with measurable results.
//         </p>
//         <button
//           onClick={scrollToContact}
//           className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
//         >
//           <span>Schedule a Consultation</span>
//           <ArrowRight size={20} />
//         </button>
//       </div>
//     </section>
//   );
// }


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
        <motion.button
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
        </motion.button>
      </div>
    </section>
  );
}
