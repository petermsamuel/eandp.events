import React, { useState, useEffect } from "react";

const NavBarBlog = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          <img
            src="/lovable-uploads/E&P_events_lion_horizontal.svg"
            alt="E&P Events Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-black hover:text-gold transition-colors">Home</a>
          <a href="/weddings" className="text-black hover:text-gold transition-colors">Weddings</a>
          <a href="/corporate" className="text-black hover:text-gold transition-colors">Corporate</a>
          <a href="/blog" className="text-black hover:text-gold font-semibold transition-colors">Blog</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBarBlog;
