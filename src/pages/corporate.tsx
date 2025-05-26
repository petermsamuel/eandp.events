import React from "react";
import { Check, Globe, Users } from "lucide-react";
import NavBarWeddings from "@/components/NavBarWeddings";
import { corporateGalleryImages } from "@/data/corporategallery";

const Corporate = () => {
  return (
    <>
      <div className="min-h-screen bg-transparent flex flex-col">
        <NavBarWeddings />

        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 lg:px-16 bg-cover bg-center text-white"
          style={{
            backgroundImage: "url('/lovable-uploads/corp3_cropped.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 text-center w-full px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-snug max-w-[75rem] mx-auto">
              Your Event Deserves More Than a Run of Show. It Deserves Strategy.
            </h1>
          </div>

          <div className="relative z-10 max-w-4xl text-center mx-auto">
            <p className="text-lg md:text-xl max-w-3xl mb-10 text-white/90 mx-auto">
              From executive summits to brand activations, we don’t just manage logistics — we lead with structure, insight, and cultural fluency.
            </p>

            <div className="flex justify-center">
              <a
                href="#cta"
                className="btn btn-primary bg-navy text-white text-lg sm:text-base rounded-full px-6 py-3"
              >
                Your Mission. Our Execution.
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#what-we-do" aria-label="Scroll down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* What You Need, What We Deliver Section */}
        <section
          id="what-we-do"
          className="py-20 px-6 md:px-12 lg:px-16"
          style={{ backgroundColor: "#2a2a2a" }}
        >
          <div className="text-center mb-16">
            <h2 className="section-title text-white">What You Need, What We Deliver</h2>
            <p className="text-lg max-w-3xl mx-auto text-white">
              Planning a high-stakes event means managing timelines, stakeholders, and brand expectations — all under pressure. Most planners coordinate. We take ownership so you can lead the room, not run it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg">
              <div className="h-14 w-14 bg-[#f5f1ea] rounded-full flex items-center justify-center mb-4">
                <Check className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2a2a3a]">Tight timelines?</h3>
              <p className="text-lg text-[#7b6535]">Delivered.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg">
              <div className="h-14 w-14 bg-[#f5f1ea] rounded-full flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2a2a3a]">Global audiences?</h3>
              <p className="text-lg text-[#7b6535]">Understood.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg">
              <div className="h-14 w-14 bg-[#f5f1ea] rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2a2a3a]">Deadline meltdowns?</h3>
              <p className="text-lg text-[#7b6535]">Handled.</p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-transparent py-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title">How It Works</h2>
            <div className="space-y-16">
              {["Define the Mission", "Build the Blueprint", "Execute with Excellence"].map((title, index) => (
                <div key={title} className="flex flex-col md:flex-row items-start gap-6">
                  <div className="h-14 w-14 bg-black rounded-full flex items-center justify-center flex-shrink-0 md:mt-2">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                    <p className="text-lg">
                      {index === 0 && "We begin with your purpose and goals — then map backward to build the right experience."}
                      {index === 1 && "We manage vendors, tech, and timelines to ensure nothing slips through the cracks."}
                      {index === 2 && "We run the event so you can focus on your audience — and the outcomes that matter."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

     {/* Testimonial Section */}
<section
  id="testimonial"
  className="py-20 px-6 md:px-12 lg:px-16"
  style={{ backgroundColor: "#2a2a2a" }}
>
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="section-title text-white">Who We’ve Helped</h2>
    <blockquote className="text-xl md:text-2xl italic font-light mb-6 max-w-3xl mx-auto text-white space-y-6">
      <p>
        "I worked extensively with Peter on a number of global United Nations programs, working with corporate executives and high-ranking government officials and dignitaries from over 20–30 countries around the world represented at each event.
      </p>
      <p>
        Peter provided exceptional strategic direction and corporate planning, exquisite event management, and impeccable attention to detail. He pulled off events seamlessly and flawlessly, and delegates were always impressed..."
      </p>
    </blockquote>
    <p className="text-lg text-white">— Sebastian</p>
  </div>
</section>


    {/* Featured Brands Section */}
<section id="featured" className="section-container bg-white text-black py-20">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="section-title text-black text-center mx-auto">
      Trusted by the People Who Know Excellence
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 flex items-center justify-center">
          <img 
            src="/lovable-uploads/emory-logo.jpeg" 
            alt="Emory School of Nursing" 
            className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-40 h-40 flex items-center justify-center">
          <img 
            src="/lovable-uploads/LNRS_RGB_POS_300.png" 
            alt="LexisNexis Risk Solutions" 
            className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-40 h-40 flex items-center justify-center">
          <img 
            src="/lovable-uploads/GCC-Logo.png" 
            alt="GateCity Church" 
            className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

 <div className="flex flex-col items-center">
        <div className="w-40 h-40 flex items-center justify-center">
          <img 
            src="/lovable-uploads/FUT001_Logo_Screen_V2_RGB_B-c_black.png" 
            alt="Futures Church" 
            className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section
          id="cta"
          className="relative bg-[#2c2c2c] py-20 px-6 md:px-12 lg:px-16 text-white overflow-hidden"
        >
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="section-title text-white">Lead the Room. We’ll Run the Rest.</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-white/90">
              Let’s create an event that reflects your vision — with flawless logistics, cultural fluency, and strategic intent baked into every detail.
            </p>

            <div className="glow-button-wrapper mx-auto">
              <div className="glow-ring" />
              <a
                href="https://cal.com/ryanmcmullen/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button-inner"
              >
                Book Your Planning Consult
              </a>
            </div>

            <div className="mt-8">
              <p className="text-base text-white/80 max-w-md mx-auto">
                Or email us at {" "}
                <a href="mailto:info@eandp.events" className="text-gold hover:underline">
                  info@eandp.events
                </a>
                . You'll get a response from a real person — not a bot, not a sales script.
              </p>
            </div>

            <div className="mt-8">
              <a href="/" className="text-gold underline">
                ← Back to Main
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="lion-watermark" aria-hidden="true" />
    </>
  );
};

export default Corporate;
