import React, { useState, useEffect } from "react";

const NavBarBlog = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-black hover:text-gold transition-colors">
            Home
          </a>
          <a href="/weddings" className="text-black hover:text-gold transition-colors">
            Weddings
          </a>
          <a href="/corporate" className="text-black hover:text-gold transition-colors">
            Corporate
          </a>
        <a href="/about" className="text-black hover:text-gold transition-colors">
            About
          </a>
          <a href="/blog" className="text-black hover:text-gold transition-colors">
            Blog
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              <a
                href="/"
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/weddings"
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Weddings
              </a>
              <a
                href="/corporate"
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Corporate
              </a>
             <a
                href="/about"
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/blog"
                className="text-black hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBarBlog;
