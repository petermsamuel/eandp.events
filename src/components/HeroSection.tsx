
import React from "react";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/lovable-uploads/SSTK_asset_small_new.jpg')" }}
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center z-10 animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
         Your Event Deserves a Leader—Not Another To-Do List.
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white max-w-3xl mx-auto">
          Whether you're planning a South Asian wedding or a corporate production, you shouldn't have to be the one holding everything together.
        </p>

        <p className="text-lg md:text-xl mb-10 text-white max-w-3xl mx-auto">
          At E&P Events, we bring leadership, logistics, and cultural intelligence to every event—weddings rooted in tradition, launches built to impress, and everything in between.
        </p>
       <a
  href="#contact"
  className="btn btn-primary bg-navy text-white text-lg rounded-full px-6 py-3 inline-flex items-center justify-center text-center leading-snug"
>
  No Pressure. Just a Plan.
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
