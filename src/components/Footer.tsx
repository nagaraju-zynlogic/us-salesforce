import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">IntelliSolutions</h3>
            <p className="text-blue-200 leading-relaxed max-w-md">
              Transforming enterprises through intelligent cloud solutions, AI integration, and data-driven insights. 
              Your trusted partner for Salesforce, Azure, and advanced analytics.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Salesforce Consulting</li>
              <li>Azure CRM Dynamics</li>
              <li>Data Science & Analytics</li>
              <li>AI Integration</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-blue-200 text-sm">
              hello@intellisolutions.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 IntelliSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}