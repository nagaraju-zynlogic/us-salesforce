// // // // import React from 'react';
// // // // import { Award, Calendar, LifeBuoy, ShieldCheck, type LucideProps } from 'lucide-react';

// // // // // Define the types for our card data
// // // // type CardData = {
// // // //   id: number;
// // // //   type: 'partner' | 'metric' | 'feature';
// // // //   value?: string;
// // // //   title: string;
// // // //   description: string;
// // // //   icon?: keyof typeof iconMap;
// // // //   imageUrl?: string;
// // // //   className?: string;
// // // // };

// // // // // Map icon names to actual Lucide icon components
// // // // const iconMap = {
// // // //   Award: (props: LucideProps) => <Award {...props} />,
// // // //   Calendar: (props: LucideProps) => <Calendar {...props} />,
// // // //   LifeBuoy: (props: LucideProps) => <LifeBuoy {...props} />,
// // // //   ShieldCheck: (props: LucideProps) => <ShieldCheck {...props} />,
// // // // };

// // // // // --- Data for the cards ---
// // // // const statsData: CardData[] = [
// // // //   {
// // // //     id: 1,
// // // //     type: 'partner',
// // // //     title: 'Salesforce Summit Consulting Partner',
// // // //     description: 'Your Top-Tier Partner for Your Success',
// // // //     imageUrl: 'https://i.imgur.com/lJ4a2lH.png', // Using a placeholder Salesforce Partner logo
// // // //     className: 'lg:row-span-2',
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     type: 'feature',
// // // //     icon: 'Award',
// // // //     title: 'Extensive Salesforce Expertise',
// // // //     description: '100+ Salesforce experts with 300+ Salesforce certifications',
// // // //     className: 'lg:col-span-2',
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     type: 'metric',
// // // //     value: '89.3%',
// // // //     title: 'Repeat Business Rate',
// // // //     description: 'unmatched Salesforce expertise and customer satisfaction.',
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     type: 'feature',
// // // //     icon: 'Calendar',
// // // //     value: '12+',
// // // //     title: 'Years of Industry Expertise',
// // // //     description: 'Help businesses to grow, enhances customer experiences, and boost ROI.',
// // // //     className: 'lg:col-span-2',
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     type: 'feature',
// // // //     icon: 'LifeBuoy',
// // // //     title: 'Ongoing support & Maintenance',
// // // //     description: 'Ongoing maintenance keeps your Salesforce apps secure and aligned with your needs.',
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     type: 'metric',
// // // //     value: '90%',
// // // //     title: 'Client retention rate',
// // // //     description: 'Highlighting our exceptional Salesforce service.',
// // // //   },
// // // //   {
// // // //     id: 7,
// // // //     type: 'metric',
// // // //     value: '100%',
// // // //     title: 'Global Salesforce Support',
// // // //     description: 'Cover all time zones to support and collaborate across geographies.',
// // // //   },
// // // //   {
// // // //     id: 8,
// // // //     type: 'metric',
// // // //     value: '100%',
// // // //     title: 'in-house code development',
// // // //     description: 'Reduce the risks associated with third-party code.',
// // // //   },
// // // //   {
// // // //     id: 9,
// // // //     type: 'metric',
// // // //     value: '99%',
// // // //     title: 'On-Time Project Delivery',
// // // //     description: 'Use AI-powered tools to ensure on-time project delivery.',
// // // //   },
// // // //   {
// // // //     id: 10,
// // // //     type: 'feature',
// // // //     icon: 'ShieldCheck',
// // // //     title: 'Quality assurance',
// // // //     description: 'Conduct in-house development and testing for reliable, efficient Salesforce solutions.',
// // // //   },
// // // // ];


