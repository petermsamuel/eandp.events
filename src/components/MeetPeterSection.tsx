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
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
           Hi, I’m Peter—Director of E&P Events.
I don’t just plan events. I run them.

With over a decade of experience and a formal background in project management, I bring structure, clarity, and cultural empathy to everything I touch.
But more than credentials—what drives me is justice.

“I’ve seen it too often—clients spending tens of thousands only to be overwhelmed, disappointed, or outright taken advantage of. That’s not just unfair. It’s unacceptable.
I believe hosting an event should feel empowering. Celebratory. Safe. That’s why I lead like it’s mine—so you can enjoy it like it’s yours.”

You’ll feel my impact not in what I say—but in how your day flows: calm, seamless, and exactly as you hoped.

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
