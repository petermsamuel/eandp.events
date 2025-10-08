import React, { useEffect, useMemo, useRef, useState } from "react";

const CORPORATE_CAL_LINK = "eandp.events/corporate-b2b-15";

// Shared loader so we don't re-inject repeatedly
let calReadyPromise: Promise<void> | null = null;

function loadCalScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  const w = window as any;
  if (w.Cal && typeof w.Cal === "function") {
    // Already present
    try {
      w.Cal("init", { origin: "https://cal.com" });
      w.Cal("ui", { theme: "light", styles: { branding: { brandColor: "#d4af37" } } });
    } catch {}
    return Promise.resolve();
  }
  if (calReadyPromise) return calReadyPromise;

  calReadyPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://cal.com/embed.js"]');

    const ready = () => {
      const w2 = window as any;
      if (w2.Cal) {
        try {
          w2.Cal("init", { origin: "https://cal.com" });
          w2.Cal("ui", { theme: "light", styles: { branding: { brandColor: "#d4af37" } } });
        } catch {}
        resolve();
        return true;
      }
      return false;
    };

    if (existing) {
      // Poll briefly until Cal is attached
      const start = Date.now();
      const tick = () => {
        if (ready()) return;
        if (Date.now() - start > 5000) {
          reject(new Error("Cal embed did not initialize in time"));
          return;
        }
        setTimeout(tick, 50);
      };
      tick();
      return;
    }

    // Inject fresh
    const script = document.createElement("script");
    script.src = "https://cal.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (!ready()) {
        // One more short poll if load event fires before global attaches
        const start = Date.now();
        const tick = () => {
          if (ready()) return;
          if (Date.now() - start > 3000) {
            reject(new Error("Cal embed attached but UI not ready"));
            return;
          }
          setTimeout(tick, 50);
        };
        tick();
      }
    };
    script.onerror = () => reject(new Error("Failed to load Cal embed script"));
    document.head.appendChild(script);
  });

  return calReadyPromise;
}

const NavBarCorporate: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  // Hidden anchor fallback (attribute-based open)
  const hiddenAnchorRef = useRef<HTMLAnchorElement | null>(null);

  // UTM passthrough
  const calLinkWithUtm = useMemo(() => {
    if (typeof window === "undefined") return CORPORATE_CAL_LINK;
    const qs = window.location.search.replace(/^\?/, "");
    return qs ? `${CORPORATE_CAL_LINK}?${qs}` : CORPORATE_CAL_LINK;
  }, []);

  // Preload Cal on mount so it's ready before the first click
  useEffect(() => {
    loadCalScript().catch(() => {
      // Non-fatal; we still have href fallback
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openCal = async (e?: React.MouseEvent) => {
    e?.preventDefault?.();
    try {
      await loadCalScript();
      const w = window as any;
      if (w.Cal) {
        // Try API overlay first
        w.Cal("open", { calLink: calLinkWithUtm });
        return;
      }
      // If API missed, try attribute-based fallback click
      if (hiddenAnchorRef.current) {
        hiddenAnchorRef.current.click();
        return;
      }
      // Final fallback: navigate
      window.location.href = `https://cal.com/${calLinkWithUtm}`;
    } catch {
      // Script blocked or failed → navigate
      window.location.href = `https://cal.com/${calLinkWithUtm}`;
    }
  };

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
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

          {/* Book a Call (desktop) — overlay + fallbacks */}
          <a
            href={`https://cal.com/${calLinkWithUtm}`}  // final fallback if JS blocked
            onClick={openCal}
            className="ml-6 inline-flex items-center rounded-md bg-gold px-5 py-2 text-sm font-semibold text-[#2a2a2a] shadow-md hover:bg-[#d4af37] hover:shadow-lg transition-all duration-200"
          >
            Book a Call
          </a>

          {/* Hidden attribute-based trigger (secondary fallback) */}
          <a
            href={`https://cal.com/${calLinkWithUtm}`}
            data-cal-link={calLinkWithUtm}
            ref={hiddenAnchorRef}
            style={{ position: "absolute", left: "-99999px", opacity: 0 }}
            aria-hidden="true"
            tabIndex={-1}
          >
            &nbsp;
          </a>
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
                className={`ml-2 h-4 w-4 transition-transform duration-200 ${isEventsOpen ? "rotate-180" : ""}`}
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

            {/* Book a Call (mobile) — overlay + fallbacks */}
            <a
              href={`https://cal.com/${calLinkWithUtm}`}
              onClick={(e) => { setIsMenuOpen(false); openCal(e); }}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-semibold text-[#2a2a2a] shadow-md"
            >
              Book a Call
            </a>

            {/* Hidden attribute-based trigger (mobile) */}
            <a
              href={`https://cal.com/${calLinkWithUtm}`}
              data-cal-link={calLinkWithUtm}
              style={{ position: "absolute", left: "-99999px", opacity: 0 }}
              aria-hidden="true"
              tabIndex={-1}
            >
              &nbsp;
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarCorporate;
