import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#2c2c2c] py-20 px-4 overflow-hidden"
    >
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
            href="https://cal.com/eandp.events/clarity"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button-inner"
            onClick={() => {
              window.gtag?.("event", "cta_click", {
                button_text: "Book Your Free Clarity Call",
                cta_type: "main_cta",
                page_path: window.location.pathname,
              });
            }}
          >
            Book Your Free Clarity Call
          </a>
        </div>

        {/* Email CTA */}
        <div className="mt-8">
          <p className="text-base text-white/80 max-w-md mx-auto">
            Prefer email?{" "}
            <a
              href="mailto:info@eandp.events?subject=Clarity%20Request&body=Hey%20E%26P%2C%0A%0AI%E2%80%99d%20love%20some%20clarity%20around%3A%20%5Bquick%20summary%5D%0A%0AHere%E2%80%99s%20the%20best%20way%20to%20reach%20me%3A%20%5Byour%20phone%2Femail%5D%0A%0AThanks!"
              className="text-gold hover:underline"
              onClick={() => {
                window.gtag?.("event", "cta_click", {
                  button_text: "Email Us",
                  cta_type: "email_cta",
                  page_path: window.location.pathname,
                });
              }}
            >
              info@eandp.events
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