// // // // // --- The Main Component ---
// // // // export const SalesforceStatsGrid = () => {
// // // //   return (
// // // //     <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
// // // //       <div className="mx-auto max-w-7xl">
// // // //         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
// // // //           {statsData.map((card) => (
// // // //             <div
// // // //               key={card.id}
// // // //               className={`flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 ${card.className || ''}`}
// // // //             >
// // // //               {card.type === 'partner' && card.imageUrl && (
// // // //                 <div className="flex h-full flex-col items-center justify-center text-center">
// // // //                   <img src={card.imageUrl} alt={card.title} className="mb-4 h-20 w-20 object-contain" />
// // // //                   <h3 className="text-lg font-semibold text-slate-800">{card.title}</h3>
// // // //                   <p className="mt-1 text-sm text-slate-600">{card.description}</p>
// // // //                 </div>
// // // //               )}

// // // //               {(card.type === 'metric' || (card.type === 'feature' && card.value)) && (
// // // //                 <div>
// // // //                   <p className="text-4xl font-bold text-slate-900">{card.value}</p>
// // // //                 </div>
// // // //               )}
              
// // // //               {card.type === 'feature' && card.icon && (
// // // //                 <div>
// // // //                   {React.createElement(iconMap[card.icon], { className: "h-8 w-8 text-blue-600" })}
// // // //                 </div>
// // // //               )}

// // // //               <div className="mt-auto pt-4">
// // // //                 <h3 className="text-base font-semibold text-slate-800">{card.title}</h3>
// // // //                 <p className="mt-1 text-sm text-slate-600">{card.description}</p>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SalesforceStatsGrid;



// // // import React from 'react';
// // // import { Award, Calendar, LifeBuoy, type LucideProps } from 'lucide-react';

// // // // Define the types for our card data
// // // type CardData = {
// // //   id: number;
// // //   type: 'partner' | 'metric' | 'feature';
// // //   value?: string;
// // //   title: string;
// // //   description: string;
// // //   icon?: keyof typeof iconMap;
// // //   imageUrl?: string;
// // //   className?: string;
// // // };

// // // // Map icon names to actual Lucide icon components
// // // const iconMap = {
// // //   Award: (props: LucideProps) => <Award {...props} />,
// // //   Calendar: (props: LucideProps) => <Calendar {...props} />,
// // //   LifeBuoy: (props: LucideProps) => <LifeBuoy {...props} />,
// // // };

// // // // --- Data for the 6 cards ---
// // // const statsData: CardData[] = [
// // //   {
// // //     id: 1,
// // //     type: 'partner',
// // //     title: 'Salesforce Summit Consulting Partner',
// // //     description: 'Your Top-Tier Partner for Your Success',
// // //     imageUrl: 'https://i.imgur.com/lJ4a2lH.png', // Placeholder Salesforce Partner logo
// // //     className: 'md:row-span-2', // Spans 2 rows on medium screens and up
// // //   },
// // //   {
// // //     id: 2,
// // //     type: 'feature',
// // //     icon: 'Award',
// // //     title: 'Extensive Salesforce Expertise',
// // //     description: '100+ Salesforce experts with 300+ Salesforce certifications',
// // //   },
// // //   {
// // //     id: 3,
// // //     type: 'metric',
// // //     value: '89.3%',
// // //     title: 'Repeat Business Rate',
// // //     description: 'unmatched Salesforce expertise and customer satisfaction.',
// // //   },
// // //   {
// // //     id: 4,
// // //     type: 'metric',
// // //     value: '90%',
// // //     title: 'Client retention rate',
// // //     description: 'Highlighting our exceptional Salesforce service.',
// // //   },
// // //   {
// // //     id: 5,
// // //     type: 'feature',
// // //     icon: 'Calendar',
// // //     value: '12+',
// // //     title: 'Years of Industry Expertise',
// // //     description: 'Help businesses to grow, enhances customer experiences, and boost ROI.',
// // //   },
// // //   {
// // //     id: 6,
// // //     type: 'feature',
// // //     icon: 'LifeBuoy',
// // //     title: 'Ongoing support & Maintenance',
// // //     description: 'Ongoing maintenance keeps your Salesforce apps secure and aligned with your needs.',
// // //   },
// // //   {
// // //     id: 7,
// // //     type: 'feature',
// // //     icon: 'Award',
// // //     title: 'Salesforce Summit Consulting Partner',
// // //     description: 'Your Top-Tier Partner for Your Success',
    
