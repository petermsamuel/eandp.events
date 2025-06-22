import React from "react";
import { Presentation, Sparkles } from "lucide-react";

const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do"
      className="relative z-10 section-container bg-transparent py-16 md:py-20"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
          Expert Planning for Unforgettable Events—Corporate & Cultural
        </h2>

        <p className="text-base md:text-lg mt-4 md:mt-6 text-gray-700 leading-relaxed">
          Your event is more than a date on a calendar — it’s a milestone, a message, a moment that needs to move with clarity and care. We don’t just “help” — we lead. Before the chaos starts. With structure, calm, and cultural intelligence.
        </p>
      </div>

      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
        {/* Corporate Card */}
        <a
          href="/corporate"
          className="group block bg-white/80 p-6 md:p-10 rounded-lg shadow-md border border-transparent hover:border-gold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-[#e6e6ea] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <Presentation className="h-5 w-5 text-[#1a1a26]" />
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#2a2a2a] group-hover:text-gold">
                Let’s Lead Your Corporate Event
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-2 leading-snug md:leading-relaxed">
                You need results, not risk. From brand launches and seasonal celebrations to executive summits, our corporate event planning delivers measurable impact — with clarity, confidence, and cultural fluency from our Atlanta-based team, trusted worldwide.
              </p>
              <p className="text-sm font-semibold text-gold underline group-hover:no-underline">
                Click Here to view Corporate Services →
              </p>
            </div>
          </div>
        </a>

        {/* Weddings Card */}
        <a
          href="/weddings"
          className="group block bg-white/80 p-6 md:p-10 rounded-lg shadow-md border border-transparent hover:border-gold hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-[#fdf6e3] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <Sparkles className="h-5 w-5 text-gold" />
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-[#2a2a2a] group-hover:text-gold">
                Let’s Plan Your Wedding
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-2 leading-snug md:leading-relaxed">
                As an experienced <strong>Indian wedding planner in Atlanta</strong>, we specialize in South Asian and fusion weddings layered with culture, complexity, and tradition. From baraats and sangeets to elegant receptions, our team brings lived experience, calm execution, and cultural fluency to every celebration.
              </p>
              <p className="text-sm font-semibold text-gold underline group-hover:no-underline">
                Click here to explore wedding planning →
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
