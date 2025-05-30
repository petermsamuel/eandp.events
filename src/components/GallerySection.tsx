
import React from "react";

const GallerySection = () => {
  const galleryImages = [
    "/lovable-uploads/RAGartistry-1629-3_cropped.jpg",
    "/lovable-uploads/RAGartistry-9023-2_cropped.jpg",
    "/lovable-uploads/suparnasaurabh12_cropped.jpg",
    "/lovable-uploads/Shivani_Sagar-3729.jpg", 
    "/lovable-uploads/keriadam-w0199-x3.jpg",
    "/lovable-uploads/fenglongphoto-7146-preview-jpeg.jpg"
  ];

  return (
   <section id="gallery" className="py-20 px-6 md:px-12 lg:px-16 bg-white overflow-hidden">
  <div className="text-center mb-12">
    <h2 className="section-title">Real weddings. Real emotion.</h2>
    <p className="text-lg">Cultural beauty meets seamless coordination.</p>
  </div>

  <div className="relative">
    <div className="animate-marquee whitespace-nowrap flex gap-6">
      {[...weddingGalleryImages, ...weddingGalleryImages].map((image, index) => (
        <div
          key={index}
          className="min-w-[300px] md:min-w-[400px] h-[200px] rounded-md overflow-hidden flex-shrink-0 bg-gray-200"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default GallerySection;
