import React from "react";

const FeaturedSection = () => {
  return (
    <section
      id="featured"
      className="bg-transparent text-black py-24 border-t border-b border-gold"
    >
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="section-title text-black mx-auto mb-12">
          Trusted by the People Who Know Excellence
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* South Asian Bride */}
          <a
            href="https://www.southasianbridemagazine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-20 w-auto"
          >
            <img
              src="/lovable-uploads/c04a5a50-534c-4b4c-bbca-ad613659b9e6.png"
              alt="South Asian Bride"
              className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>

          {/* Luxury & Leisure */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-20 w-auto"
          >
            <img
              src="/lovable-uploads/437d503b-90fe-4b55-9e56-c541e4fa1713.png"
              alt="Luxury & Leisure"
              className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>

          {/* Maharani Weddings */}
          <a
            href="https://www.maharaniweddings.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-20 w-auto"
          >
            <img
              src="/lovable-uploads/5a616f5f-957e-47cb-8c29-ff14e8465700.png"
              alt="Maharani Weddings"
              className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
