import React from "react";
import { Presentation, Sparkles } from "lucide-react";

const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do"
      className="relative z-10 section-container bg-transparent py-20"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="section-title">
          Strategic Execution for Once-in-a-Lifetime Moments
        </h2>

        <p className="text-lg mt-6 text-gray-700">
          Your event is more than a date on a calendar — it’s a milestone, a message, a moment that needs to move with clarity and care. We don’t just “help” — we lead. Before the chaos starts. With structure, calm, and cultural intelligence.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Corporate Card */}
        <a
          href="/corporate"
          className="group block bg-white/80 p-8 md:p-10 rounded-lg shadow-md border border-transparent hover:border-gold hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-[#e6e6ea] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <Presentation className="h-6 w-6 text-[#1a1a26]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#2a2a2a] group-hover:text-gold">
                Let’s Lead Your Corporate Event
              </h3>
              <p className="text-gray-700 mb-3">
                You need results, not risk. Whether it’s a seasonal celebration, executive summit, or high-stakes launch—our events are built to reflect your mission, deliver measurable impact, and keep the chaos contained.
              </p>
              <p className="text-sm text-gold font-semibold underline group-hover:no-underline">
                View Corporate Services →
              </p>
            </div>
          </div>
        </a>

        {/* Weddings Card */}
        <a
          href="/weddings"
          className="group block bg-white/80 p-8 md:p-10 rounded-lg shadow-md border border-transparent hover:border-gold hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
        >
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-[#fdf6e3] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <Sparkles className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#2a2a2a] group-hover:text-gold">
                Let’s Plan Your Wedding
              </h3>
              <p className="text-gray-700 mb-3">
                We specialize in South Asian and fusion weddings — events with deep cultural layers, multiday logistics, and complex family expectations. From sangeets to baraats, we lead with lived experience and cultural fluency.
              </p>
              <p className="text-sm text-gold font-semibold underline group-hover:no-underline">
                Explore Wedding Planning →
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
