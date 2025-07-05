import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import Footer from "../components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";

// Lazy-loaded components
const GallerySection = React.lazy(() => import("../components/GallerySection"));
const AdditionalCtaSection = React.lazy(() => import("../components/AdditionalCtaSection"));
const TestimonialSection = React.lazy(() => import("../components/TestimonialSection"));
const MeetPeterSection = React.lazy(() => import("../components/MeetPeterSection"));
const ContactSection = React.lazy(() => import("../components/ContactSection"));
const FeaturedSection = React.lazy(() => import("../components/FeaturedSection"));

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Helmet>
        <title>Indian Wedding & Corporate Event Planner in Atlanta | E&P Events</title>
        <meta
          name="description"
          content="E&P Events is Atlanta’s premier planner for Indian, South Asian, and fusion weddings — as well as high-end corporate and executive events."
        />
        <link rel="canonical" href="https://eandp.events/" />
      </Helmet>

      <div className="lion-watermark" />
      <div className="min-h-screen flex flex-col">
        <SchemaMarkup />
        <Navbar />
        <main className="flex-1 relative z-10">
          <HeroSection />
          <WhatWeDoSection />

          <Suspense fallback={<div>Loading gallery...</div>}>
            <GallerySection />
          </Suspense>

          <Suspense fallback={<div>Loading call-to-action...</div>}>
            <AdditionalCtaSection />
          </Suspense>

          <Suspense fallback={<div>Loading testimonials...</div>}>
            <TestimonialSection />
          </Suspense>

          <Suspense fallback={<div>Loading Meet Peter...</div>}>
            <MeetPeterSection />
          </Suspense>

          <Suspense fallback={<div>Loading contact...</div>}>
            <ContactSection />
          </Suspense>

          <Suspense fallback={<div>Loading featured logos...</div>}>
            <FeaturedSection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
