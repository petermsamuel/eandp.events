import { useEffect } from "react";

const IGRedirect = () => {
  useEffect(() => {
    const targetUrl = "https://www.eandp.events"; // CLEAN final URL

    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // Tell GA the source/medium manually
      window.gtag("event", "page_view", {
        page_location: "https://www.eandp.events/ig",
        page_title: "Instagram Redirect",
      });

      window.gtag("event", "instagram_redirect", {
        event_category: "engagement",
        event_label: "Instagram via IG bio",
      });

      // Set temporary session source
      window.gtag("set", {
        page_referrer: "https://www.instagram.com/",
        campaign: {
          source: "instagram",
          medium: "bio",
          campaign: "ig-redirect"
        }
      });
    }

    const timer = setTimeout(() => {
      window.location.href = targetUrl;
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <p className="text-xl font-semibold">Redirecting you to E&P Events...</p>
    </main>
  );
};

export default IGRedirect;
