import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-container bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title text-center">Still Reading? Book the Call.</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          If you're ready for clarity, let's talk.
          <br />
          Planning your wedding or event shouldn't feel like managing a crisis.
          Let's build a plan you trust—without the overwhelm.
        </p>


  {/* Button */}
<div className="glow-button-wrapper">
  <div className="glow-ring" />
  <a
    href="https://cal.com/ryanmcmullen/15min"
    target="_blank"
    rel="noopener noreferrer"
    className="glow-button-inner"
  >
    Book Your Free Clarity Call
  </a>
</div>



<div className="mt-8 mb-16">
  <p className="text-base text-gray-700 max-w-md mx-auto">
    Or email us at{" "}
    <a
      href="mailto:info@events-ep.com"
      className="text-gold hover:underline"
    >
      info@eandp.events
    </a>
    . You'll get a response from a real person — not a bot, not a sales script.
  </p>
</div>
      </div>
    </section>
  );
};




export default ContactSection;
