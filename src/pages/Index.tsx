import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
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
          <GallerySection />
          <AdditionalCtaSection />
          <TestimonialSection />
          <MeetPeterSection />
          <ContactSection />
          <FeaturedSection />
        </main>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "E and P Events",
      "image": "https://eandp.events/logo.png",
      "url": "https://eandp.events/",
      "telephone": "+1-770-410-8302",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1691 Ashbury Park Dr.",
        "addressLocality": "Hoschton",
        "addressRegion": "GA",
        "postalCode": "30548",
        "addressCountry": "US"
      },
      "priceRange": "$$$",
      "description": "Atlanta event planners specializing in South Asian weddings, fusion celebrations, and high-end corporate experiences.",
      "sameAs": [
        "https://www.instagram.com/eandp_events/",
        "https://www.facebook.com/eventsep/",
        "https://www.theknot.com/marketplace/eandp-events-alpharetta-ga-1055902"
      ]
    })
  }}
/>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
