import React from "react";

const MeetPeterSection = () => {
  return (
    <section id="meet-peter" className="section-container bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          Hi, I'm Peter. I Don’t Just Plan Events—I Run Them.
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="md:w-1/3">
            <div className="overflow-hidden border border-gold rounded-md">
              <img
                src="/lovable-uploads/DSC01691_Original.JPG"
                alt="Peter, Director of E&P Events"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              As the Director of E&P Events, my job is to bring order to what
              often feels like chaos. With a formal background in Project
              Management, over a decade in high-pressure event planning, and
              deep experience with South Asian and multicultural weddings, I’m
              not guessing—I’m executing. Clients trust me because I lead
              calmly, communicate clearly, and make sure nothing gets
              missed—even when things change.
            </p>

            <p className="text-lg mb-4">
              I don’t need the spotlight. I’m here to protect your time, your
              vision, and your experience.
            </p>

            <p className="text-lg font-medium text-gray-800">
              You’ll know I was there by the way your day feels: seamless,
              grounded, and exactly as you hoped.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetPeterSection;