// // //     // Placeholder Salesforce Partner logo}
// // //   },
// // // ];

// // // // --- The Main Component ---
// // // export const SalesforceStatsGrid = () => {
// // //   return (
// // //     <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
// // //       <div className="mx-auto max-w-7xl">
// // //         {/* Added the title */}
// // //         <h2 className="mb-10 text-center text-4xl font-bold text-slate-900">Why Work With Ksolves?</h2>

// // //         {/* Adjusted grid-cols to match the new 1+3 layout */}
// // //         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
// // //           {statsData.map((card) => (
// // //             <div
// // //               key={card.id}
// // //               className={`flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 ${card.className || ''}`}
// // //             >
// // //               {card.type === 'partner' && card.imageUrl && (
// // //                 <div className="flex h-full flex-col items-center justify-center text-center">
// // //                   <img src={card.imageUrl} alt={card.title} className="mb-4 h-20 w-20 object-contain" />
// // //                   <h3 className="text-lg font-semibold text-slate-800">{card.title}</h3>
// // //                   <p className="mt-1 text-sm text-slate-600">{card.description}</p>
// // //                 </div>
// // //               )}

// // //               {/* Only show value if it's a metric or a feature with a value */}
// // //               {(card.type === 'metric' || (card.type === 'feature' && card.value)) && (
// // //                 <div className="flex items-center">
// // //                   {/* Render icon if available before the value for feature cards */}
// // //                   {card.type === 'feature' && card.icon && (
// // //                     <span className="mr-2">
// // //                       {React.createElement(iconMap[card.icon], { className: "h-8 w-8 text-blue-600" })}
// // //                     </span>
// // //                   )}
// // //                   <p className="text-4xl font-bold text-slate-900">{card.value}</p>
// // //                 </div>
// // //               )}
              
// // //               {/* Render icon for feature cards without a value */}
// // //               {card.type === 'feature' && card.icon && !card.value && (
// // //                 <div>
// // //                   {React.createElement(iconMap[card.icon], { className: "h-8 w-8 text-blue-600" })}
// // //                 </div>
// // //               )}

// // //               <div className="mt-auto pt-4">
// // //                 <h3 className="text-base font-semibold text-slate-800">{card.title}</h3>
// // //                 <p className="mt-1 text-sm text-slate-600">{card.description}</p>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SalesforceStatsGrid;


// // import React from 'react';
// // import { Award, Calendar, LifeBuoy, type LucideProps } from 'lucide-react';

// // // Define the types for our card data
// // type CardData = {
// //   id: number;
// //   type: 'partner' | 'metric' | 'feature';
// //   value?: string;
// //   title: string;
// //   description: string;
// //   icon?: keyof typeof iconMap;
// //   imageUrl?: string;
// //   className?: string;
// // };

// // // Map icon names to actual Lucide icon components
// // const iconMap = {
// //   Award: (props: LucideProps) => <Award {...props} />,
// //   Calendar: (props: LucideProps) => <Calendar {...props} />,
// //   LifeBuoy: (props: LucideProps) => <LifeBuoy {...props} />,
// // };

