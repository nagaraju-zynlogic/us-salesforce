// // import React from 'react';
// // import { Cloud, Database, Brain, Settings } from 'lucide-react';

// // const services = [
// //   {
// //     icon: Settings,
// //     title: 'Salesforce Consulting',
// //     description: 'We architect and implement Salesforce solutions that streamline your sales, service, and marketing efforts, creating a unified view of your customer.'
// //   },
// //   {
// //     icon: Cloud,
// //     title: 'Azure CRM Dynamics 365',
// //     description: 'Leverage the power of Microsoft\'s ecosystem. We customize and deploy Dynamics 365 to optimize your customer relationships and business processes.'
// //   },
// //   {
// //     icon: Database,
// //     title: 'Data Science & Analytics',
// //     description: 'Unlock the power of your data. Our data scientists provide predictive modeling, machine learning solutions, and actionable insights to inform your strategy.'
// //   },
// //   {
// //     icon: Brain,
// //     title: 'AI Integration',
// //     description: 'From chatbots to intelligent automation, we integrate cutting-edge AI to enhance efficiency, personalize customer experiences, and create a competitive advantage.'
// //   }
// // ];

// // export default function Services() {
// //   return (
// //     <section id="services" className="py-20 bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Consulting Services</h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             Comprehensive technology solutions designed to transform your business operations and accelerate growth
// //           </p>
// //         </div>
        
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {services.map((service, index) => (
// //             <div 
// //               key={index}
// //               className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
// //             >
// //               <div className="flex items-center mb-6">
// //                 <div className="bg-blue-100 p-4 rounded-lg mr-4">
// //                   <service.icon className="text-blue-600" size={32} />
// //                 </div>
// //                 <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
// //               </div>
// //               <p className="text-gray-600 leading-relaxed">
// //                 {service.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



import React from 'react';
import { Cloud, Database, Brain, Settings } from 'lucide-react';
import { motion } from "framer-motion";

const services = [
  {
    icon: Settings,
    title: 'Salesforce Consulting',
    description: 'We architect and implement Salesforce solutions that streamline your sales, service, and marketing efforts, creating a unified view of your customer.',
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Cloud,
    title: 'Azure CRM Dynamics 365',
    description: 'Leverage the power of Microsoft\'s ecosystem. We customize and deploy Dynamics 365 to optimize your customer relationships and business processes.',
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: Database,
    title: 'Data Science & Analytics',
    description: 'Unlock the power of your data. Our data scientists provide predictive modeling, machine learning solutions, and actionable insights to inform your strategy.',
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'From chatbots to intelligent automation, we integrate cutting-edge AI to enhance efficiency, personalize customer experiences, and create a competitive advantage.',
    gradient: "from-purple-500 to-fuchsia-500"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-md">Our Consulting Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions crafted to <span className="text-blue-600 font-semibold">transform</span> your operations and <span className="text-pink-600 font-semibold">accelerate</span> growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-gray-200 overflow-hidden`}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content wrapper */}
              <div className="relative z-10">
                <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl inline-flex mb-6 shadow-lg`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




// import React from "react";
// import { Cloud, Database, Brain, Settings } from "lucide-react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     icon: Settings,
//     title: "Salesforce Consulting",
//     description:
//       "We architect and implement Salesforce solutions that streamline your sales, service, and marketing efforts, creating a unified view of your customer.",
//     gradient: "from-pink-500 to-rose-500",
//     image:
//       "https://atwocloud.com/wp-content/uploads/2024/11/Salesforce_consulting-1.png", // Salesforce-like dashboard
//   },
//   {
//     icon: Cloud,
//     title: "Azure CRM Dynamics 365",
//     description:
//       "Leverage the power of Microsoft's ecosystem. We customize and deploy Dynamics 365 to optimize your customer relationships and business processes.",
//     gradient: "from-blue-500 to-indigo-500",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLs73B0ZbiiLMo0Tzez7LFcYrI9gwQZiJUoKeXtD95WH3SLbNKm1lBmfHVZzUeKpH6O4&usqp=CAU", // Cloud/servers
//   },
//   {
//     icon: Database,
//     title: "Data Science & Analytics",
//     description:
//       "Unlock the power of your data. Our data scientists provide predictive modeling, machine learning solutions, and actionable insights to inform your strategy.",
//     gradient: "from-green-500 to-emerald-500",
//     image:
//       "https://skillfloor.com/blog/uploads/images/202306/image_870x_64797db905265.jpg", // Data visualization
//   },
//   {
//     icon: Brain,
//     title: "AI Integration",
//     description:
//       "From chatbots to intelligent automation, we integrate cutting-edge AI to enhance efficiency, personalize customer experiences, and create a competitive advantage.",
//     gradient: "from-purple-500 to-fuchsia-500",
//     image:
//       "https://www.ag5.com/wp-content/uploads/2023/03/1-3.jpg", // AI/robotic concept
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
//     >
//       {/* Decorative background elements */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-md">
//             Our Consulting Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Cutting-edge technology solutions crafted to{" "}
//             <span className="text-blue-600 font-semibold">transform</span> your
//             operations and{" "}
//             <span className="text-pink-600 font-semibold">accelerate</span>{" "}
//             growth.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="relative group rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 overflow-hidden"
//               style={{
//                 backgroundImage: `url(${service.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               {/* Dark overlay for readability */}
//               <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />

//               {/* Gradient border effect */}
//               <div
//                 className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
//               />

//               {/* Content wrapper */}
//               <div className="relative z-10 p-8">
//                 <div
//                   className={`bg-gradient-to-r ${service.gradient} p-4 rounded-xl inline-flex mb-6 shadow-lg`}
//                 >
//                   <service.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-black leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
