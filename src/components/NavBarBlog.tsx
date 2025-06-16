import React from "react";

const NavBarBlog = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-black">
          <img
            src="/lovable-uploads/E&P_events_lion_horizontal.svg"
            alt="E&P Events Logo"
            className="h-10 w-auto"
          />
        </a>
        <div className="space-x-6 hidden md:flex">
          <a href="/" className="text-black hover:text-gold">Home</a>
          <a href="/weddings" className="text-black hover:text-gold">Weddings</a>
          <a href="/corporate" className="text-black hover:text-gold">Corporate</a>
          <a href="/blog" className="text-black hover:text-gold font-semibold">Blog</a>
          <a href="#contact" className="text-black hover:text-gold">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBarBlog;
