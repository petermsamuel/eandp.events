const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden overflow-x-hidden">
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
