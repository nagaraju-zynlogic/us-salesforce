// // import React from 'react';
// // import { Menu, X } from 'lucide-react';

// // interface HeaderProps {
// //   mobileMenuOpen: boolean;
// //   setMobileMenuOpen: (open: boolean) => void;
// // }

// // export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
// //   return (
// //     <header className="bg-white shadow-sm fixed w-full top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center py-4">
// //           <div className="flex items-center">
// //             <span className="text-2xl font-bold text-blue-900">IntelliSolutions</span>
// //           </div>
          
// //           <nav className="hidden md:flex space-x-8">
// //             <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
// //             <a href="#approach" className="text-gray-700 hover:text-blue-600 transition-colors">Our Approach</a>
// //             <a href="#experts" className="text-gray-700 hover:text-blue-600 transition-colors">Experts</a>
// //             <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
// //           </nav>
          
// //           <button
// //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //             className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
// //           >
// //             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //           </button>
// //         </div>
        
// //         {/* Mobile menu */}
// //         {mobileMenuOpen && (
// //           <div className="md:hidden py-4 border-t border-gray-200">
// //             <div className="flex flex-col space-y-4">
// //               <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
// //               <a href="#approach" className="text-gray-700 hover:text-blue-600 transition-colors">Our Approach</a>
// //               <a href="#experts" className="text-gray-700 hover:text-blue-600 transition-colors">Experts</a>
// //               <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }



// import React from 'react';
// import { Menu, X } from 'lucide-react';

// interface HeaderProps {
//   mobileMenuOpen: boolean;
//   setMobileMenuOpen: (open: boolean) => void;
// }

// export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
//   return (
//     <header className="bg-[#104569] fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top Row */}
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="flex items-center">
//             <span className="text-2xl font-bold tracking-wide">
//               <span className="text-white">DATA</span>
//               <span className="text-green-300">GEEKS</span>
//               <span className="text-white">LAB</span>
//             </span>
//           </div>

//           {/* Top Right Links */}
//           {/* <div className="hidden md:block text-sm text-white/70 mr-2">
//             LEARN FROM US | CONTACT
//           </div> */}
//         </div>
//         {/* Bottom Row: Nav */}
//         <div className="flex justify-end items-center">
//           <nav className="hidden md:flex space-x-8 font-bold">
//             <a href="#home" className="text-blue-200">HOME</a>
//             <a href="#howwework" className="text-white hover:text-green-200 transition-colors">HOW WE WORK</a>
//             <a href="#whoweare" className="text-white hover:text-green-200 transition-colors">WHO WE ARE</a>
//             <a href="#whohelped" className="text-white hover:text-green-200 transition-colors">WHO WE’VE HELPED</a>
//           </nav>
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden p-2 rounded-md text-white hover:text-green-300 transition-colors"
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 border-t border-blue-900">
//             <div className="flex flex-col space-y-4">
//               <a href="#home" className="text-blue-200">HOME</a>
//               <a href="#howwework" className="text-white hover:text-green-200 transition-colors">HOW WE WORK</a>
//               <a href="#whoweare" className="text-white hover:text-green-200 transition-colors">WHO WE ARE</a>
//               <a href="#whohelped" className="text-white hover:text-green-200 transition-colors">WHO WE’VE HELPED</a>
//               {/* <span className="text-white/70 text-sm mt-2">LEARN FROM US | CONTACT</span> */}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }










import React from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  return (
    <header className="bg-[#104569] fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Row Layout */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wide">
              <span className="text-white">DATA</span>
              <span className="text-green-300">GEEKS</span>
              <span className="text-white">LAB</span>
            </span>
          </div>

          {/* Nav + Mobile Toggle */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8 font-bold">
              <a href="#home" className="text-blue-200">
                HOME
              </a>
              <a
                href="#howwework"
                className="text-white hover:text-green-200 transition-colors"
              >
                HOW WE WORK
              </a>
              <a
                href="#whoweare"
                className="text-white hover:text-green-200 transition-colors"
              >
                WHO WE ARE
              </a>
              <a
                href="#whohelped"
                className="text-white hover:text-green-200 transition-colors"
              >
                WHO WE’VE HELPED
              </a>
            </nav>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-white hover:text-green-300 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu (below row) */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-900">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-blue-200">
                HOME
              </a>
              <a
                href="#howwework"
                className="text-white hover:text-green-200 transition-colors"
              >
                HOW WE WORK
              </a>
              <a
                href="#whoweare"
                className="text-white hover:text-green-200 transition-colors"
              >
                WHO WE ARE
              </a>
              <a
                href="#whohelped"
                className="text-white hover:text-green-200 transition-colors"
              >
                WHO WE’VE HELPED
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
