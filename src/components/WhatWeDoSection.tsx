import React from "react";

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="section-container bg-transparent">
      <h2 className="section-title">
        Execution You Can Trust. Events You’ll Remember.
      </h2>

      <p className="text-lg mb-12 max-w-3xl">
        Your event is more than a date on a calendar — it’s a milestone, a
        message, a memory in motion. We step in before the overwhelm, bringing
        strategic structure to emotional moments, brand goals, or multi-day
        cultural celebrations. From vendor wrangling to timeline control, we
        deliver calm clarity every step of the way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Corporate Card */}
        <a
          href="/corporate.html"
          className="bg-white/80 p-6 rounded-lg shadow-md hover:bg-white transition duration-200 block"
        >
          <h3 className="text-xl font-semibold mb-2">✨ Corporate</h3>
          <p>
            You need results, not risk. We execute high-impact events that
            reflect your brand, serve your goals, and leave a lasting
            impression. Whether it’s a product launch or a leadership retreat,
            we keep everything on schedule, on message, and under control.
          </p>
        </a>

        {/* Weddings Card */}
        <a
          href="/weddings.html"
          className="bg-white/80 p-6 rounded-lg shadow-md hover:bg-white transition duration-200 block"
        >
          <h3 className="text-xl font-semibold mb-2">✨ Weddings</h3>
          <p>
            We specialize in South Asian and multicultural weddings—events that
            require deep cultural fluency, logistical expertise, and careful
            communication. From multi-day celebrations to modern fusions, we
            make the complex feel effortless.
          </p>
        </a>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
