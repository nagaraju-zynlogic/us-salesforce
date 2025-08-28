import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';

const experts = [
  {
    name: 'Sarah Chen',
    title: 'Salesforce Architect',
    description: 'A certified Salesforce expert with 12+ years delivering complex enterprise solutions and leading digital transformations for Fortune 500 companies.',
    icon: Award
  },
  {
    name: 'Michael Rodriguez',
    title: 'Lead Data Scientist',
    description: 'PhD in Machine Learning with expertise in AI implementation, predictive analytics, and delivering data-driven insights that drive business growth.',
    icon: BookOpen
  },
  {
    name: 'Jennifer Liu',
    title: 'Azure Solutions Director',
    description: 'Microsoft MVP specializing in Dynamics 365 and cloud architecture, with a track record of successful enterprise migrations and optimizations.',
    icon: Users
  }
];

export default function Experts() {
  return (
    <section id="experts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Our Experts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading consultants with proven expertise and certifications to guide your technology transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <expert.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{expert.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{expert.title}</p>
              <p className="text-gray-600 leading-relaxed">
                {expert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}