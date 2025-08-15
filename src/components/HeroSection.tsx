import React from "react";

const HeroSection = () => {
  return (
<section
  id="hero"
  className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-4 text-white overflow-hidden"
>
  {/* Hero Image */}
  <img
    src="/lovable-uploads/SSTK_asset_small_new.webp"
    alt="Indian wedding and corporate event planner in Atlanta"
    width={1920}
    height={1080}
    fetchPriority="high"
    decoding="async"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Headline */}
      <div className="relative z-10 text-center w-full px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-snug max-w-[75rem] mx-auto">
          When the Stakes Are High, You’ve Got One Shot to Get It Right.
        </h1>
      </div>

      {/* Subhead: Mobile (short) */}
      <div className="container mx-auto max-w-3xl text-center z-10 block md:hidden mb-6">
        <p className="text-white text-lg mb-4">
          Weddings. Corporate launches. Once-in-a-lifetime moments deserve precision and purpose.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="btn btn-primary bg-navy text-white text-base whitespace-nowrap rounded-full px-6 py-3 inline-flex items-center justify-center"
          >
            Plan It Right. Remember It Forever.
          </a>
        </div>
      </div>

      {/* Subhead: Desktop (longer) */}
      <div className="container mx-auto max-w-4xl text-center z-10 hidden md:block animate-fade-in">
        <p className="text-lg md:text-xl mb-6 text-white max-w-3xl mx-auto">
          Some moments only happen once. Whether you're planning a South Asian wedding, executive event, fusion celebration, or a high-impact corporate launch, E&P Events helps you make them unforgettable.
        </p>

        <p className="text-lg md:text-xl mb-10 text-white max-w-3xl mx-auto">
          We lead with strategy and deliver with precision—backed by cultural fluency and operational excellence.
          Whether navigating brand goals or family dynamics, we build a plan that holds up — so you can be fully present.
        </p>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="btn btn-primary bg-navy text-white text-lg sm:text-base whitespace-nowrap rounded-full px-6 py-3 inline-flex items-center justify-center text-center leading-snug"
          >
            Plan It Right. Remember It Forever.
          </a>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#what-we-do" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
