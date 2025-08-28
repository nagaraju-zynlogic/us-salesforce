// import React from 'react';
// import { Cloud, DatabaseZap, BrainCircuit, type LucideIcon } from 'lucide-react';

// // --- Type Definitions ---
// interface Service {
//   icon: LucideIcon;
//   title: string;
//   description: string;
//   highlight?: boolean;
// }

// // --- Component Data ---
// // Using the titles you provided: Salesforce, Azure CRM, Data Science and AI
// const servicesData: Service[] = [
//   {
//     icon: Cloud,
//     title: 'Salesforce Services',
//     description: 'We deliver comprehensive Salesforce solutions to empower your business growth and enhance customer relations.',
//   },
//   {
//     icon: DatabaseZap,
//     title: 'Azure CRM Solutions',
//     description: 'Leverage Microsoft Azure to build powerful, scalable CRM platforms tailored to your specific business needs.',
//   },
//   {
//     icon: BrainCircuit,
//     title: 'Data Science and AI',
//     description: 'Unlock insights from your data and drive innovation with our expert data science and AI implementation services.',
//     highlight: true, // This will apply the special styling
//   },
//   {
//     icon: Cloud, // Using a generic icon for the fourth card
//     title: 'Custom Cloud Applications',
//     description: 'Transform your business with expert cloud implementation. Our team efficiently configures and customizes cloud platforms.',
//   },
// ];

// // --- The Main Component ---
// export const ServicesSection = () => {
//   return (
//     <section className="bg-slate-50/70 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Header Section */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//             Our Services
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
//             At Ksolves, we deliver comprehensive solutions to empower your business growth. Check our complete range of services.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {servicesData.map((service, index) => (
//             <div
//               key={index}
//               className={`rounded-2xl p-8 text-center transition-all duration-300
//                 ${
//                   service.highlight
//                     ? 'bg-blue-50 ring-2 ring-blue-200 shadow-lg'
//                     : 'bg-white ring-1 ring-slate-200/80 shadow-sm hover:shadow-md hover:ring-slate-300'
//                 }`}
//             >
//               <div
//                 className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl
//                   ${service.highlight ? 'bg-blue-100' : 'bg-slate-100'}`}
//               >
//                 <service.icon
//                   className={`h-8 w-8 ${service.highlight ? 'text-blue-600' : 'text-slate-700'}`}
//                   aria-hidden="true"
//                 />
//               </div>
//               <h3 className="mt-6 text-lg font-semibold text-slate-900">{service.title}</h3>
//               <p className="mt-2 text-base text-slate-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;






import React from 'react';

// --- Type Definitions ---
// Updated to use imageUrl instead of an icon component
interface Service {
  imageUrl: string;
  title: string;
  description: string;
}

// --- Component Data ---
// Updated with image URLs and removed the static 'highlight' property
const servicesData: Service[] = [
  {
    imageUrl: 'Salesforce.com_logo.svg',
    title: 'Salesforce Services',
    description:
      'We deliver comprehensive Salesforce solutions to empower your business growth and enhance customer relations. Our experts will help you build a seamless customer experience and automate your sales process.',
  },
  {
    imageUrl: 'Azure.png',
    title: 'Azure CRM Solutions',
    description:
      'Leverage Microsoft Azure to build powerful, scalable CRM platforms tailored to your specific business needs. Our experienced team will help you migrate your CRM to the cloud and integrate it with other Microsoft products.',
  },
  {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
    title: 'Data Science and AI',
    description:
      'Unlock insights from your data and drive innovation with our expert data science and AI implementation services. Our team will help you build predictive models, develop machine learning algorithms, and create custom data visualizations.',
  },
  {
    imageUrl: 'https://gimgs2.nohat.cc/thumb/f/640/cloud-computing-cloud-storage-animated-gif--m2i8d3N4i8G6Z5b1.jpg',
    title: 'Custom Cloud Applications',
    description:
      'Transform your business with expert cloud implementation. Our team efficiently configures and customizes cloud platforms to meet your specific needs. We will help you build scalable, secure, and cost-effective cloud solutions that drive business growth.',
  },
];

// --- The Main Component ---
export const ServicesSection = () => {
  return (
    <section id='services-section' className="bg-slate-50/70 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#104569] sm:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            At Ksolves, we deliver comprehensive solutions to empower your business growth. Check our complete range of services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              // UPDATED: Classes now apply a uniform hover effect to all cards
              className="rounded-2xl bg-white p-8 text-center ring-1 ring-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:ring-slate-300"
            >
              {/* UPDATED: Switched from icon to img tag */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} icon`}
                  className="h-11 w-11 object-contain"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-start text-[#104569]">{service.title}</h3>
              <p className="mt-2 text-base text-start text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;