
import React from "react";

const HeroSection = () => {
  return (
  <section
  id="hero"
  className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-4 bg-cover bg-center"
  style={{ backgroundImage: "url('/lovable-uploads/SSTK_asset_small_new.jpg')" }}
>
  <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

  {/* Wide headline outside of container */}
  <div className="relative z-10 text-center w-full px-4">
    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-snug max-w-[75rem] mx-auto">
      Still Holding It All Together By Yourself? You Shouldn’t Have To.
    </h1>
  </div>

  {/* Rest inside container for nice alignment */}
  <div className="container mx-auto max-w-4xl text-center z-10 animate-fade-in">
    <p className="text-lg md:text-xl mb-10 text-white max-w-3xl mx-auto">
      Weddings rooted in tradition. Corporate events built to impress.
      At E&P Events, we don’t just plan—we take ownership.
    </p>

    <p className="text-lg md:text-xl mb-10 text-white max-w-3xl mx-auto">
      We lead with strategy, protect your vision, and bring cultural fluency to every detail.
      Whether you’re navigating family dynamics or brand goals, we build a plan that holds—so you can be fully present.
    </p>

    <a
      href="#contact"
      className="btn btn-primary bg-navy text-white text-lg rounded-full px-6 py-3 inline-flex items-center justify-center text-center leading-snug"
    >
      Stop Managing. Start Celebrating.
    </a>
  </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#what-we-do" aria-label="Scroll down">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
