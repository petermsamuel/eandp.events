import React from "react";

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
        <div className="bg-white/80 p-8 md:p-10 rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <a href="/corporate.html" className="block">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="text-gold mr-2">✨</span> Corporate
            </h3>
            <p className="text-gray-700">
              You need results, not risk. Whether it’s a seasonal celebration, executive summit, or high-stakes launch—our events are built to reflect your mission, deliver measurable impact, and keep the chaos contained.
            </p>
          </a>
        </div>

        {/* Weddings Card */}
        <div className="bg-white/80 p-8 md:p-10 rounded-lg shadow-md transition-shadow hover:shadow-lg">
          <a href="/weddings" className="block">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="text-gold mr-2">✨</span> Weddings
            </h3>
            <p className="text-gray-700">
              We specialize in South Asian and fusion weddings—events with deep cultural layers, multiday logistics, and complex family expectations. From sangeets to baraats, we lead with lived experience and cultural fluency.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
