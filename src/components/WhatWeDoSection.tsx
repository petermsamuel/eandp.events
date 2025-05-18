import React from "react";

const WhatWeDoSection = () => {
  return (
    <section
      id="what-we-do"
      className="relative z-10 section-container bg-transparent py-20"
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="section-title text-left">
          Execution You Can Trust. Events You’ll Remember.
        </h2>

        <p className="text-lg mt-6 text-gray-700">
          Your event is more than a date on a calendar — it’s a milestone, a message, a memory in motion. We step in before the overwhelm, bringing strategic structure to emotional moments, brand goals, or multi-day cultural celebrations. From vendor wrangling to timeline control, we deliver calm clarity every step of the way.
        </p>
      </div>

     <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
  {/* Corporate Card */}
  <div className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-md">
    <a href="/corporate.html" className="block transition-shadow hover:shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 flex items-center">
        <span className="text-gold mr-2">✨</span> Corporate
      </h3>
      <p className="text-gray-700">
        You need results, not risk. We execute high-impact events that reflect your brand, serve your goals, and leave a lasting impression...
      </p>
    </a>
  </div>

  {/* Weddings Card */}
  <div className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-lg shadow-md">
    <a href="/weddings.html" className="block transition-shadow hover:shadow-lg">
      <h3 className="text-2xl font-semibold mb-4 flex items-center">
        <span className="text-gold mr-2">✨</span> Weddings
      </h3>
      <p className="text-gray-700">
        We specialize in South Asian and multicultural weddings—events that require deep cultural fluency...
      </p>
    </a>
  </div>
</div>

    </section>
  );
};

export default WhatWeDoSection;
