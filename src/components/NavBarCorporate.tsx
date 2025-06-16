import React, { useState, useEffect } from "react";

const NavBarCorporate = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

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
        {/* Logo */}
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
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className="text-black hover:text-gold transition-colors">Home</a>
          <a href="#what-we-do" className="text-black hover:text-gold">What We Do</a>
          <a href="#how-it-works" className="text-black hover:text-gold">How It Works</a>
          <a href="#testimonials" className="text-black hover:text-gold">Testimonials</a>
          <a href="#partners" className="text-black hover:text-gold">Partners</a>
          <a href="#cta" className="text-black hover:text-gold">Contact</a>

          {/* Events Dropdown */}
          <div className="relative group">
            <button className="text-black hover:text-gold flex items-center transition-colors">
              Events
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform scale-95 group-hover:scale-100 transition-all duration-150 z-50">
              <a href="/weddings" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Weddings</a>
              <a href="/corporate" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Corporate</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
          <div className="flex flex-col space-y-4 px-4">
            <a href="/" className="text-black hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#what-we-do" className="text-black hover:text-gold" onClick={() => setIsMenuOpen(false)}>What We Do</a>
            <a href="#how-it-works" className="text-black hover:text-gold" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#testimonials" className="text-black hover:text-gold" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#partners" className="text-black hover:text-gold" onClick={() => setIsMenuOpen(false)}>Partners</a>
            <a href="#cta" className="text-black hover:text-gold" onClick={() => setIsMenuOpen(false)}>Contact</a>

            {/* Events Mobile Dropdown */}
            <button
              onClick={() => setIsEventsOpen(!isEventsOpen)}
              className="text-black hover:text-gold flex items-center justify-between"
            >
              Events
              <svg
                className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                  isEventsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isEventsOpen && (
              <div className="ml-4 flex flex-col space-y-2">
                <a href="/weddings" className="text-black hover:text-gold" onClick={() => setIsMenuOpen(false)}>Weddings</a>
                <a href="/corporate" className="text-black hover:text-gold" onClick={() => setIsMenuOpen(false)}>Corporate</a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarCorporate;
