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
          Ask These <span className="text-gold">5 Questions</span> Before You Hire Anyone. Or Risk Regret.
        </h1>

        <p className="text-lg mb-8 text-gray-700">
      Most clients don’t know what to ask until it’s too late. Whether you're planning a high-stakes corporate event or a once-in-a-lifetime wedding, 
      asking these questions could save your budget, your timeline, and your sanity.
        </p>

        <p className="text-lg mb-8 text-gray-700">
        You’re not just looking for a good planner, you’re looking for the right one.
        Someone who can lead under pressure, protect your time and values, and make sure your event actually delivers on its purpose.
        We’ll show you how to cut through the fluff and find the fit — so you can move forward with confidence.
        </p>

        {!submitted ? (
          <form
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const id = crypto.randomUUID();

    try {
      await fetch("https://hook.us1.make.com/hw0r5ihivh26pfsp8yb7ua12iigrl36x", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  }}
  className="bg-[#f9f6f0] p-8 rounded-lg shadow-md max-w-xl mx-auto"
>
  <p className="text-lg font-semibold mb-4">
    📝 Grab the Free Guide:
    <br />
    <span className="text-xl text-gold font-bold">
      “Top 5 Questions to Ask Before Hiring An Event Planner”
    </span>
  </p>

  <input
    type="text"
    placeholder="First Name"
    required
    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md"
  />
  <input
    type="email"
    placeholder="Email"
    required
    className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md"
  />

  <button
    type="submit"
    className="w-full bg-navy text-white py-3 px-6 rounded-full font-semibold hover:bg-gold transition-colors"
  >
    Download the Free Guide
  </button>

  <p className="text-sm text-gray-500 mt-4">
    🔒 We don’t do spam — just occasional planning wisdom and clarity-driven insights from the field.
  </p>
</form>
        ) : (
          <div className="text-lg text-green-700 font-semibold">
            ✅ Thanks! Your free guide is on the way. Check your inbox, or your spam folder, and keep your questions ready.
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