// // // --- Data for the 6 cards ---
// // const statsData: CardData[] = [
// // //   {
// // //     id: 1,
// // //     type: 'partner',
// // //     title: 'Salesforce Summit Consulting Partner',
// // //     description: 'Your Top-Tier Partner for Your Success',
// // //     imageUrl: 'https://i.imgur.com/lJ4a2lH.png', // Placeholder Salesforce Partner logo
// // //     className: 'md:row-span-2', // Spans 2 rows on medium screens and up
// // //   },
// // {
// //   id: 1,
// //   type: 'partner',
// //   title: 'Expert Consulting Services',
// //   description: 'Specializing in Salesforce, Azure CRM, Data Science, and AI solutions to drive your success.',
// //   imageUrl: 'https://cdn-icons-png.flaticon.com/512/7991/7991054.png', // Online image for tech/AI consulting
// //   className: 'md:row-span-2', // Spans 2 rows on medium screens and up
// // },
// //   {
// //     id: 2,
// //     type: 'feature',
// //     icon: 'Award',
// //     title: 'Extensive Salesforce Expertise',
// //     description: '100+ Salesforce experts with 300+ Salesforce certifications',
// //   },
  
  
// //   {
// //     id: 6,
// //     type: 'feature',
// //     icon: 'LifeBuoy',
// //     title: 'Ongoing support & Maintenance',
// //     description: 'Ongoing maintenance keeps your Salesforce apps secure and aligned with your needs.',
// //   },
// //   {
// //     id: 7,
// //     type: 'feature',
// //     icon: 'LifeBuoy',
// //     title: 'Ongoing support & Maintenance',
// //     description: 'Ongoing maintenance keeps your Salesforce apps secure and aligned with your needs.',
// //   },
// //   {
// //     id: 5,
// //     type: 'metric',
// //     value: '12+ years',
// //     title: 'Years of Industry Expertise',
// //     description: 'Help businesses to grow, enhances customer experiences, and boost ROI.',
// //   },
// //   {
// //     id: 3,
// //     type: 'metric',
// //     value: '89.3%',
// //     title: 'Repeat Business Rate',
// //     description: 'unmatched Salesforce expertise and customer satisfaction.',
// //   },
// //   {
// //     id: 4,
// //     type: 'metric',
// //     value: '90%',
// //     title: 'Client retention rate',
// //     description: 'Highlighting our exceptional Salesforce service.',
// //   },
// // ];

// // // --- The Main Component ---
// // export const SalesforceStatsGrid = () => {
// //   return (
// //     // UPDATED: Removed 'min-h-screen' to eliminate extra bottom space
// //     <div className="bg-slate-50 p-4 sm:p-6 lg:p-8">
// //       <div className="mx-auto max-w-7xl">
// //         <h2 className="mb-10 text-center text-4xl font-bold text-[#104569]">Why Work With Us?</h2>

// //         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
// //           {statsData.map((card) => (
// //             <div
// //               key={card.id}
// //               className={`flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 ${card.className || ''}`}
// //             >
// //               {card.type === 'partner' && card.imageUrl && (
// //                 <div className="flex h-full flex-col items-center justify-center text-center">
// //                   <img src={card.imageUrl} alt={card.title} className="mb-4 h-20 w-20 object-contain" />
// //                   <h3 className="text-lg font-semibold text-slate-800">{card.title}</h3>
// //                   <p className="mt-1 text-sm text-slate-600">{card.description}</p>
// //                 </div>
// //               )}

// //               {(card.type === 'metric' || (card.type === 'feature' && card.value)) && (
// //                 <div className="flex items-center">
// //                   {card.type === 'feature' && card.icon && (
// //                     <span className="mr-2">
// //                       {React.createElement(iconMap[card.icon], { className: "h-8 w-8 text-blue-600" })}
// //                     </span>
// //                   )}
// //                   <p className="text-4xl font-bold text-slate-900">{card.value}</p>
// //                 </div>
// //               )}
              
// //               {card.type === 'feature' && card.icon && !card.value && (
// //                 <div>
// //                   {React.createElement(iconMap[card.icon], { className: "h-8 w-8 text-blue-600" })}
// //                 </div>
// //               )}

// //               <div className="mt-auto pt-4">
// //                 <h3 className="text-base font-semibold text-slate-800">{card.title}</h3>
// //                 <p className="mt-1 text-sm text-slate-600">{card.description}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SalesforceStatsGrid;



// import React from 'react';
// import { Award, Calendar, Database, LifeBuoy, type LucideProps,} from 'lucide-react';

// // Define the types for our card data
// type CardData = {
//   id: number;
//   type: 'partner' | 'metric' | 'feature';
//   value?: string;
//   title: string;
//   description: string;
//   icon?: keyof typeof iconMap;
//   imageUrl?: string;
//   className?: string;
// };

