import React from "react";

const MeetPeterSection = () => {
  return (
    <section id="meet-peter" className="section-container bg-transparent py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mx-auto">
          Your Event’s Calm Commander
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
          <div className="md:w-2/3 space-y-6 text-lg">
            <p>
              Hi, I’m Peter—Director of E&P Events. I don’t just plan events. I run them.
            </p>

            <p>
              With over a decade of experience and a formal background in project management,
              I bring structure, clarity, and cultural empathy to everything I touch.
              But more than credentials—what drives me is justice.
            </p>

            <blockquote className="italic border-l-4 border-gold pl-4 text-gray-800">
              “I’ve seen it too often—clients spending tens of thousands only to be overwhelmed,
              disappointed, or outright taken advantage of. That’s not just unfair. It’s unacceptable.
              I believe hosting an event should feel empowering. Celebratory. Safe.
              That’s why I lead like it’s mine—so you can enjoy it like it’s yours.”
            </blockquote>

            <p>
              You’ll feel my impact not in what I say—but in how your day flows:
              calm, seamless, and exactly as you hoped.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetPeterSection;
