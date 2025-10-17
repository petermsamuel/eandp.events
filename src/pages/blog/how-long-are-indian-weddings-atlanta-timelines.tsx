import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const HowLongAreIndianWeddingsAtlanta: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  // ====== PAGE META ======
  const url = "https://eandp.events/blog/how-long-are-indian-weddings-atlanta-timelines";
  const title = "How Long Are Indian Weddings? Atlanta Ultimate Guide | E&P Events";
  const description =
    "Plan a multi-day Indian wedding in Atlanta with realistic 2–4 day timelines, buffers, vendor call times, and venue tips for Hindu, Sikh, Muslim & fusion.";
  const heroSrc = "/lovable-uploads/atlanta-south-asian-multiday-wedding-timelines-hero.webp"; // swap to your preferred hero
  const ogImage = "https://eandp.events/lovable-uploads/atlanta-indian-wedding-timelines-og.png"; // 1200x630 recommended
  const clarityUrl = "https://cal.com/eandp.events/30min";

  // ====== SCHEMA ======
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://eandp.events/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://eandp.events/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "How Long Are Indian Weddings? Atlanta Timeline Guide",
        item: url,
      },
    ],
  };

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How Long Are Indian Weddings? Atlanta Timeline Guide",
    description,
    image: [`https://eandp.events${heroSrc.replace(/\s/g, "%20")}`],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "E&P Events" },
    publisher: {
      "@type": "Organization",
      name: "E&P Events",
      logo: { "@type": "ImageObject", url: ogImage },
    },
    datePublished: "2025-10-13",
    dateModified: "2025-10-13",
    articleSection: "Weddings",
  };

  // FAQ (surfacing the primary query + variants)
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long are Indian weddings?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most U.S.-based Indian weddings run 2–4 days. A common flow is Day 1 Mehndi, Day 2 Haldi + Sangeet, Day 3 Ceremony + Reception. Atlanta venues often require 4–8 hour flips between major events.",
        },
      },
      {
        "@type": "Question",
        name: "How many days is a Hindu wedding in Atlanta?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Three days is typical: Mehndi, Haldi/Sangeet, and Ceremony + Reception. Build 60–90 minute macro-buffers around décor flips and 15–30 minute micro-buffers between segments.",
        },
      },
      {
        "@type": "Question",
        name: "How long is a Sikh Anand Karaj and reception?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Anand Karaj with kirtan is usually 60–90 minutes in the morning, followed by langar. Receptions later that day run ~3–4 hours. Plan 45–60 minutes travel from Norcross gurdwara to Buckhead/Midtown venues.",
        },
      },
      {
        "@type": "Question",
        name: "How long is a Nikah and Walima?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Nikah typically runs 30–60 minutes (readings, contract, prayers), with Walima that evening for 3–4 hours. Consider gendered seating and halal catering policies at Atlanta venues.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Performance */}
        <link rel="preload" as="image" href={heroSrc} type="image/webp" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(blogPostingLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <article className="bg-[#f7f7f2] pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-[#2a2a2a]">
          {/* HERO */}
          <div className="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg mb-10">
            <img
              src={heroSrc}
              alt="South Asian wedding planner checking a run of show in an Atlanta ballroom"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            How Long Are Indian Weddings? A Multi-Day Timeline (Atlanta)
          </h1>

          {/* INTRO */}
          <p className="text-lg mb-6">
            In Atlanta, most Indian and South Asian weddings span <strong>2–4 days</strong>. The exact length depends on
            your traditions, venues, and how you sequence events like Mehndi, Haldi, Sangeet/Garba, the ceremony
            (Pheras/Anand Karaj/Nikah), and your reception. The guide below shows realistic durations, buffers,
            and vendor call-times so your weekend flows with calm precision.
          </p>
          <p className="text-lg mb-8">
            Want help mapping your weekend?{" "}
            <a href={clarityUrl} className="text-blue-600 underline">
              Book a quick clarity call
            </a>{" "}
            or browse our{" "}
            <a href="https://eandp.events/weddings" className="text-blue-600 underline">
              wedding planning services
            </a>{" "}
            and{" "}
            <a href="https://eandp.events/blog/indian-wedding-venues-atlanta" className="text-blue-600 underline">
              Atlanta venue guide
            </a>
            .
          </p>

          {/* H2: Primary SEO block */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">
            Typical Length: 2–4 Days — What Each Day Usually Includes
          </h2>
          <div className="overflow-x-auto rounded-lg border bg-white mb-8">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 font-semibold">Day</th>
                  <th className="px-4 py-3 font-semibold">Events</th>
                  <th className="px-4 py-3 font-semibold">Typical Duration</th>
                  <th className="px-4 py-3 font-semibold">Atlanta Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">Day 1</td>
                  <td className="px-4 py-3">Mehndi (Open House)</td>
                  <td className="px-4 py-3">3–5 hrs</td>
                  <td className="px-4 py-3">Home, hall, or hotel; stain-safe setup; artists arrive early</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Day 2 (AM)</td>
                  <td className="px-4 py-3">Haldi / Maiyan</td>
                  <td className="px-4 py-3">2–3 hrs</td>
                  <td className="px-4 py-3">Protect surfaces; photo/video buffer; quick cleanup plan</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Day 2 (PM)</td>
                  <td className="px-4 py-3">Sangeet / Garba</td>
                  <td className="px-4 py-3">4–5 hrs</td>
                  <td className="px-4 py-3">1–2 hr soundcheck; performance cueing; guest flow</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Day 3 (AM)</td>
                  <td className="px-4 py-3">Baraat + Milni</td>
                  <td className="px-4 py-3">45–60 + 15–30 min</td>
                  <td className="px-4 py-3">Route + permits if public; hydration & shade April–Sept</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Day 3 (late AM)</td>
                  <td className="px-4 py-3">Ceremony (Pheras / Anand Karaj / Nikah)</td>
                  <td className="px-4 py-3">45–90 min (traditions vary)</td>
                  <td className="px-4 py-3">Open-flame rules; priest/imam/granthi early mic check</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Midday</td>
                  <td className="px-4 py-3">Lunch + Portraits</td>
                  <td className="px-4 py-3">60–90 min</td>
                  <td className="px-4 py-3">Family sets + couple portraits; weather backup</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Afternoon–Evening</td>
                  <td className="px-4 py-3">Flip to Reception</td>
                  <td className="px-4 py-3">4–8 hrs</td>
                  <td className="px-4 py-3">Hotel/service-elevator windows; plan conservatively</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Evening</td>
                  <td className="px-4 py-3">Reception</td>
                  <td className="px-4 py-3">~4 hrs</td>
                  <td className="px-4 py-3">Curfews 11pm–midnight common; some earlier</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* JUMP LINKS */}
          <p className="text-base mb-8">
            Jump to:{" "}
            <a href="#hindu" className="text-blue-600 underline">Hindu</a>{" • "}
            <a href="#sikh" className="text-blue-600 underline">Sikh</a>{" • "}
            <a href="#muslim" className="text-blue-600 underline">Muslim</a>{" • "}
            <a href="#fusion" className="text-blue-600 underline">Fusion</a>{" • "}
            <a href="#vendors" className="text-blue-600 underline">Vendor Call-Times</a>{" • "}
            <a href="#logistics" className="text-blue-600 underline">Atlanta Logistics</a>
          </p>

          {/* ---- FROM HERE DOWN: your existing Atlanta timelines content ---- */}
          {/* You can paste the fully formatted article body you approved earlier. */}
          {/* The section IDs below match the jump-links above. */}

          <h2 id="hindu" className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Hindu (3-Day Baseline)</h2>
          {/* ... paste your Hindu schedule & tables ... */}

          <h2 id="sikh" className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Sikh (2–3 Days)</h2>
          {/* ... paste your Sikh schedule ... */}

          <h2 id="muslim" className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Muslim (2–3 Days)</h2>
          {/* ... paste your Muslim schedule ... */}

          <h2 id="fusion" className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Fusion / Dual Ceremony</h2>
          {/* ... paste your fusion schedule ... */}

          <h2 id="vendors" className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Vendor Call-Times & Staffing</h2>
          {/* ... paste vendor matrix ... */}

          <h2 id="logistics" className="text-2xl md:text-3xl font-semibold mt-10 mb-4">Atlanta Venue Logistics</h2>
          {/* ... paste ATL permits, curfews, load-in, weather, traffic ... */}

          {/* CTA */}
          <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Plan with clarity, not guesswork.</h3>
            <p className="mb-4">
              We build culturally fluent, crisis-proof timelines for Atlanta weddings—so you can be fully present.
            </p>
            <a
              href={clarityUrl}
              className="inline-block px-6 py-3 rounded-lg bg-[#1f6feb] text-white font-semibold hover:opacity-90 transition"
            >
              Book a 30-Minute Clarity Call
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default HowLongAreIndianWeddingsAtlanta;
