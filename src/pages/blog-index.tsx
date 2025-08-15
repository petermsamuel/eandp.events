import React from "react";
import NavBarBlog from "@/components/NavBarBlog";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import blogMeta from "@/data/blog.json";


// Per-post assets/excerpts (keep here or move into JSON later)
const IMAGE_MAP: Record<string, string> = {
  "what-does-a-corporate-event-planner-do":
    "/lovable-uploads/ChatGPT Image Jun 14, 2025, 03_13_22 PM.webp?auto=format&fit=crop&w=600&q=80",
  "hidden-costs-diy-corporate-events":
    "/lovable-uploads/ChatGPT Image Jul 2, 2025, 03_37_53 PM.webp?auto=format&fit=crop&w=600&q=80",
  "why-smart-atlanta-companies-hire-event-planners":
    "/lovable-uploads/ChatGPT Image Jul 12, 2025, 10_52_15 AM.webp?auto=format&fit=crop&w=600&q=80",
};

const EXCERPT_MAP: Record<string, string> = {
  "what-does-a-corporate-event-planner-do":
    "Discover the real strategy behind flawless corporate events—what expert planners actually do, how they protect your brand, and why execution is everything.",
  "hidden-costs-diy-corporate-events":
    "DIY corporate events may look budget-friendly—but hidden costs, missed strategy, and brand risks make expert planning a smarter investment.",
  "why-smart-atlanta-companies-hire-event-planners":
    "Discover the strategic, financial, and brand risks companies face when planning corporate events alone.",
};

// Helpers
const ABSOLUTE_ORIGIN = "https://eandp.events";
const toAbs = (p: string) => (p.startsWith("http") ? p : `${ABSOLUTE_ORIGIN}${p}`);
const stripQuery = (u: string) => u.split("?")[0];

const Blog = () => {
  const pageUrl = `${ABSOLUTE_ORIGIN}/blog`;
  const heroImage = "/lovable-uploads/IMG_0409.webp";
  const absHero = toAbs(heroImage);

  // Shape the data the UI expects
  const blogPosts = blogList.map((p) => ({
    title: p.title,
    href: `/blog/${p.slug}`,
    image: IMAGE_MAP[p.slug] ?? "/lovable-uploads/fallback-blog.webp",
    excerpt: EXCERPT_MAP[p.slug] ?? "",
    datePublished: p.datePublished,
    lastmod: p.lastmod,
  }));

  // JSON-LD
  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "E&P Events Blog",
    url: pageUrl,
    description:
      "Expert event planning advice, real stories, and cultural insights from Atlanta's top planners.",
    publisher: { "@type": "Organization", name: "E&P Events", url: ABSOLUTE_ORIGIN },
    mainEntity: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: toAbs(p.href),
      image: toAbs(stripQuery(p.image)),
      description: p.excerpt || undefined,
      datePublished: p.datePublished,
      dateModified: p.lastmod,
      mainEntityOfPage: toAbs(p.href),
      articleSection: "Corporate Events",
    })),
  };

  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ABSOLUTE_ORIGIN + "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: pageUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>E&amp;P Events Blog | Atlanta Insights &amp; Event Stories</title>
        <meta
          name="description"
          content="Read tips, stories, and expert advice from Atlanta’s leading wedding and corporate event planners."
        />
        <link rel="canonical" href={pageUrl} />
        <link rel="preload" as="image" href={heroImage} type="image/webp" />

        {/* OG / Twitter */}
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="E&P Events Blog | Atlanta Insights & Event Stories" />
        <meta
          property="og:description"
          content="Read tips, stories, and expert advice from Atlanta’s leading wedding and corporate event planners."
        />
        <meta property="og:image" content={absHero} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="E&P Events Blog | Atlanta Insights & Event Stories" />
        <meta
          name="twitter:description"
          content="Read tips, stories, and expert advice from Atlanta’s leading wedding and corporate event planners."
        />
        <meta name="twitter:image" content={absHero} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      </Helmet>

      {/* ...the rest of your component that renders blogPosts.map(...) stays the same */}
    </>
  );
};

export default Blog;
