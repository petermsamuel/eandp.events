
import React from "react";

const FeaturedSection = () => {
  return (
    <section id="featured" className="section-container bg-charcoal text-white py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="section-title text-white">
  Trusted by the People Who Know Excellence
</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 flex items-center justify-center">
              <img 
                src="/lovable-uploads/c04a5a50-534c-4b4c-bbca-ad613659b9e6.png" 
                alt="South Asian Bride" 
                className="max-w-full max-h-full object-contain filter hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 flex items-center justify-center">
              <img 
                src="/lovable-uploads/437d503b-90fe-4b55-9e56-c541e4fa1713.png" 
                alt="Luxury & Leisure" 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 flex items-center justify-center">
              <img 
                src="/lovable-uploads/5a616f5f-957e-47cb-8c29-ff14e8465700.png" 
                alt="Maharani Weddings" 
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