// // Map icon names to actual Lucide icon components
// // UPDATED: Added 'Calendar' icon for the "Years of Expertise" card
// const iconMap = {
//   Award: (props: LucideProps) => <Award {...props} />,
//   Calendar: (props: LucideProps) => <Calendar {...props} />,
//   LifeBuoy: (props: LucideProps) => <LifeBuoy {...props} />,
// };

// // --- Data for the cards (Cleaned and Corrected) ---
// const statsData: CardData[] = [
//   {
//     id: 1,
//     type: 'partner',
//     title: 'Expert Consulting Services',
//     description:
//       'Specializing in Salesforce, Azure CRM, Data Science, and AI solutions to drive your business success and growth. We also provide expert consulting services in Information Technologies, and have been working with nonprofits for over 30 years.',
//     imageUrl: 'https://cyntexa.com/wp-content/uploads/2024/09/unlock-potential-light-1.webp',
//     className: 'md:row-span-2',
//   },
//   {
//     id: 2,
//     type: 'feature',
//     icon: 'Award',
//     title: 'Extensive Salesforce Expertise',
//     description: '100+ Salesforce experts with 300+ certifications',
//   },
  
  
//   {
//     id: 6,
//     type: 'feature',
//     icon: 'LifeBuoy',
//     title: 'Ongoing Support & Maintenance',
//     description: 'Keeping your apps secure and aligned with your needs.',
//   },
//   {
//     id: 7,
//     type: 'feature',
//     icon: 'Database',
//     title: 'Salesforce Implementation',
//     description: 'Transform your business with expert cloud implementation.',
//   },
//   {
//     id: 5,
//     type: 'metric', // Changed to 'feature' to allow an icon
//     // icon: 'Calendar',
//     value: '12+ years',
//     title: 'Years of Industry Expertise',
//     description: 'Helping businesses grow and enhance customer experiences.',
//   },
//   {
//     id: 3,
//     type: 'metric',
//     value: '89.3%',
//     title: 'Repeat Business Rate',
//     description: 'Unmatched expertise and customer satisfaction.',
//   },
//   {
//     id: 4,
//     type: 'metric',
//     value: '90%',
//     title: 'Client Retention Rate',
//     description: 'Highlighting our exceptional customer service.',
//   },
// ];

// // --- The Main Component ---
// export const SalesforceStatsGrid = () => {
//   return (
//     <div className="bg-slate-50 p-4 sm:p-6 lg:p-8">
//       <div className="mx-auto max-w-7xl">
//         <h2 className="mb-10 text-center text-4xl font-bold text-[#104569]">Why Work With Us?</h2>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {statsData.map((card) => (
//             <div
//               key={card.id}
//               className={`flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 ${card.className || ''}`}
//             >
//               {card.type === 'partner' && card.imageUrl && (
//                 <div className="flex h-full flex-col items-center justify-center text-center">
//                   <img src={card.imageUrl} alt={card.title} className="mb-4 h-20 w-20 object-contain" />
//                   <h3 className="text-lg font-semibold text-slate-800 text-start">{card.title}</h3>
//                   <p className="mt-1 text-sm text-slate-600 text-start">{card.description}</p>
                  
//                 </div>
//               )}

//               {(card.type === 'metric' || (card.type === 'feature' && card.value)) && (
//                 <div className="flex items-center">
//                   {card.type === 'feature' && card.icon && (
//                     <span className="mr-2">
//                       {React.createElement(iconMap[card.icon], { className: "h-8 w-8 text-blue-600" })}
//                     </span>
//                   )}
//                   <p style={{color: '#2563eb'}} className="text-4xl font-bold">{card.value}</p>
//                 </div>
//               )}
              
//               {card.type === 'feature' && card.icon && !card.value && (
//                 <div>
//                   {React.createElement(iconMap[card.icon], { className: "h-8 w-8 text-blue-600" })}
//                 </div>
//               )}

