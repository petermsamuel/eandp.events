import React, { useEffect } from "react";

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


onst Index = () => {
  useEffect(() => {
    document.title = "Indian Wedding & Corporate Event Planner in Atlanta | E&P Events";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      "E&P Events is Atlanta’s premier planner for Indian, South Asian, and fusion weddings — as well as high-end corporate and executive events."
    );
  }, []);

  return (
    <div className="relative overflow-x-hidden">
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
