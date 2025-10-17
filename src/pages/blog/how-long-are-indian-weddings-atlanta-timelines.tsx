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
    headline: "How Long Are Indian Weddings? Atlanta Ultimate Guide",
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

{/* JUMP LINKS (custom scroll to avoid first-click bug) */}
<p className="text-base mb-8">
  Jump to:{" "}
  <a
    href="#hindu"
    className="text-blue-600 underline"
    onClick={(e) => {
      e.preventDefault();
      const id = "hindu";
      const el = document.getElementById(id);
      if (!el) return;
      const headerH = (document.querySelector("nav") as HTMLElement)?.offsetHeight || 96; // your fixed header
      const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8; // extra 8px breathing room
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }}
  >
    Hindu
  </a>{" • "}
  <a
    href="#sikh"
    className="text-blue-600 underline"
    onClick={(e) => {
      e.preventDefault();
      const id = "sikh";
      const el = document.getElementById(id);
      if (!el) return;
      const headerH = (document.querySelector("nav") as HTMLElement)?.offsetHeight || 96;
      const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }}
  >
    Sikh
  </a>{" • "}
  <a
    href="#muslim"
    className="text-blue-600 underline"
    onClick={(e) => {
      e.preventDefault();
      const id = "muslim";
      const el = document.getElementById(id);
      if (!el) return;
      const headerH = (document.querySelector("nav") as HTMLElement)?.offsetHeight || 96;
      const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }}
  >
    Muslim
  </a>{" • "}
  <a
    href="#fusion"
    className="text-blue-600 underline"
    onClick={(e) => {
      e.preventDefault();
      const id = "fusion";
      const el = document.getElementById(id);
      if (!el) return;
      const headerH = (document.querySelector("nav") as HTMLElement)?.offsetHeight || 96;
      const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }}
  >
    Fusion
  </a>{" • "}
  <a
    href="#vendors"
    className="text-blue-600 underline"
    onClick={(e) => {
      e.preventDefault();
      const id = "vendors";
      const el = document.getElementById(id);
      if (!el) return;
      const headerH = (document.querySelector("nav") as HTMLElement)?.offsetHeight || 96;
      const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }}
  >
    Vendor Call-Times
  </a>{" • "}
  <a
    href="#logistics"
    className="text-blue-600 underline"
    onClick={(e) => {
      e.preventDefault();
      const id = "logistics";
      const el = document.getElementById(id);
      if (!el) return;
      const headerH = (document.querySelector("nav") as HTMLElement)?.offsetHeight || 96;
      const y = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }}
  >
    Atlanta Logistics
  </a>
</p>


{/* =========================
   HINDU (3-DAY BASELINE)
   ========================= */}
<h2 id="hindu" className="scroll-mt-24 md:scroll-mt-28 text-2xl md:text-3xl font-semibold mt-10 mb-4">
  Hindu (3-Day Baseline)
