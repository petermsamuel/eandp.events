import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative bg-[#2c2c2c] py-20 px-4 overflow-hidden">
      {/* Radial background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <div className="w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="section-title text-center text-white">
         Still Here? That Says Something.
        </h2>

        <p className="text-lg mb-10 max-w-2xl mx-auto text-white/90">
          If you're ready for clarity, let's talk.
          <br />
       Let’s make your next move clear and stress-free.
        </p>

        {/* Glow CTA Button */}
        <div className="glow-button-wrapper mx-auto">
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

        {/* Email Text */}
        {/*   <div className="mt-8 mb-4">
          <p className="text-base text-white/80 max-w-md mx-auto">
            Or reach out at{" "}
            <a
              href="mailto:info@events-ep.com"
              className="text-gold hover:underline"
            >
              info@eandp.events
            </a>
            . No bots. No pressure. Just real conversation.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
