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
        <NavBarBlog />

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
            {/* ... keep the same SEO-optimized sections we wrote (Why choose us, What we do, How we work, Values, Service area, Results, CTA) ... */}
          </div>
        </section>

        <Footer />
      </div>

      <div className="lion-watermark" aria-hidden="true" />
    </>
  );
};

export default About;