</h2>
<div className="overflow-x-auto rounded-lg border bg-white mb-6">
  <table className="min-w-full text-left text-sm">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 font-semibold">Day / Time</th>
        <th className="px-4 py-3 font-semibold">Segment</th>
        <th className="px-4 py-3 font-semibold">Duration</th>
        <th className="px-4 py-3 font-semibold">What to Know (Atlanta)</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <td className="px-4 py-3">Day 1 (PM)</td>
        <td className="px-4 py-3">Mehndi (Open House)</td>
        <td className="px-4 py-3">3–5 hrs</td>
        <td className="px-4 py-3">
          Artists arrive early; stain-friendly décor; wipes/towels handy. Venues: homes, community halls, hotel salons.
        </td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Day 2 (AM)</td>
        <td className="px-4 py-3">Haldi</td>
        <td className="px-4 py-3">2–3 hrs</td>
        <td className="px-4 py-3">
          Protect floors/walls; showers prepped; decorators often pre-load. Frequently hosted at home.
        </td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Day 2 (PM)</td>
        <td className="px-4 py-3">Sangeet / Garba</td>
        <td className="px-4 py-3">4–5 hrs</td>
        <td className="px-4 py-3">
          Allow 1–2 hr soundcheck; stage manager & cue sheets. Consider overflow space; Atlanta traffic for arrivals.
        </td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Day 3 (AM)</td>
        <td className="px-4 py-3">Baraat + Milni</td>
        <td className="px-4 py-3">45–60 + 15–30 min</td>
        <td className="px-4 py-3">
          Map route; shade/water Apr–Sep; public routes may require APD coordination & permits.
        </td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Late Morning</td>
        <td className="px-4 py-3">Ceremony (Pheras)</td>
        <td className="px-4 py-3">60–90 min (region varies)</td>
        <td className="px-4 py-3">
          Fire policies differ by county/venue; decorators often need 10–12 hrs for mandap.
        </td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Midday</td>
        <td className="px-4 py-3">Lunch & Portraits</td>
        <td className="px-4 py-3">~60–90 min</td>
        <td className="px-4 py-3">
          Dedicated family photo block; outdoor portrait backup for weather.
        </td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Afternoon</td>
        <td className="px-4 py-3">Vidaai & Couple Portraits</td>
        <td className="px-4 py-3">30–45 min</td>
        <td className="px-4 py-3">Give emotional buffer; consider golden hour portraits.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Late Afternoon–Eve</td>
        <td className="px-4 py-3">Room Flip to Reception</td>
        <td className="px-4 py-3">7–9 hrs (same room)</td>
        <td className="px-4 py-3">
          Service-elevator windows; strict loading docks at major hotels; reuse ceremony décor where possible.
        </td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Evening</td>
        <td className="px-4 py-3">Reception</td>
        <td className="px-4 py-3">~4 hrs</td>
        <td className="px-4 py-3">
          Most venues end 11pm–midnight (some 10pm). Sequence entrances, toasts, first dances, and open dancing.
        </td>
      </tr>
    </tbody>
  </table>
</div>

<ul className="list-disc pl-6 text-base space-y-2 mb-10">
  <li><strong>Hair &amp; Makeup:</strong> 3–3.5 hrs bridal + buffer; many ATL artists travel—confirm fees.</li>
  <li><strong>Décor:</strong> Mandap 10–12 hrs; ceremony→reception flip 7–9 hrs if same space.</li>
  <li><strong>AV/DJ:</strong> Separate soundchecks for baraat &amp; evening (1–2 hrs each).</li>
  <li><strong>Priest/Officiant:</strong> Arrive 30–45 min early for setup &amp; mic test.</li>
  <li><strong>Photo/Video:</strong> On-site 2–3 hrs pre-ceremony; plan family sets post-ceremony.</li>
</ul>

{/* =========================
   SIKH (2–3 DAYS)
   ========================= */}
<h2 id="sikh" className="scroll-mt-24 md:scroll-mt-28 text-2xl md:3xl font-semibold mt-10 mb-4">
  Sikh (2–3 Days)
</h2>
<div className="overflow-x-auto rounded-lg border bg-white mb-6">
  <table className="min-w-full text-left text-sm">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 font-semibold">Day / Time</th>
        <th className="px-4 py-3 font-semibold">Segment</th>
        <th className="px-4 py-3 font-semibold">Duration</th>
        <th className="px-4 py-3 font-semibold">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <td className="px-4 py-3">Day 1</td>
        <td className="px-4 py-3">Maiyan/Haldi (optional)</td>
        <td className="px-4 py-3">2–3 hrs</td>
        <td className="px-4 py-3">Intimate ritual at home/venue.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Day 2 (AM)</td>
        <td className="px-4 py-3">Anand Karaj (Laavan)</td>
        <td className="px-4 py-3">1–1.5 hrs</td>
        <td className="px-4 py-3">Common start 9–10am at Norcross gurdwara; head coverings, no shoes, vegetarian rules.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Midday</td>
        <td className="px-4 py-3">Langar</td>
        <td className="px-4 py-3">~45–90 min</td>
        <td className="px-4 py-3">Communal vegetarian meal; plan efficient service.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Afternoon</td>
        <td className="px-4 py-3">Doli/Vidaai</td>
        <td className="px-4 py-3">30–45 min</td>
        <td className="px-4 py-3">Space for a quiet, emotional send-off.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Evening</td>
        <td className="px-4 py-3">Reception</td>
        <td className="px-4 py-3">3–4 hrs</td>
        <td className="px-4 py-3">Plan 45–60 min travel to Buckhead/Midtown venues from Norcross.</td>
      </tr>
    </tbody>
  </table>
</div>

{/* =========================
   MUSLIM (2–3 DAYS)
   ========================= */}
<h2 id="muslim" className="scroll-mt-24 md:scroll-mt-28 text-2xl md:text-3xl font-semibold mt-10 mb-4">
  Muslim (2–3 Days)
