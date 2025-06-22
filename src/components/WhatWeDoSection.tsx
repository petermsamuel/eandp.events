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
          Expert Planning for Unforgettable Events—Corporate & Cultural
        </h2>
        <p className="text-lg mt-6 text-gray-700 hidden md:block">
          Your event is more than a date on a calendar — it’s a milestone, a message, a moment that needs to move with clarity and care. We don’t just “help” — we lead. Before the chaos starts. With structure, calm, and cultural intelligence.
        </p>
        <p className="text-base mt-4 text-gray-700 block md:hidden">
          From executive launches to cultural weddings — we lead high-stakes events with strategy, calm, and cultural insight.
        </p>
      </div>

      {/* Desktop Split Layout */}
      <div className="mt-12 hidden md:grid grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Corporate */}
        <a href="/corporate" className="group block bg-white/80 p-10 rounded-lg shadow-md hover:border-gold hover:shadow-xl transition-all hover:scale-[1.02]">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-[#e6e6ea] rounded-full flex items-center justify-center group-hover:scale-110">
              <Presentation className="h-6 w-6 text-[#1a1a26]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#2a2a2a] group-hover:text-gold">
                Let’s Lead Your Corporate Event
              </h3>
              <p className="text-gray-700 mb-3">
                Brand launches, summits, and seasonal events with measurable results — and zero chaos.
              </p>
              <p className="text-sm text-gold font-semibold underline group-hover:no-underline">
                Click Here to view Corporate Services →
              </p>
            </div>
          </div>
        </a>

        {/* Weddings */}
        <a href="/weddings" className="group block bg-white/80 p-10 rounded-lg shadow-md hover:border-gold hover:shadow-xl transition-all hover:scale-[1.02]">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-[#fdf6e3] rounded-full flex items-center justify-center group-hover:scale-110">
              <Sparkles className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#2a2a2a] group-hover:text-gold">
                Let’s Plan Your Wedding
              </h3>
              <p className="text-gray-700 mb-3">
                South Asian & fusion weddings — layered with culture, coordinated with care.
              </p>
              <p className="text-sm text-gold font-semibold underline group-hover:no-underline">
                Click Here to explore Wedding Planning →
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Mobile Vertical Stack */}
      <div className="mt-12 md:hidden flex flex-col gap-6 max-w-xl mx-auto px-4">
        {/* Corporate (placed first if preferred) */}
        <a href="/corporate" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg border border-gray-100 hover:border-gold transition-all">
          <h3 className="text-xl font-bold text-[#2a2a2a] mb-2">Corporate Events</h3>
          <p className="text-sm text-gray-700 mb-2">Brand launches, summits, and culture-driven corporate experiences.</p>
          <p className="text-sm text-gold font-semibold underline">See Corporate Services →</p>
        </a>

        {/* Weddings */}
        <a href="/weddings" className="block bg-white p-6 rounded-lg shadow hover:shadow-lg border border-gray-100 hover:border-gold transition-all">
          <h3 className="text-xl font-bold text-[#2a2a2a] mb-2">South Asian & Fusion Weddings</h3>
          <p className="text-sm text-gray-700 mb-2">Experience, elegance, and cultural fluency for once-in-a-lifetime days.</p>
          <p className="text-sm text-gold font-semibold underline">See Wedding Services →</p>
        </a>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
