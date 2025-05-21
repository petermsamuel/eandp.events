import React from "react";

const AdditionalCtaSection = () => {
  return (
    <section id="additional-cta" className="bg-transparent py-16">

      {/* Full-width heading */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="section-title text-center">
          You Can Be the One Holding It All Together — or the One Fully Living It.
        </h2>
      </div>

      {/* Full-width subheading */}
      <div className="text-left space-y-4 text-lg text-gray-800 px-4 md:px-8 max-w-7xl mx-auto mt-4">
        <p><em>“I didn’t realize how much this would take over my life.”</em></p>
        <p>
          When you're the one planning it all, the cost isn’t just in spreadsheets or vendor deposits. 
          It’s in missed family dinners. Sleepless nights. The slow erosion of joy.
        </p>
        <p>
          And when the day finally comes, you’re not present — you’re performing.
        </p>
        <p>
          You don’t get to <em>feel</em> it. You’re too busy holding everything together.
        </p>
      </div>

      {/* Comparison cards in centered container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 px-4 md:px-6 lg:px-8">
        
        {/* On Your Own */}
        <div className="bg-[#f0e9e5] border border-red-500 p-6 rounded-2xl shadow-md shadow-black/10">
          <h3 className="text-xl font-semibold text-red-700 mb-4">On Your Own</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 text-base">
            <li>Weeks disappear into a blur of to-do lists, WhatsApp threads, and late-night decision-making.</li>
            <li>You miss time with the people you love — because the event becomes your full-time job.</li>
            <li>You’re carrying family expectations, cultural pressure, and vendor confusion on your back.</li>
            <li>The day arrives. You’re exhausted. Still problem-solving in full glam.</li>
            <li>You smile for the photos, but your memories are a haze of stress.</li>
          </ul>
        </div>

        {/* With E&P Events */}
        <div className="bg-[#faf8f3] border border-green-500 p-6 rounded-2xl shadow-md shadow-black/10">
          <h3 className="text-xl font-semibold text-green-700 mb-4">With E&P Events</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 text-base">
            <li>We take ownership — so you don’t have to carry the mental load alone.</li>
            <li>Your culture is honored. Your elders are supported. Your vision is protected.</li>
            <li>The details run smoothly because someone who understands what’s at stake is leading.</li>
            <li>You can finally exhale—your peace, your time, and your budget are protected from surprises.</li>
<li>You’re calm. Fully in the moment. And when you look back? You don’t just remember what it looked like — you remember how it <em>felt</em>.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AdditionalCtaSection;