</h2>
<div className="overflow-x-auto rounded-lg border bg-white mb-6">
  <table className="min-w-full text-left text-sm">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 font-semibold">Day / Time</th>
        <th className="px-4 py-3 font-semibold">Segment</th>
        <th className="px-4 py-3 font-semibold">Duration</th>
        <th className="px-4 py-3 font-semibold">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <td className="px-4 py-3">Day 1 (PM)</td>
        <td className="px-4 py-3">Mehndi (optional)</td>
        <td className="px-4 py-3">2–3 hrs</td>
        <td className="px-4 py-3">Smaller, social gathering.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Day 2 (Noon)</td>
        <td className="px-4 py-3">Nikah Ceremony</td>
        <td className="px-4 py-3">30–60 min</td>
        <td className="px-4 py-3">Readings, contract, prayers; optional gendered seating; livestream common.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Afternoon</td>
        <td className="px-4 py-3">Rukhsati</td>
        <td className="px-4 py-3">20–40 min</td>
        <td className="px-4 py-3">Immediate send-off; ensure photo coverage.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Evening</td>
        <td className="px-4 py-3">Walima</td>
        <td className="px-4 py-3">3–4 hrs</td>
        <td className="px-4 py-3">Dinner & celebration; plan travel buffers between venues.</td>
      </tr>
    </tbody>
  </table>
</div>

{/* =========================
   FUSION / DUAL CEREMONY
   ========================= */}
<h2 id="fusion" className="scroll-mt-24 md:scroll-mt-28 text-2xl md:text-3xl font-semibold mt-10 mb-4">
  Fusion / Dual Ceremony (Compressed Day)
</h2>
<div className="overflow-x-auto rounded-lg border bg-white mb-6">
  <table className="min-w-full text-left text-sm">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 font-semibold">Time</th>
        <th className="px-4 py-3 font-semibold">Segment</th>
        <th className="px-4 py-3 font-semibold">Duration</th>
        <th className="px-4 py-3 font-semibold">Key Details</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <td className="px-4 py-3">AM</td>
        <td className="px-4 py-3">Hindu Ceremony (Baraat + Pheras)</td>
        <td className="px-4 py-3">1–1.5 hrs</td>
        <td className="px-4 py-3">Often starts 9–10am; confirm fire policies.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Late AM</td>
        <td className="px-4 py-3">Family Portraits & Lunch</td>
        <td className="px-4 py-3">~60 min</td>
        <td className="px-4 py-3">Buffer for guest transition & refresh.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Midday</td>
        <td className="px-4 py-3">Bridal Refresh & Outfit Change</td>
        <td className="px-4 py-3">2–2.5 hrs</td>
        <td className="px-4 py-3">HMUA on standby recommended.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Afternoon</td>
        <td className="px-4 py-3">Western Ceremony</td>
        <td className="px-4 py-3">30–45 min</td>
        <td className="px-4 py-3">Guest reseating & second ceremony.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Late Afternoon</td>
        <td className="px-4 py-3">Cocktail Hour & Setup</td>
        <td className="px-4 py-3">~60 min</td>
        <td className="px-4 py-3">Room prep for reception.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Evening</td>
        <td className="px-4 py-3">Reception</td>
        <td className="px-4 py-3">4+ hrs</td>
        <td className="px-4 py-3">Typical close 11pm–midnight.</td>
      </tr>
    </tbody>
  </table>
</div>

<ul className="list-disc pl-6 text-base space-y-2 mb-10">
  <li>Build 30–45 min buffers between ceremonies.</li>
  <li>Clear signage & ushers for guest routing.</li>
  <li>Design décor that transitions (e.g., mandap as backdrop).</li>
</ul>

{/* =========================
   VENDOR CALL-TIMES
   ========================= */}
<h2 id="vendors" className="scroll-mt-24 md:scroll-mt-28 text-2xl md:text-3xl font-semibold mt-10 mb-4">
  Vendor Call-Times & Staffing (Atlanta)
