import React, { useEffect } from "react";
import NavBarBlog from "@/components/NavBarBlog";
import Footer from "@/components/Footer";
import { Facebook, Instagram, Mail } from "lucide-react";

const blogPosts = [
  {
    image: "/lovable-uploads/ChatGPT Image Jun 14, 2025, 03_13_22 PM.webp?auto=format&fit=crop&w=600&q=80",
    title: "What Does a Corporate Event Planner Do?",
    excerpt: "Discover the real strategy behind flawless corporate events—what expert planners actually do, how they protect your brand, and why execution is everything.",
    href: "/blog/what-does-a-corporate-event-planner-do",
  },
 {
    image: "/lovable-uploads/ChatGPT Image Jul 2, 2025, 03_37_53 PM.webp?auto=format&fit=crop&w=600&q=80",
    title: "The Hidden Cost of DIY Corporate Events",
    excerpt: "DIY corporate events may look budget-friendly—but hidden costs, missed strategy, and brand risks make expert planning a smarter investment.",
    href: "/blog/hidden-costs-diy-corporate-events",
  },
   {
    image: "/lovable-uploads/ChatGPT Image Jul 12, 2025, 10_52_15 AM.webp?auto=format&fit=crop&w=600&q=80",
    title: "Why Smart Atlanta Companies Choose Corporate Event Planners for High‑Stakes Events",
    excerpt: "Discover the strategic, financial, and brand risks companies face when planning corporate events alone.",
    href: "/blog/why-smart-atlanta-companies-hire-event-planners",
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = "E&P Events Blog | Atlanta Insights & Event Stories";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Read tips, stories, and expert advice from Atlanta’s leading wedding and corporate event planners.";
    document.head.appendChild(meta);

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = "https://eandp.events/blog";
    document.head.appendChild(canonical);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "E&P Events Blog",
      "url": "https://eandp.events/blog",
      "description": "Expert event planning advice, real stories, and cultural insights from Atlanta's top planners.",
      "publisher": {
        "@type": "Organization",
        "name": "E&P Events",
        "url": "https://eandp.events"
      },
      "mainEntity": [
        {
          "@type": "BlogPosting",
          "headline": "What Does a Corporate Event Planner Do?",
          "url": "https://eandp.events/blog/what-does-a-corporate-event-planner-do",
          "image": "https://eandp.events/lovable-uploads/ChatGPT%20Image%20Jun%2014,%202025,%2003_13_22%20PM.webp",
          "description": "Discover the real strategy behind flawless corporate events—what expert planners actually do, how they protect your brand, and why execution is everything."
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(canonical);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#f7f7f2] flex flex-col">
        <NavBarBlog />

        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-[60vh] flex flex-col justify-center pt-28 pb-12 px-4 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/IMG_0409.webp')" }}
        >
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-snug mx-auto drop-shadow-lg">
              Real Atlanta Events. Real Solutions.<br />Blog by E&amp;P Events
            </h1>
            <p className="text-lg text-white mb-6">
              Tips, behind-the-scenes insights, and expert advice from Atlanta’s trusted planners. Whether you're organizing a luxury wedding or a high-impact corporate event, our blog helps you plan smarter and stress less.
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <a href="#blog-posts" aria-label="Scroll to blog posts">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section id="blog-posts" className="py-20 px-4 bg-[#f8f6ed]">
          <div className="max-w-6xl mx-auto mb-12 text-center">
            <h2 className="section-title text-[#2a2a2a] mb-3">Latest from the E&amp;P Blog</h2>
            <p className="text-lg text-gray-700 mb-6">
              Stories, insights, and practical advice for anyone planning a wedding or corporate event in Atlanta—and far beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <a
                key={post.title}
                href={post.href}
                className="group block bg-white rounded-xl shadow-md border border-transparent hover:border-gold hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
              >
                <div className="h-56 w-full relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={`Blog post about ${post.title.toLowerCase()} by Atlanta event planner`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#2a2a2a] group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-2 text-base">{post.excerpt}</p>
                  <span className="text-sm text-gold font-semibold underline group-hover:no-underline">Read More →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </div>

      <div className="lion-watermark" aria-hidden="true" />
    </>
  );
};

export default Blog;
