import React from 'react';
import { Search, Cog, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your unique challenges and goals to craft a tailored implementation roadmap.',
    number: '01'
  },
  {
    icon: Cog,
    title: 'Implementation & Integration',
    description: 'Our certified experts manage the entire development lifecycle, ensuring a seamless integration with your existing systems.',
    number: '02'
  },
  {
    icon: TrendingUp,
    title: 'Optimization & Support',
    description: 'We provide ongoing support and data-driven insights to ensure your technology stack evolves with your business.',
    number: '03'
  }
];

export default function Approach() {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful technology transformations and measurable business outcomes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  <step.icon size={24} />
                </div>
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}