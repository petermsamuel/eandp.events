
import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import { Facebook, Instagram, Mail } from "lucide-react";

const blogPosts = [
  {
    image: "/lovable-uploads/ChatGPT Image Jun 14, 2025, 03_13_22 PM.png?auto=format&fit=crop&w=600&q=80",
    title: "What Does a Corporate Event Planner Do?",
    excerpt: "Discover the real strategy behind flawless corporate events—what expert planners actually do, how they protect your brand, and why execution is everything.",
    href: "/blog/what-does-a-corporate-event-planner-do",
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = "E&P Events Blog | Atlanta Insights & Event Stories";
    // Add meta description
    const descriptionTag = document.querySelector("meta[name='description']");
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Read the latest tips, inspiration, and expert guidance from the team at E&P Events—Atlanta’s premier wedding and corporate event planners."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Read the latest tips, inspiration, and expert guidance from the team at E&P Events—Atlanta’s premier wedding and corporate event planners.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#f7f7f2] flex flex-col">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-[60vh] flex flex-col justify-center pt-28 pb-12 px-4 bg-cover bg-center"
          style={{ backgroundImage: "url('/lovable-uploads/SSTK_asset_small_new.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-snug mx-auto drop-shadow-lg">
              Real Atlanta Events. Real Solutions.<br />Blog by E&amp;P Events
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl mx-auto">
              Honest stories, practical guidance, and expert reflections—from crossing cultural lines to building seamless timelines for Big Moments.
            </p>
          </div>
          {/* Down Arrow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
            <a href="#blog-posts" aria-label="Scroll to blog posts">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section id="blog-posts" className="py-20 px-4 bg-[#f8f6ed]">
          <div className="max-w-6xl mx-auto mb-12 text-center">
            <h2 className="section-title text-[#2a2a2a] mb-3">
              Latest from the E&amp;P Blog
            </h2>
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
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gold font-semibold mb-1">{post.date}</div>
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

       
        {/* Footer */}
        <Footer />
      </div>
      {/* Decorative Lion Watermark (optional, per your other pages) */}
      <div className="lion-watermark" aria-hidden="true" />
    </>
  );
};

export default Blog;

