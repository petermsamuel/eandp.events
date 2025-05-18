
import React from "react";

const GallerySection = () => {
  const galleryImages = [
    "/lovable-uploads/9b8fed6d-b6d7-4e9f-b159-569f754a501d.png",
    "/lovable-uploads/706d55c4-c191-4e23-acde-485a5dc67d93.png",
    "/lovable-uploads/0c4fcd2b-82e1-4a9e-a20a-e36e99c32f3f.png",
    "/lovable-uploads/89a4d798-f07a-42c8-bba9-15123f9d6ecb.png", 
    "/lovable-uploads/c053cec3-b569-472a-ae12-b070e928783a.png",
    "/lovable-uploads/e6226374-8425-4144-b922-5cebef0240c4.png"
  ];

  return (
    <section id="gallery" className="section-container bg-charcoal text-white py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-white text-center"> Where Vision Meets Precision</h2>
        <p className="text-lg mb-12 max-w-3xl">
          Every moment in this gallery reflects thoughtful planning, cultural understanding, and seamless execution.
No styled shoots. No chaos. Just real events, led with clarity and care.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-md aspect-square hover:shadow-lg transition-shadow cursor-pointer group relative"
            >
              <img
                src={image}
                alt={`Wedding event photo ${index + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
