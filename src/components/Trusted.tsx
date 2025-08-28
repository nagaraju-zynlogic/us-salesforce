import React from 'react';

const companies = [
  'Microsoft', 'Salesforce', 'AWS', 'Google Cloud', 'Oracle', 'IBM'
];

export default function Trusted() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Trusted By Industry Leaders</h2>
          <p className="text-gray-600">
            Partnering with technology giants to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="bg-gray-100 rounded-lg px-6 py-3 text-center">
                <span className="text-gray-800 font-semibold text-sm">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}