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
    <div className="min-h-screen flex flex-col">
      {/* Navbar always at the top */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <HeroSection />
        <WhatWeDoSection />
        <FeaturedSection />
        <MeetPeterSection />
        <TestimonialSection />
        <GallerySection />
        <AdditionalCtaSection />
        <ContactSection />
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
};

export default Index;
