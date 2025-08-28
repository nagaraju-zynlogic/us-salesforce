// import React, { useState } from 'react';
// import { Send, Phone, Mail, MapPin } from 'lucide-react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! We\'ll get back to you soon.');
//     setFormData({ name: '', company: '', email: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-20 bg-blue-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-4xl font-bold mb-6">Start Your Transformation Today</h2>
//             <p className="text-xl text-blue-100 mb-8 leading-relaxed">
//               Let's discuss how our expertise in Salesforce, Azure, and AI can help you achieve your business objectives.
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <Phone className="text-orange-400" size={24} />
//                 <div>
//                   <div className="font-semibold">Call Us</div>
//                   <div className="text-blue-200">+1 (555) 123-4567</div>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-4">
//                 <Mail className="text-orange-400" size={24} />
//                 <div>
//                   <div className="font-semibold">Email Us</div>
//                   <div className="text-blue-200">hello@intellisolutions.com</div>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-4">
//                 <MapPin className="text-orange-400" size={24} />
//                 <div>
//                   <div className="font-semibold">Visit Us</div>
//                   <div className="text-blue-200">123 Innovation Drive<br />Tech City, TC 12345</div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="bg-white rounded-2xl p-8 text-gray-900">
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="Your full name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Company *
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     required
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="Your company name"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     placeholder="your@email.com"
//                   />
//                 </div>
                
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={4}
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
//                     placeholder="Tell us about your project and how we can help..."
//                   />
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//                 >
//                   <span>Submit</span>
//                   <Send size={20} />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Reusable component for contact info items
  const ContactInfoItem = ({ icon: Icon, title, content }) => (
    <div className="flex items-start space-x-5">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-800">
        <Icon className="text-orange-400" size={24} />
      </div>
      <div>
        <div className="font-semibold text-white">{title}</div>
        <div className="text-blue-200">{content}</div>
      </div>
    </div>
  );

  return (
    <section id="contact" className="py-20 text-white bg-gradient-to-br from-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-10">
            <h2 className="text-4xl font-bold tracking-tight">Start Your Transformation Today</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Let's discuss how our expertise in Salesforce, Azure, and AI can help you achieve your business objectives.
            </p>
            
            <div className="space-y-8">
              <ContactInfoItem icon={Phone} title="Call Us" content="+1 (972) 878-3496" />
              <ContactInfoItem icon={Mail} title="Email Us" content="hello@intellisolutions.com" />
              <ContactInfoItem 
                icon={MapPin} 
                title="Visit Us" 
                content={<>116 Village Blvd, Suite #200, Princeton, NJ - 08540</>} 
              />
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 sm:p-10 text-gray-900 shadow-2xl ring-1 ring-white/10">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                <input
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">Company *</label>
                <input
                  type="text" id="company" name="company" required
                  value={formData.company} onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <input
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                <textarea
                  id="message" name="message" required rows={4}
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-300 py-2 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-500/40"
              >
                <span>Submit</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}