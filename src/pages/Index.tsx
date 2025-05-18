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


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 lion-watermark z-0" />

      <main className="flex-1 relative z-10">
        <HeroSection />
        <WhatWeDoSection />
        <FeaturedSection />
        <MeetPeterSection />
        <TestimonialSection />
        <GallerySection />
        <AdditionalCtaSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};


export default Index;
