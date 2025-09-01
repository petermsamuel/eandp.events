import React from "react";
import NavBarBlog from "@/components/NavBarBlog";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

// Helpers
const ABSOLUTE_ORIGIN = "https://eandp.events";
const toAbs = (p: string) => (p.startsWith("http") ? p : `${ABSOLUTE_ORIGIN}${p}`);

const About = () => {
  const pageUrl = `${ABSOLUTE_ORIGIN}/about`;
  const heroImage = "/lovable-uploads/IMG_0409.webp"; // reuse a known-good hero
  const absHero = toAbs(heroImage);

  // JSON-LD
  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About E&P Events",
    url: pageUrl,
    headline: "About E&P Events | Atlanta Wedding & Corporate Event Planners",
    description:
      "E&P Events is an Atlanta-based planning studio known for crisis-proof execution, flat-fee transparency, and cultural fluency in South Asian & fusion weddings and corporate events.",
    mainEntity: {
      "@type": "Organization",
      name: "E&P Events",
      url: ABSOLUTE_ORIGIN,
      areaServed: ["Atlanta, GA", "Georgia", "United States"],
      sameAs: [
        "https://www.instagram.com/eandp_events/",
        "https://www.facebook.com/eventsep/"
      ],
    },
    publisher: { "@type": "Organization", name: "E&P Events", url: ABSOLUTE_ORIGIN },
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ABSOLUTE_ORIGIN + "/" },
      { "@type": "ListItem", position: 2, name: "About", item: pageUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About E&amp;P Events | Atlanta Wedding &amp; Corporate Event Planners</title>
        <meta
          name="description"
          content="We don’t just plan events. We run them. E&P Events brings structure, clarity, and cultural intelligence to high-stakes weddings and corporate events."
        />
        <link rel="canonical" href={pageUrl} />
        <link rel="preload" as="image" href={heroImage} type="image/webp" />

        {/* OG / Twitter */}
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About E&P Events | Atlanta Wedding & Corporate Event Planners" />
        <meta
          property="og:description"
          content="Crisis-proof execution, flat-fee transparency, and cultural fluency in South Asian & fusion weddings and corporate events."
        />
        <meta property="og:image" content={absHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About E&P Events | Atlanta Wedding & Corporate Event Planners" />
        <meta
          name="twitter:description"
          content="Crisis-proof execution, flat-fee transparency, and cultural fluency in South Asian & fusion weddings and corporate events."
        />
        <meta name="twitter:image" content={absHero} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      </Helmet>

      <div className="min-h-screen bg-[#f7f7f2] flex flex-col">
        <NavBarCorporate />

        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-[60vh] flex flex-col justify-center pt-28 pb-12 px-4 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-snug mx-auto drop-shadow-lg">
              About E&amp;P Events
            </h1>
            <p className="text-lg text-white mb-6">
              We don’t just plan events. We run them. Calm leadership, crisp systems, and cultural intelligence—for weddings and corporate experiences that actually work.
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <a href="#about-content" aria-label="Scroll to content">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Content */}
        <section id="about-content" className="py-20 px-4 bg-[#f8f6ed]">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Intro */}
            <div className="text-center">
              <h2 className="section-title text-[#2a2a2a] mb-4">We run the room—so you can enjoy it.</h2>
              <p className="text-lg text-gray-700">
                E&amp;P Events is a boutique planning studio based in Atlanta, trusted for high-stakes execution and calm leadership.
                We bring structure, clarity, and cultural intelligence to weddings and corporate events—so you can focus on the moment, not the mess.
              </p>
            </div>

            {/* Why choose us */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">Why clients choose us</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><b>Crisis-proof execution:</b> Contingencies for every failure point—handled discreetly.</li>
                  <li><b>Flat-fee transparency:</b> No commissions or surprises. Clear scope, clear price, clear outcomes.</li>
                  <li><b>Cultural fluency:</b> Deep expertise in <b>South Asian &amp; fusion weddings</b> and cross-cultural corporate experiences.</li>
                  <li><b>Ownership mentality:</b> We lead like it’s ours—so you can enjoy it like it’s yours.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">What we do</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><b>Weddings:</b> Full-service planning, month-of coordination, and production management for South Asian &amp; fusion celebrations and multi-event weekends.</li>
                  <li><b>Corporate:</b> Executive summits, brand activations, conferences, and donor/board experiences where timing and tone matter.</li>
                  <li><b>Scale:</b> From 100 guests to 1,500+, we protect the run of show and the guest experience.</li>
                </ul>
              </div>
            </div>

            {/* How we work */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#2a2a2a]">How we work</h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li><b>Define the mission</b> — goals, constraints, must-haves.</li>
                <li><b>Build the blueprint</b> — budget, vendors, timeline, risk plan.</li>
                <li><b>Run the room</b> — decisive showcalling, vendor leadership, discreet problem-solving.</li>
                <li><b>Debrief</b> — what worked, what we improved, what you’ll remember.</li>
              </ol>
              <blockquote className="mt-6 italic border-l-4 border-gold pl-4 text-gray-800">
                “Emergencies handled so smoothly that no one noticed.” — That’s the bar.
              </blockquote>
            </div>

            {/* Values & Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">Values we won’t compromise</h3>
                <p className="text-gray-700">
                  <b>Excellence</b> • <b>Integrity</b> • <b>Ownership</b> • <b>Clarity</b> • <b>Cultural Intelligence</b>
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">Selected experience</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Multi-day South Asian &amp; fusion weddings (Atlanta &amp; beyond)</li>
                  <li>Executive programs with global dignitaries (incl. United Nations initiatives)</li>
                  <li>High-capacity productions with 1,500+ guests</li>
                </ul>
              </div>
            </div>

            {/* Service area & Meet Peter */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#2a2a2a]">Service area</h3>
              <p className="text-gray-700">
                Atlanta and greater Georgia as home base. <b>Available nationwide</b>; travel billed transparently at cost.
              </p>
              <div className="mt-6">
                <a href="/#meet-peter" className="text-gold underline font-semibold">
                  → Your Event’s Calm Commander: Meet Peter
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="section-title text-[#2a2a2a] mb-4">Ready when you are</h3>
              <p className="text-lg text-gray-700 mb-8">
                If strategy, empathy, and flawless delivery matter, we’re your team.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="https://cal.com/eandp.events/corporate-b2b-15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary bg-navy text-white rounded-full px-6 py-3"
                >
                  Book a Consult
                </a>
                <a href="mailto:info@eandp.events" className="text-gold underline font-semibold">
                  info@eandp.events
                </a>
                <a href="tel:17704108302" className="text-gold underline font-semibold">
                  (770) 410-8302
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <div className="lion-watermark" aria-hidden="true" />
    </>
  );
};

export default About;
