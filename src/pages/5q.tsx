import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const targetUrl =
      "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

    const fireGAandRedirect = () => {
      if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_location: "https://www.eandp.events/5q",
          page_title: "Instagram Redirect Page",
        });
      }

      // Final redirect after firing GA
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Let GA log event
    };

    // Wait 300ms to ensure gtag is loaded, then continue
    const initTimeout = setTimeout(fireGAandRedirect, 300);

    return () => clearTimeout(initTimeout);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
