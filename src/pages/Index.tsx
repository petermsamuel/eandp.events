import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import FeaturedSection from "../components/FeaturedSection";
import MeetPeterSection from "../components/MeetPeterSection";
import TestimonialSection from "../components/TestimonialSection";
import GallerySection from "../components/GallerySection";
import AdditionalCtaSection from "../components/AdditionalCtaSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";



const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* ✅ Background watermark is fixed-position and behind everything */}
      <div className="lion-watermark" />


      <div className="min-h-screen flex flex-col">
  <SchemaMarkup />
        <Navbar />

        <main className="flex-1 relative z-10">
          <HeroSection />
          <WhatWeDoSection />
          <FeaturedSection />
          <MeetPeterSection />
          <GallerySection />
   <TestimonialSection />
          <AdditionalCtaSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
