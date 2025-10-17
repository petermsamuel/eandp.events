import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SouthAsianWeddingTimelinesAtlanta: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ====== PAGE META ======
  const url = "https://eandp.events/blog/multiday-south-asian-wedding-timelines-atlanta";
  const title = "Ultimate Multiday South Asian Wedding Timeline Guide (Atlanta Edition) | E&P Events";
  const description =
    "Your complete guide to planning multiday South Asian weddings in Atlanta. Hindu, Sikh, Muslim, and fusion timelines with local venue insights, vendor coordination strategies, and downloadable templates.";
  const heroSrc = "/lovable-uploads/atlanta-south-asian-multiday-wedding-timelines-hero.webp";
  const ogImage = "https://eandp.events/lovable-uploads/atlanta-south-asian-wedding-timelines-og.png";

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
        name: "Ultimate Multiday South Asian Wedding Timeline Guide (Atlanta Edition)",
        item: url,
      },
    ],
  };

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Ultimate Multiday South Asian Wedding Timeline Guide (Atlanta Edition)",
    description,
    image: [`https://eandp.events${heroSrc.replace(/\s/g, "%20")}`],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "E&P Events" },
    publisher: {
      "@type": "Organization",
      name: "E&P Events",
      logo: { "@type": "ImageObject", url: ogImage },
    },
    articleSection: "Weddings",
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
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

        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(blogPostingLd)}</script>
      </Helmet>

      <article className="bg-[#f7f7f2] pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-[#2a2a2a]">
          {/* HERO */}
          <div className="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg mb-10">
            <img
              src={heroSrc}
              alt="Atlanta South Asian wedding timeline guide hero image"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Ultimate Multiday South Asian Wedding Timeline Guide (Atlanta Edition)
          </h1>

          {/* META DESCRIPTION */}
          <p className="text-base italic text-gray-700 mb-8">
            "Your complete guide to planning multiday South Asian weddings in Atlanta. Hindu, Sikh, Muslim, and fusion
            timelines with local venue insights, vendor coordination strategies, and downloadable templates."
          </p>

          {/* INTRO */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Introduction</h2>
          <p className="text-lg mb-4">
            South Asian weddings in Atlanta are extraordinary celebrations—multiple days of ritual, joy, and connection.
            They're also complex orchestrations that deserve thoughtful planning, especially in a city with its own unique
            venue landscape, permitting requirements, and cultural community.
          </p>
          <p className="text-lg mb-4">
            Here's what we know after years of guiding couples through these celebrations via our metro Atlanta wedding
            planning studio: a detailed timeline isn't about rigidity—it's about freedom. When every vendor, transition,
            and ritual has its proper space in the schedule, you're free to be present. Your family can focus on emotion,
            not logistics. Your guests experience seamless flow, not confusion.
          </p>
          <p className="text-lg mb-8">
            This guide shares the framework we use to create stress-free, culturally intelligent timelines for Hindu,
            Sikh, Muslim, and fusion weddings throughout the Atlanta area. You'll find traditional flows, local vendor
            coordination strategies, realistic buffers for Atlanta venues, and practical templates you can adapt to your
            celebration.
          </p>

          {/* WHY ATTENTION */}
          <h2 className="text-2xl font-semibold mt-10 mb-3">
            Why Your Timeline Deserves This Level of Attention
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">Cultural complexity meets high emotional stakes</h3>
          <p className="mb-4">
            When you're coordinating 3–4 ceremonies, multiple outfit changes, venue transformations, and guests moving
            between spaces, small delays compound quickly. A thoughtful timeline prevents that cascade.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Vendor harmony</h3>
          <p className="mb-4">
            Your hair and makeup artist, florist, AV team, and caterer each work on different rhythms. Your timeline
            becomes the common language that keeps everyone aligned—especially important in Atlanta's diverse vendor
            community.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Built-in breathing room</h3>
          <p className="mb-4">
            No ceremony ends exactly on schedule. Room flips take longer than expected. Atlanta weather changes plans
            (hello, afternoon thunderstorms). Strategic buffers—both small and substantial—absorb these realities without
            creating stress.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Guest experience</h3>
          <p className="mb-8">
            Clear schedules enable smooth transitions, helpful signage, and comfortable pacing. Your guests feel cared
            for, not confused—whether they're driving from Alpharetta, Decatur, or out of state.
          </p>

          {/* TRADITIONAL FLOWS */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Traditional Event Flows: What to Expect in Atlanta
          </h2>
          <p className="mb-6">
            Below are realistic timelines for the major South Asian wedding traditions in Atlanta settings. These aren't
            rigid rules—they're starting frameworks you'll customize with your planner based on your specific venues.
          </p>

          {/* HINDU */}
          <h3 className="text-xl font-semibold mt-6 mb-3">Hindu Weddings (Typical 3-Day Flow)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-200 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Day / Time</th>
                  <th className="p-3 text-left">Event</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-left">What You Need to Know</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Day 1</td>
                  <td className="p-3">Mehndi (Open House)</td>
                  <td className="p-3">3–5 hours</td>
                  <td className="p-3">
                    Artists arrive up to 12 hours early to ensure the set-up is done perfectly. Choose darker linens and
                    "stain-friendly" décor. Keep wet wipes and hand towels accessible. Popular venues: private homes,
                    community centers, hotel ballrooms.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Day 2 Morning</td>
                  <td className="p-3">Haldi</td>
                  <td className="p-3">2–3 hours</td>
                  <td className="p-3">
                    This ritual gets messy—prepare showers, protect surfaces, have fresh towels ready. Often held at
                    home, decorators will arrive up to 8 hours before.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Day 2 Evening</td>
                  <td className="p-3">Sangeet/Garba</td>
                  <td className="p-3">4–5 hours</td>
                  <td className="p-3">
                    Decorators will need up to 12 hours to set up, depending on the complexity of the design selection.
                    Allocate 1–2 hours for soundcheck. Assign a stage manager and create detailed performance cue sheets.
                    Consider venues with outdoor space for overflow.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Day 3 Morning</td>
                  <td className="p-3">Baraat + Milni</td>
                  <td className="p-3">45–60 min + 15–30 min</td>
                  <td className="p-3">
                    Map the procession route carefully—Atlanta traffic matters. If needed Atlanta PD will need to be
                    contracted for the event if utilizing roadways. Coordinate arrival times, plan hydration breaks
                    (especially April–September).
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Late Morning</td>
                  <td className="p-3">Wedding Ceremony</td>
                  <td className="p-3">60 min - 4 Hours</td>
                  <td className="p-3">
                    Secure fire permits for the mandap (requirements vary by county). Decorators can use up to 12 hours
                    for set up.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Midday</td>
                  <td className="p-3">Lunch &amp; Portraits</td>
                  <td className="p-3">~1 hour</td>
                  <td className="p-3">
                    Your photo team needs uninterrupted time for family portraits. Many Atlanta venues have beautiful
                    outdoor spaces—factor in weather backup.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Early Afternoon</td>
                  <td className="p-3">Vidaai &amp; Couple Portraits</td>
                  <td className="p-3">30–45 min</td>
                  <td className="p-3">
                    This emotional moment deserves space. Consider dual photo coverage. Atlanta's golden hour is
                    stunning for portraits, work with photographers for best Golden hour pictures.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Afternoon</td>
                  <td className="p-3">Reception Transformation</td>
                  <td className="p-3">7-9 Hours Min</td>
                  <td className="p-3">
                    The venue flip requires substantial time—décor tear-down, reset, lighting changes, stage setup.
                    Factor in Atlanta venue access restrictions. If using the same room the room flip can take up to 9
                    hours, but if reusing stage decor from the ceremony it can take less time to flip.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Evening</td>
                  <td className="p-3">Reception</td>
                  <td className="p-3">~4 hours</td>
                  <td className="p-3">
                    Guests seated by 7 pm. Include toasts, performances, and natural breaks in the flow. Most Atlanta
                    venues have 11 pm–midnight noise curfews, some being at 10pm..
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold mb-2">Atlanta-specific vendor coordination essentials:</h4>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>
              <strong>Hair &amp; Makeup:</strong> 3–3.5 hours for bride, plus buffer time. Many Atlanta HMUA artists travel
              to you—confirm location fees.
            </li>
            <li>
              <strong>Décor/Floral:</strong> Mandap setup often requires 10-12 hours; the ceremony-to-reception flip takes
              7-9 hours. Atlanta venues like The Biltmore Ballrooms, Grand Hyatt Buckhead, or The Georgian Terrace have
              specific load-in windows.
            </li>
            <li>
              <strong>AV/DJ:</strong> Separate soundchecks for baraat and evening events—1–2 hours before each. Outdoor
              baraats at venues like Chateau Elan need wireless mic systems.
            </li>
            <li>
              <strong>Priest/Officiant:</strong> Arrives 30–45 minutes early for setup and mic check. Atlanta's Hindu
              Temple of Atlanta and other local temples can provide referrals.
            </li>
            <li>
              <strong>Photography/Video:</strong> On-site 2-3 hours before ceremony for details and preparation coverage,
              getting ready pictures, first look and/or wedding party pictures. Popular Atlanta photo locations: Piedmont
              Park, Swan House, Ponce City Market rooftop.
            </li>
          </ul>
          <p className="mb-10">
            Want to understand how this timeline affects your budget? Review our full breakdown on Indian wedding costs
            in Atlanta.
          </p>

          {/* SIKH */}
          <h3 className="text-xl font-semibold mt-6 mb-3">Sikh Weddings (Typical 2–3 Day Flow)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-200 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Day / Time</th>
                  <th className="p-3 text-left">Event</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-left">Considerations</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Day 1</td>
                  <td className="p-3">Maiyan/Haldi (optional)</td>
                  <td className="p-3">2–3 hours</td>
                  <td className="p-3">Intimate ritual setting the tone for the celebration.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Day 2 Morning</td>
                  <td className="p-3">Anand Karaj Ceremony</td>
                  <td className="p-3">1–1.5 hours</td>
                  <td className="p-3">
                    Typically scheduled for 9–10 am at Gurdwara. Coordinate with Gurudwara Sahib of Atlanta (Norcross)
                    for timing and logistics.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Midday</td>
                  <td className="p-3">Langar (Communal Meal)</td>
                  <td className="p-3">~45 min</td>
                  <td className="p-3">
                    Vegetarian lunch served to all. Plan efficient buffet flow and quick transition.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Afternoon</td>
                  <td className="p-3">Doli/Vidaai</td>
                  <td className="p-3">30–45 min</td>
                  <td className="p-3">Create quiet space for this emotional send-off. Build in buffer time.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Afternoon</td>
                  <td className="p-3">Portraits &amp; Refresh</td>
                  <td className="p-3">1–1.5 hours</td>
                  <td className="p-3">
                    Outfit changes and photos before evening celebration. Consider drive time from Norcross to evening
                    venue.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Evening</td>
                  <td className="p-3">Reception</td>
                  <td className="p-3">3–4 hours</td>
                  <td className="p-3">
                    Similar format to Hindu reception. Account for Atlanta traffic—Norcross to Buckhead/Midtown can be
                    45+ minutes during peak times.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold mb-2">Atlanta Gurdwara considerations:</h4>
          <ul className="list-disc pl-6 space-y-2 mb-10">
            <li>Gurudwara Sahib of Atlanta (Norcross) is the primary location</li>
            <li>Morning ceremony times are required</li>
            <li>All food must be vegetarian</li>
            <li>Shoes must be removed; heads covered</li>
            <li>
              Build in 45–60 minutes travel time to evening reception venues in Buckhead, Midtown, or downtown Atlanta
            </li>
            <li>I-85 and I-285 traffic can significantly impact timing—plan accordingly</li>
          </ul>

          {/* MUSLIM */}
          <h3 className="text-xl font-semibold mt-6 mb-3">Muslim Weddings (Typical 2–3 Day Flow)</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-200 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Day / Time</th>
                  <th className="p-3 text-left">Event</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Day 1</td>
                  <td className="p-3">Mehndi (optional)</td>
                  <td className="p-3">2–3 hours</td>
                  <td className="p-3">Often a lighter, more intimate version.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Day 2 Noon</td>
                  <td className="p-3">Nikah Ceremony</td>
                  <td className="p-3">30–45 min</td>
                  <td className="p-3">
                    May require separate seating areas. Confirm mic and livestream setup. Popular locations: Al-Farooq
                    Masjid (downtown), Masjid Al-Hedaya (Decatur), or private venues.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Afternoon</td>
                  <td className="p-3">Rukhsati</td>
                  <td className="p-3">20–40 min</td>
                  <td className="p-3">Emotional send-off immediately following Nikah. Ensure photo coverage.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Evening</td>
                  <td className="p-3">Walimah Reception</td>
                  <td className="p-3">3–4 hours</td>
                  <td className="p-3">
                    Doors typically open 1 hour after Nikah. Dinner, toasts, and celebration. Account for Atlanta
                    traffic between ceremony and reception venues.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold mb-2">Atlanta Muslim wedding considerations:</h4>
          <ul className="list-disc pl-6 space-y-2 mb-10">
            <li>Al-Farooq Masjid, Masjid Al-Hedaya, and other Atlanta mosques have specific requirements</li>
            <li>Some couples combine Nikah + Walimah into one extended event; others prefer separation</li>
            <li>Gendered seating and prayer areas may be required</li>
            <li>Livestreaming is common—ensure your AV team is prepared</li>
            <li>
              Halal catering requirements: Atlanta has excellent options including Zyka, Madina Grill, and specialized
              wedding caterers
            </li>
          </ul>

          {/* FUSION */}
          <h3 className="text-xl font-semibold mt-6 mb-3">
            Fusion/Dual Ceremonies (Compressed 1–2 Day Format)
          </h3>
          <p className="mb-3">For couples honoring multiple traditions in one day:</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-gray-200 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Event</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-left">Key Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Early Morning</td>
                  <td className="p-3">Hindu Ceremony (Baraat + Pheras)</td>
                  <td className="p-3">1–1.5 hours</td>
                  <td className="p-3">Typically starts 9–10 am</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Late Morning</td>
                  <td className="p-3">Family Portraits &amp; Lunch</td>
                  <td className="p-3">~1 hour</td>
                  <td className="p-3">
                    Buffer for guest transition and refreshment. Use Atlanta's outdoor spaces if weather permits.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Midday</td>
                  <td className="p-3">Bridal Refresh &amp; Change</td>
                  <td className="p-3">2–2.5 hours</td>
                  <td className="p-3">Hair, makeup touch-up, outfit change. Consider having HMUA on standby.</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Afternoon</td>
                  <td className="p-3">Western Ceremony</td>
                  <td className="p-3">30–45 min</td>
                  <td className="p-3">Guest reseating and second ceremony</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Late Afternoon</td>
                  <td className="p-3">Cocktail Hour &amp; Setup</td>
                  <td className="p-3">~1 hour</td>
                  <td className="p-3">Venue preparation for evening reception</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Evening</td>
                  <td className="p-3">Reception</td>
                  <td className="p-3">4+ hours</td>
                  <td className="p-3">
                    Dinner, dances, toasts, celebration. Plan for 11 pm–midnight venue close time.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold mb-2">Atlanta fusion wedding success strategies:</h4>
          <ul className="list-disc pl-6 space-y-2 mb-10">
            <li>Build 30–45 minute buffers between ceremonies for transitions</li>
            <li>Use clear signage and ushers to guide guests between spaces</li>
            <li>Design décor that works across both ceremonies (mandap doubling as ceremony backdrop)</li>
            <li>
              Popular Atlanta fusion venues: The Estate, Flourish Atlanta, 550 Trackside, The Fernbank Museum
            </li>
            <li>
              Communicate the day's flow clearly to guests in advance—many will be unfamiliar with South Asian wedding
              traditions
            </li>
          </ul>

          {/* VENDOR COORDINATION */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Behind the Scenes: Atlanta Vendor Timing &amp; Coordination
          </h2>
          <p className="mb-4">
            Getting the vendor schedule right is what separates smooth celebrations from stressful ones in Atlanta's
            competitive wedding market.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Hair &amp; Makeup Artists</h3>
          <p className="mb-4">
            Book 3–3.5 hours for the bride, plus 30–45 minute buffer. Bridesmaids need ~1-1.5 hours each. Atlanta's top
            South Asian HMUA artists book 12–18 months out for peak wedding season (April- –November).
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Décor &amp; Floral Teams</h3>
          <p className="mb-4">
            Mandap installation and Room Set up: 10-12 hours<br />
            Ceremony-to-reception transformation: 7-9 hours minimum<br />
            Note: Many Atlanta venues (The Biltmore, St. Regis, Four Seasons) have strict load-in schedules—coordinate
            early.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">AV &amp; DJ Teams</h3>
          <p className="mb-4">
            Soundcheck 1–2 hours before each event. Run separate checks for outdoor (baraat) and indoor functions.
            Atlanta venues with outdoor ceremony spaces (Callanwolde Fine Arts Center, Summerour Studio) require wireless
            systems.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Officiants (Priests/Imams/Pandits)</h3>
          <p className="mb-4">
            Arrive 30–45 minutes early for setup, mic testing, and final coordination. Book Atlanta-based officiants well
            in advance during peak season.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Photography &amp; Videography</h3>
          <p className="mb-4">
            On-site 3 hours before the first ritual. Account for detail shots, portrait blocks, and transition coverage.
            Factor in travel time between Atlanta photo locations and venue.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Catering &amp; Banquet Staff</h3>
          <p className="mb-4">
            On-site 1-4 hours before meal service, depending if making food on site or bringing in hot food in hot boxes.
            Atlanta's top South Asian caterers synchronize timing so buffet lines open exactly as planned.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Transportation &amp; Security</h3>
          <p className="mb-4">
            Brief teams 60–90 minutes prior. For baraat processions on Atlanta streets, coordinate with venue security. If
            including animals (horses, elephants), note that permits and insurance vary by county (Fulton, Gwinnett, Cobb
            have different requirements). Additional security or police will may be needed to be hired. Every city or
            venue functions differently.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Support Staff &amp; Coordination</h3>
          <p className="mb-8">
            Assign ceremony captains, ushers, and floaters. Use radio channels and color-coded roles. Pre-event huddles to
            keep everyone aligned should have taken place before event weekend to ensure everyone knows exactly the flow of
            events, and where designated people should be at what time.
          </p>

          <p className="mb-10 font-semibold">
            Not sure how to sync 15+ vendors across 3 days? Schedule a consult with us and we’ll walk you through it.
          </p>

          {/* ATLANTA VENUE LOGISTICS */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Atlanta Venue Logistics: What You Must Know
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">Fire Permits &amp; Open Flames</h3>
          <p className="mb-4">
            Fulton County, Gwinnett County, Cobb County, and DeKalb County each have different requirements for mandap
            sacred fires. Many Atlanta venues require fire-watch staff or only allow enclosed flame systems. Confirm
            requirements 3–6 months ahead at least—this isn't something to handle last-minute.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Sound Permits &amp; Noise Ordinances</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Most Atlanta venues have 11 pm or midnight noise curfews</li>
            <li>
              Outdoor venues (Ashton Gardens, Chateau Elan) may require sound permits for amplified music, or have an
              earlier cut of time depending on the day of the week
            </li>
            <li>Buckhead and Midtown have stricter noise ordinances than suburban venues</li>
            <li>Baraat processions with dhol drums typically don't require permits on private property, but check with venues</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Procession Routes &amp; Public Spaces</h3>
          <p className="mb-4">
            Baraats in public areas (Piedmont Park, downtown Atlanta streets) require special event permits from the City
            of Atlanta. Suburban venues with private roads (Chateau Elan, The Estate at Cherokee Dock) don't typically
            require permits. Map routes early and assign crowd marshals.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Load-In Access &amp; Timing</h3>
          <p className="mb-4">
            Atlanta venue loading docks and elevators have restricted windows due to the space, and can not accommodate
            multiple vendors unloading trucks at the same time:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Downtown venues (Fox Theatre, The Georgian Terrace): Often require night-before or early-morning load-in
            </li>
            <li>Hotel venues (Grand Hyatt Buckhead, St. Regis, Four Seasons): Strict service elevator schedules</li>
            <li>Suburban venues (The Estate, Ashton Gardens): More flexible but still require advance coordination</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">Weather Contingency Plans</h3>
          <p className="mb-4">
            Atlanta weather is unpredictable, especially:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Spring (March–May): Thunderstorms, tornado warnings</li>
            <li>Summer (June–August): Afternoon storms, extreme heat and humidity (95°F+)</li>
            <li>Fall (September–November): Generally stable but thunderstorms are not uncommon</li>
          </ul>
          <p className="mb-4">
            Always secure indoor backup space or tent options for outdoor events. Establish clear decision triggers (rain,
            lightning, heat index over 100°F) and have the adjusted schedule ready. Moving location of event(s) due to
            weather is typically called 48-72 hours prior to the event.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Religious Venue Requirements</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Hindu Temple of Atlanta (Riverdale): Specific ceremony timing windows, vegetarian food only</li>
            <li>Gurudwara Sahib of Atlanta (Norcross): Morning ceremonies only, no shoes, vegetarian food, head coverings required</li>
            <li>Al-Farooq Masjid &amp; other Atlanta mosques: Gendered seating, modest décor, halal catering required</li>
          </ul>
          <p className="mb-6">Verify all requirements well in advance—assumptions create problems.</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Atlanta Traffic Considerations</h3>
          <p className="mb-4">Don't underestimate Atlanta traffic when planning your timeline:</p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>I-285 perimeter: Can add 30–60 minutes during rush hour</li>
            <li>I-85 North (to Gwinnett venues): Heavy traffic 3–7 pm</li>
            <li>Downtown to suburbs: Factor 45–75 minutes depending on time of day</li>
            <li>Weekend traffic: Less predictable but still significant for events, estimate 45-75 minutes</li>
          </ul>

          <p className="mb-10">
            Looking for a venue that supports multiday celebrations and mandap-friendly setups? Explore our list of Indian
            wedding venues in Atlanta.
          </p>

          {/* ENGINEERING THE TIMELINE */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">Engineering the Timeline: Strategy &amp; Flow</h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">Micro Buffers (15–30 minutes)</h3>
          <p className="mb-4">Between small segments: ceremony to photos, photos to lunch</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Macro Buffers (4-8 hours)</h3>
          <p className="mb-4">
            For major transformations: ceremony to reception, stage changes, décor flips. Atlanta venues often have
            shorter flip windows than other cities—plan conservatively.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Dual-Purpose Design</h3>
          <p className="mb-4">
            Plan mandap elements that transition into reception décor. Choose florals that work day-to-night and
            withstand Atlanta humidity.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Guest Flow &amp; Wayfinding</h3>
          <p className="mb-4">
            Printed maps, bilingual signage, designated ushers, separate entrances to prevent bottlenecks. For venues with
            multiple floors (The Biltmore, Grand Hyatt), elevator capacity becomes critical.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Accessibility &amp; Comfort</h3>
          <p className="mb-4">
            Ramps, reserved seating near exits, quiet rooms, large-print programs. Atlanta summers are hot—ensure adequate
            AC, hydration stations, and outdoor shade for baraats.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">Team Coordination Framework</h3>
          <ul className="list-disc pl-6 space-y-2 mb-10">
            <li>Assign lead captains per segment (ceremony captain, reception captain)</li>
            <li>Distribute radios and color-coded badges</li>
            <li>Hold 10-minute pre-event huddles ("Event starts in 10")</li>
            <li>Establish contingency signals for delays</li>
            <li>Account for Atlanta venue-specific quirks (parking validation, elevator schedules, load-out deadlines)</li>
          </ul>

          {/* SAMPLE TIMELINE */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Sample Timelines You Can Adapt (Atlanta Edition)
          </h2>

          <h3 className="text-xl font-semibold mt-4 mb-3">
            2-Day Fusion Wedding at Buckhead Venue (Hour-by-Hour)
          </h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border border-gray-200 text-sm md:text-base">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Time</th>
                  <th className="p-3 text-left">Event</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">4 am</td>
                  <td className="p-3">Bridal hair &amp; makeup begins (hotel suite or getting-ready venue)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">10 am</td>
                  <td className="p-3">Hindu ceremony—Baraat + Pheras (Grand Hyatt Buckhead Conservatory)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">11:30 am</td>
                  <td className="p-3">Family portraits, guest photos</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">12:15 am</td>
                  <td className="p-3">Lunch break (allow for Atlanta heat if outdoor space)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">2 pm</td>
                  <td className="p-3">Bride's refresh &amp; outfit change</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">5 pm</td>
                  <td className="p-3">Cocktail hour</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">6:30 pm</td>
                  <td className="p-3">Reception begins</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">10:30 pm</td>
                  <td className="p-3">Event close, strike begins (11 pm hard curfew)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CHECKLIST */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">Your Atlanta Wedding Planning Checklist</h2>

          <h3 className="text-xl font-semibold mt-4 mb-2">6–9 Months Before:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Book Atlanta venue (peak season books 12–18 months out)</li>
            <li>Confirm county-specific fire permits for mandap (Fulton, Gwinnett, Cobb, DeKalb)</li>
            <li>Verify venue noise curfews and sound restrictions</li>
            <li>Reserve baraat procession permits if using public Atlanta spaces</li>
            <li>Build micro and macro buffer times into schedule</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">3–6 Months Before:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Book all Atlanta vendors with buffer times included</li>
            <li>Finalize guest counts per event</li>
            <li>Confirm venue load-in windows and vendor access schedules</li>
            <li>Create signage and guest flow maps (include Atlanta traffic warnings)</li>
            <li>Reserve weather backup or indoor alternate space</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">1–2 Months Before:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Run coordination briefings with all vendor teams</li>
            <li>Distribute radio channels and assign roles</li>
            <li>Conduct final walkthrough with venue management</li>
            <li>Confirm strike/tear-down aligns with venue curfew</li>
            <li>Send guests Atlanta-specific information (parking, traffic routes, weather prep)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">1 Week Before:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-10">
            <li>Check Atlanta weather forecast and activate contingency plans if needed</li>
            <li>Reconfirm all vendor arrival times accounting for Atlanta traffic</li>
            <li>Final venue walkthrough with day-of coordinator</li>
            <li>Distribute final timeline to all vendors and family VIPs</li>
          </ul>

          {/* MOVING FORWARD */}
          <h2 className="text-2xl font-semibold mt-10 mb-4">Moving Forward: Your Atlanta Wedding Journey</h2>
          <p className="mb-4">
            Multiday South Asian weddings in Atlanta are intricate celebrations where tradition, emotion, and logistics
            intersect. When you approach your timeline as a strategic framework—not just a schedule—you create space for
            what matters: meaningful rituals, genuine connection, and joy without stress.
          </p>
          <p className="mb-4">
            The difference between a good timeline and a great one? Built-in resilience. Room to breathe. Cultural
            intelligence in every detail. And intimate knowledge of Atlanta's venues, vendors, and unique requirements.
          </p>
          <p className="mb-4">
            The difference between a good timeline and a great one? Built-in resilience. Room to breathe. Cultural
            intelligence in every detail.
          </p>
          <p>
            If you're planning a multiday South Asian or fusion wedding and want a partner who understands both the
            cultural significance and logistical complexity, explore our wedding planning services or book a call to get
            started.
          </p>
        </div>
      </article>
    </>
  );
};

export default SouthAsianWeddingTimelinesAtlanta;
