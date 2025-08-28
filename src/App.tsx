import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Experts from './components/Experts';
import Trusted from './components/Trusted';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import WhoWeHelped from './components/WhoWeHelped';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import AboutWe from './components/AboutWe';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import SalesforceStatsGrid from './components/SalesforceStatsGrid';
import ServicesSection from './components/ServicesSection';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <ServicesSection />
      {/* <Services /> */}
      <WhatWeDo />
      <HowWeWork />
      <WhoWeHelped />
      <Testimonials />
      <AboutWe />
      {/* <Approach />
      <Experts /> */}
      {/* <Trusted /> */}
      {/* <WhyWorkWithUs/> */}
      <SalesforceStatsGrid/>
      <ContactCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;