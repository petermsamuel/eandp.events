import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Flame, Users } from "lucide-react";

const IconCircle = ({ icon: Icon, bgColor, iconColor }: { icon: any, bgColor: string, iconColor: string }) => (
  <div className={`h-14 w-14 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
    <Icon className={`h-7 w-7 ${iconColor} stroke-[1.5]`} />
  </div>
);

const Weddings = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-serif">
      {/* Hero Section */}
      <section id="hero" className="py-20 px-6 md:px-12 lg:px-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto">
          Your Wedding Deserves More Than a Checklist. It Deserves Leadership.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 font-normal font-sans">
          From the sangeet to the send-off, we don't just plan — we protect your vision, your culture, and your joy.
        </p>
        <Button className="px-6 py-6 text-lg h-auto">Book Your Free Clarity Call</Button>
      </section>

      {/* What You Need, What We Do */}
      <section id="what-we-do" className="py-20 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title">What You Need, What We Do</h2>
          <p className="text-lg max-w-3xl mx-auto mb-16 font-sans">
            Planning a South Asian or fusion wedding means balancing tradition, family, and a thousand decisions.
            Most planners help with logistics. We take ownership — so you can live in the moment instead of managing it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg">
              <IconCircle icon={Check} bgColor="bg-amber-100" iconColor="text-amber-700" />
              <h3 className="text-xl font-semibold mb-2">Multiday timelines?</h3>
              <p className="text-lg font-sans">Covered.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg">
              <IconCircle icon={Flame} bgColor="bg-emerald-100" iconColor="text-emerald-700" />
              <h3 className="text-xl font-semibold mb-2">Cultural nuances?</h3>
              <p className="text-lg font-sans">Fluent.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg">
              <IconCircle icon={Users} bgColor="bg-rose-100" iconColor="text-rose-700" />
              <h3 className="text-xl font-semibold mb-2">Family dynamics?</h3>
              <p className="text-lg font-sans">Navigated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="space-y-16">
            {[
              {
                title: "Plan with Precision",
                desc: "We start with your vision, then build a plan that respects tradition and ensures calm.",
              },
              {
                title: "Align the Details",
                desc: "From vendors to venues, every moving part gets locked into place.",
              },
              {
                title: "Execute with Ownership",
                desc: "You're not managing your wedding — you're experiencing it.",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                <div className="h-14 w-14 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-lg font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonial" className="py-20 px-6 md:px-12 lg:px-16 bg-[#2a2a2a] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="section-title text-white">What Couples Say</h2>
          <blockquote className="text-xl md:text-2xl italic font-light mb-6 max-w-3xl mx-auto">
            "I didn't realize how much stress I was carrying until Peter took over. Every detail was handled — and we actually enjoyed every moment."
          </blockquote>
          <p className="text-lg">— Mitali & Jay</p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Real weddings. Real emotion.</h2>
            <p className="text-lg font-sans">Cultural beauty meets seamless coordination.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-[4/3] bg-gray-100 rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600096194534-95cf5b9f035f?auto=format&fit=crop&w=600&q=80"
                  alt={`Wedding gallery image ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 px-6 md:px-12 lg:px-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Feel Seen. Feel Ready. Feel Present.</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto font-sans">
            Let's create a wedding experience you'll remember for how it felt — not just how it looked.
          </p>
          <Button className="px-6 py-6 text-lg h-auto">👉 Book Your Free Clarity Call</Button>
          <p className="mt-8 text-gray-600 font-sans">
            Or email us at info@events-ep.com. You'll get a response from a real person — not a bot, not a sales script.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
