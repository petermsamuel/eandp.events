import React, { useState } from "react";

const LeadMagnetPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with webhook or form logic
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-12 lg:px-16 text-center text-[#2a2a2a]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Before You Book a Wedding Planner, Ask <span className="text-gold">These</span> 5 Questions
        </h1>

        <p className="text-lg mb-8 text-gray-700">
          Most couples don’t know what to ask until it’s too late — and end up stuck with stress,
          miscommunication, or unmet expectations. This 2-minute read could save your wedding (and your wallet).
        </p>

        <p className="text-base mb-10 text-gray-600">
          You’re planning a once-in-a-lifetime celebration. But with so many planners out there — how do you know
          who actually gets your culture, your family dynamics, and your vision? We’ll show you exactly how to cut
          through the noise and find the right fit.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-[#f9f6f0] p-8 rounded-lg shadow-md max-w-xl mx-auto"
          >
            <p className="text-lg font-semibold mb-4">
              📝 Grab the Free Guide:
              <br />
              <span className="text-xl text-gold font-bold">
                “5 Questions to Ask Before Hiring Your Wedding Planner”
              </span>
            </p>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-navy text-white py-3 px-6 rounded-full font-semibold hover:bg-gold transition-colors"
            >
              Get the Guide
            </button>

            <p className="text-sm text-gray-500 mt-4">
              🔒 We’ll never send spam. Just planning wisdom and the occasional insider tip to help you breathe easier.
            </p>
          </form>
        ) : (
          <div className="text-lg text-green-700 font-semibold">
            ✅ Thanks! Your free guide is on the way. Check your inbox — and keep your questions ready.
          </div>
        )}

        {/*    <div className="mt-12 text-center text-gray-600">
          <blockquote className="italic max-w-xl mx-auto">
            "Peter didn’t just plan our wedding — he helped us <span className="font-semibold">protect</span> it.
            Every vendor said it was the most organized event they’d ever seen."
          </blockquote>
          <p className="mt-2 font-medium">— Sana</p>
        </div> */}
      </div>
    </section>
  );
};

export default LeadMagnetPage;