</h2>
<div className="overflow-x-auto rounded-lg border bg-white mb-6">
  <table className="min-w-full text-left text-sm">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-3 font-semibold">Event</th>
        <th className="px-4 py-3 font-semibold">HMUA</th>
        <th className="px-4 py-3 font-semibold">Décor/Floral</th>
        <th className="px-4 py-3 font-semibold">AV/DJ</th>
        <th className="px-4 py-3 font-semibold">Officiant</th>
        <th className="px-4 py-3 font-semibold">Photo/Video</th>
        <th className="px-4 py-3 font-semibold">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <td className="px-4 py-3">Mehndi</td>
        <td className="px-4 py-3">2–3 hrs prior</td>
        <td className="px-4 py-3">~2 hrs prior</td>
        <td className="px-4 py-3">—</td>
        <td className="px-4 py-3">—</td>
        <td className="px-4 py-3">~1 hr prior</td>
        <td className="px-4 py-3">Snacks/tea service.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Haldi</td>
        <td className="px-4 py-3">~2 hrs prior</td>
        <td className="px-4 py-3">~1 hr prior</td>
        <td className="px-4 py-3">—</td>
        <td className="px-4 py-3">—</td>
        <td className="px-4 py-3">~1 hr prior</td>
        <td className="px-4 py-3">Protective floor coverings.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Sangeet</td>
        <td className="px-4 py-3">2–3 hrs prior</td>
        <td className="px-4 py-3">3+ hrs prior</td>
        <td className="px-4 py-3">1–2 hrs soundcheck</td>
        <td className="px-4 py-3">—</td>
        <td className="px-4 py-3">~2 hrs prior</td>
        <td className="px-4 py-3">Cue sheets & program captain.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Baraat</td>
        <td className="px-4 py-3">—</td>
        <td className="px-4 py-3">Route pre-load</td>
        <td className="px-4 py-3">1 hr prior</td>
        <td className="px-4 py-3">—</td>
        <td className="px-4 py-3">~1 hr prior</td>
        <td className="px-4 py-3">APD/permits if public; hydration.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Ceremony</td>
        <td className="px-4 py-3">3 hrs prior</td>
        <td className="px-4 py-3">4–6 hrs prior</td>
        <td className="px-4 py-3">2 hrs prior</td>
        <td className="px-4 py-3">30–45 min early</td>
        <td className="px-4 py-3">~2 hrs prior</td>
        <td className="px-4 py-3">Fire policy checks; mic tests.</td>
      </tr>
      <tr className="border-t">
        <td className="px-4 py-3">Reception</td>
        <td className="px-4 py-3">Flip-aligned</td>
        <td className="px-4 py-3">Full flip crew</td>
        <td className="px-4 py-3">1 hr tech run</td>
        <td className="px-4 py-3">—</td>
        <td className="px-4 py-3">~2 hrs prior</td>
        <td className="px-4 py-3">Sequence entrances/toasts/dances.</td>
      </tr>
    </tbody>
  </table>
</div>

<ul className="list-disc pl-6 text-base space-y-2 mb-10">
  <li><strong>Strike:</strong> 2–4 hrs post-event (venue curfews enforced).</li>
  <li><strong>Staffing ratios (guideline):</strong> Bars 1/40–60 guests; Ushers 1/50–75; Security 1/150–200.</li>
</ul>

{/* =========================
   ATLANTA LOGISTICS
   ========================= */}
<h2 id="logistics" className="scroll-mt-24 md:scroll-mt-28 text-2xl md:text-3xl font-semibold mt-10 mb-4">
  Atlanta Venue Logistics: Permits, Curfews, Load-In, Weather & Traffic
</h2>

<ul className="list-disc pl-6 text-base space-y-3 mb-8">
  <li><strong>Open Flame:</strong> County rules vary (Fulton, Gwinnett, Cobb, DeKalb). Some venues require fire-watch or enclosed systems. Confirm 3–6 months out.</li>
  <li><strong>Sound & Curfews:</strong> Most venues end 11pm–midnight; some 10pm. Outdoor spaces may need sound permits or have decibel caps.</li>
  <li><strong>Baraat Routes:</strong> Private property preferred; public routes may require City of Atlanta permits & police coordination.</li>
  <li><strong>Load-In Windows:</strong> Downtown hotels/theatres enforce strict dock & service-elevator schedules; plan vendor staging.</li>
  <li><strong>Weather:</strong> Spring storms; summer heat/humidity (95°F+); maintain indoor/tent backup and decision triggers (48–72 hrs out).</li>
  <li><strong>Traffic Buffers:</strong> I-285 & I-85 can add 30–60+ minutes at peaks; plan 45–75 minutes for cross-city travel.</li>
</ul>

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
