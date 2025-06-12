// src/components/NavBarCorporate.tsx
import React, { useState, useEffect } from "react";

const NavBarCorporate = () => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          <img 
            src="/lovable-uploads/E&P_events_lion_horizontal.svg" 
            alt="E&P Events Logo" 
            className="h-12 w-auto"
          />
        </a>

        <div className="hidden md:flex space-x-8">
          <a href="#what-we-do" className="text-black hover:text-gold">What We Do</a>
          <a href="#how-it-works" className="text-black hover:text-gold">How It Works</a>
          <a href="#testimonials" className="text-black hover:text-gold">Testimonials</a>
          <a href="#partners" className="text-black hover:text-gold">Partners</a>
          <a href="#cta" className="text-black hover:text-gold">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBarCorporate;
