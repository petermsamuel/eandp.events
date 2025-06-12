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
  Managing the event shouldn’t cost your peace of mind or your presence—
  whether that's as a bride orchestrating every vendor detail or a team lead responsible for corporate success.
</p>
<p>
  When it’s crunch time, you’re no longer *present* — you're stuck *performing*.
</p>
<p>
  You miss what matters—memories, moments, wins—because you're too busy making it happen.
</p>
      </div>

      {/* Comparison cards in centered container */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 px-4 md:px-6 lg:px-8 transform-gpu will-change-transform contain-layout">

        {/* On Your Own */}
   <div className="bg-[#f0e9e5] border border-red-500 p-6 rounded-2xl shadow-md shadow-black/10 min-h-[460px]">
          <h3 className="text-xl font-semibold text-red-700 mb-4">On Your Own</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 text-base">
            <li>Weeks disappear into a blur of to-do lists, WhatsApp threads, and late-night decision-making.</li>
            <li>You miss time with the people you love — because the event becomes your full-time job.</li>
            <li>You’re carrying family expectations, cultural pressure, and vendor confusion on your back.</li>
            <li>The day arrives. You’re exhausted, fielding vendor calls when you should be savoring the moment.</li>
            <li>You smile for the photos, but your memories are a haze of stress.</li>
          </ul>
        </div> 

        {/* With E&P Events */}
  <div className="bg-[#faf8f3] border border-green-500 p-6 rounded-2xl shadow-md shadow-black/10 min-h-[460px]">
          <h3 className="text-xl font-semibold text-green-700 mb-4">With E&P Events</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 text-base">
            <li>We take ownership—so you don’t have to carry the mental load alone.</li>
<li>Your vision, tradition, or brand standards are honored and protected.</li>
<li>The details run smoothly because someone who deeply understands what's at stake is leading.</li>
<li>You can finally exhale—your peace, your time, and your budget are secure from surprises.</li>
<li>You’re calm. Fully in the moment. And when it’s all over? You’ll remember not just what it looked like—but how it <em>felt</em>.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AdditionalCtaSection;
