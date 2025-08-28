import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  {
    name: "SF LGBT Center",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services.svg/500px-Tata_Consultancy_Services.svg.png"
  },
  {
    name: "Amazon Conservation",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/500px-Amazon_2024.svg.png"
  },
  {
    name: "Bronx Arts",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bronx_Museum_of_the_Arts_logo.png/375px-Bronx_Museum_of_the_Arts_logo.png"
  },
  {
    name: "Ella Baker Center",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Ella_Baker_Center_for_Human_Rights_%28logo%29.jpg/300px-Ella_Baker_Center_for_Human_Rights_%28logo%29.jpg"
  },
  {
    name: "Greenbelt Alliance",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Capgemini_logo.svg/500px-Capgemini_logo.svg.png"
  }
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 -translate-y-1/2 top-1/2"
  >
    <ChevronLeft className="text-blue-900" size={24} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 -translate-y-1/2 top-1/2"
  >
    <ChevronRight className="text-blue-900" size={24} />
  </button>
);

export default function WhoWeHelped() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-16 border-y-4 border-teal-500 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          WHO WE’VE HELPED
        </h2>

        {/* Carousel */}
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center px-4">
              <img
                src={logo.url}
                alt={logo.name}
                className="h-12 object-contain mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
