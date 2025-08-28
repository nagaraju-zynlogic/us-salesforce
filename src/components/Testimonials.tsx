// import React from "react";
// import Slider from "react-slick";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// // Testimonials Data
// const testimonials = [
//   {
//     quote:
//       "Data geeks lab has supported our nonprofit work for the past 3 years. TJ and her team are incredible thought partners and provide timely and effective support. I’ve had the pleasure of working with DGL recently, and we appreciate the high level of Salesforce technical expertise that they bring to the table.",
//     name: "Rodrigo Sandoval",
//     role: "Operations Director, Beneficial State Foundation"
//   },
//   {
//     quote:
//       "Working with DGL has been transformative. Their AI integration streamlined our processes and saved countless hours for our staff.",
//     name: "Sophia Martinez",
//     role: "Director of Innovation, Global Nonprofit"
//   },
//   {
//     quote:
//       "The Salesforce consulting team provided outstanding expertise, enabling us to scale our impact faster than we thought possible.",
//     name: "James Carter",
//     role: "CEO, Tech for Good"
//   }
// ];

// // Custom Arrows
// const PrevArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute left-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-white/20 -translate-y-1/2 top-1/2"
//   >
//     <ChevronLeft className="text-white" size={28} />
//   </button>
// );

// const NextArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-white/20 -translate-y-1/2 top-1/2"
//   >
//     <ChevronRight className="text-white" size={28} />
//   </button>
// );

// export default function Testimonials() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     appendDots: (dots) => (
//       <div>
//         <ul className="flex justify-center mt-6"> {dots} </ul>
//       </div>
//     ),
//     customPaging: () => (
//       <div className="w-3 h-3 bg-white/60 rounded-full hover:bg-white"></div>
//     )
//   };

//   return (
//     <section
//       className="relative py-24 bg-cover bg-center text-center"
//       style={{
//         backgroundImage:
//           "url('channels4_banner.jpg')" // Replace with your uploaded bg
//       }}
//     >
//       <div className="absolute inset-0 bg-blue-900/70"></div>

//       <div className="relative max-w-5xl mx-auto px-6">
//         <Slider {...settings}>
//           {testimonials.map((t, index) => (
//             <div key={index} className="px-6">
//               <p className="text-xl md:text-2xl text-white italic leading-relaxed mb-6">
//                 “{t.quote}”
//               </p>
//               <h4 className="text-lg md:text-xl font-bold text-white">
//                 {t.name}
//               </h4>
//               <p className="text-white/80">{t.role}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }





import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Testimonials Data (with imageUrl) ---
const testimonials = [
  {
    quote:
      "Data geeks lab has supported our nonprofit work for the past 3 years. TJ and her team are incredible thought partners and provide timely and effective support. I’ve had the pleasure of working with DGL recently, and we appreciate the high level of Salesforce technical expertise that they bring to the table.",
    name: "Rodrigo Sandoval",
    role: "Operations Director, Beneficial State Foundation",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg" // Placeholder image
  },
  {
    quote:
      "Working with DGL has been transformative. Their AI integration streamlined our processes and saved countless hours for our staff.",
    name: "Sophia Martinez",
    role: "Director of Innovation, Global Nonprofit",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg" // Placeholder image
  },
  {
    quote:
      "The Salesforce consulting team provided outstanding expertise, enabling us to scale our impact faster than we thought possible.",
    name: "James Carter",
    role: "CEO, Tech for Good",
    imageUrl: "https://randomuser.me/api/portraits/men/36.jpg" // Placeholder image
  }
];

// --- Custom Arrows (with updated positioning) ---
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    // UPDATED: 'left-6' changed to 'left-2' to move the button further away
    className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-white/20"
  >
    <ChevronLeft className="text-white" size={28} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    // UPDATED: 'right-6' changed to 'right-2' to move the button further away
    className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-transparent transition-colors hover:bg-white/20"
  >
    <ChevronRight className="text-white" size={28} />
  </button>
);

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-8"> {dots} </ul> {/* Increased margin-top */}
      </div>
    ),
    customPaging: () => (
      <div className="h-3 w-3 rounded-full bg-white/60 transition-colors hover:bg-white"></div>
    )
  };

  return (
    <section
      className="relative bg-cover bg-center py-24 text-center"
      style={{
        backgroundImage:
          "url('channels4_banner.jpg')" // Replace with your background image
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="relative mx-auto max-w-5xl px-6">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-6">
              <p className="mb-8 text-xl italic leading-relaxed text-white md:text-2xl">
                “{t.quote}”
              </p>
              {/* UPDATED: Added a flex container for the author's image and info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={t.imageUrl}
                  alt={t.name}
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-white"
                />
                <div className="text-left">
                  <h4 className="text-lg font-bold text-white md:text-xl">
                    {t.name}
                  </h4>
                  <p className="text-white/80">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}