//               {/* UPDATED: This block will now only render if the card is NOT a partner card */}
//               {card.type !== 'partner' && (
//                 <div className="mt-auto pt-4">
//                   <h3 className="text-base font-semibold text-slate-800">{card.title}</h3>
//                   <p className="mt-1 text-sm text-slate-600">{card.description}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalesforceStatsGrid;







import React from 'react';
import { Award, Calendar, Database, LifeBuoy, type LucideProps } from 'lucide-react';

// Define the types for our card data
type CardData = {
  id: number;
  type: 'partner' | 'metric' | 'feature';
  value?: string;
  title: string;
  description: string;
  icon?: keyof typeof iconMap;
  imageUrl?: string;
  className?: string;
};

// Map icon names to actual Lucide icon components
// UPDATED: Added 'Database' icon to the map
const iconMap = {
  Award: (props: LucideProps) => <Award {...props} />,
  Calendar: (props: LucideProps) => <Calendar {...props} />,
  LifeBuoy: (props: LucideProps) => <LifeBuoy {...props} />,
  Database: (props: LucideProps) => <Database {...props} />, // FIX: Added the missing icon
};

// --- Data for the cards ---
const statsData: CardData[] = [
  {
    id: 1,
    type: 'partner',
    title: 'Expert Consulting Services',
    description:
      'Specializing in Salesforce, Azure CRM, Data Science, and AI solutions to drive your business success and growth. We also provide expert consulting services in Information Technologies, and have been working with nonprofits for over 30 years.',
    imageUrl: 'salesforce-offerings.png',
    className: 'md:row-span-2',
  },
  {
    id: 2,
    type: 'feature',
    icon: 'Award',
    title: 'Extensive Salesforce Expertise',
    description: '100+ Salesforce experts with 300+ certifications',
  },
  {
    id: 6,
    type: 'feature',
    icon: 'LifeBuoy',
    title: 'Ongoing Support & Maintenance',
    description: 'Keeping your apps secure and aligned with your needs.',
  },
  {
    id: 7,
    type: 'feature',
    icon: 'Database', // This card will now work correctly
    title: 'Salesforce Implementation',
    description: 'Transform your business with expert cloud implementation.',
  },
  {
    id: 5,
    type: 'metric',
    value: '12+ years',
    title: 'Years of Industry Expertise',
    description: 'Helping businesses grow and enhance customer experiences.',
  },
  {
    id: 3,
    type: 'metric',
    value: '89.3%',
    title: 'Repeat Business Rate',
    description: 'Unmatched expertise and customer satisfaction.',
  },
  {
    id: 4,
    type: 'metric',
    value: '90%',
    title: 'Client Retention Rate',
    description: 'Highlighting our exceptional customer service.',
  },
];

// --- The Main Component ---
export const SalesforceStatsGrid = () => {
  return (
    <div className="bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#104569]">Why Work With Us?</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 ${card.className || ''}`}
            >
              {card.type === 'partner' && card.imageUrl && (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <img src={card.imageUrl} alt={card.title} className="mb-4 h-20 w-20 object-contain" />
                  <h3 className="text-lg font-semibold text-slate-800 text-start">{card.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 text-start">{card.description}</p>
                </div>
              )}

              {(card.type === 'metric' || (card.type === 'feature' && card.value)) && (
                <div className="flex items-center">
                  {card.type === 'feature' && card.icon && (
                    <span className="mr-2">
                      {React.createElement(iconMap[card.icon], { className: "h-8 w-8 text-blue-600" })}
                    </span>
                  )}
                  <p style={{ color: '#2563eb' }} className="text-4xl font-bold">{card.value}</p>
                </div>
              )}

              {card.type === 'feature' && card.icon && !card.value && (
                <div>
                  {React.createElement(iconMap[card.icon], { className: "h-8 w-8 text-blue-600" })}
                </div>
              )}

              {card.type !== 'partner' && (
                <div className="mt-auto pt-4">
                  <h3 className="text-base font-semibold text-slate-800">{card.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{card.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesforceStatsGrid;