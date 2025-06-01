import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const targetUrl =
      "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

    // Fire GA4 events before redirect
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // Page view
      window.gtag("event", "page_view", {
        page_location: "https://www.eandp.events/5q",
        page_title: "Instagram Redirect Page",
      });

      // Custom event
      window.gtag("event", "instagram_redirect", {
        event_category: "engagement",
        event_label: "5q shortlink",
      });
    }

    // Delay redirect to ensure GA event fires
    const redirectTimeout = setTimeout(() => {
      window.location.href = targetUrl;
    }, 1200); // Adjust if needed, 1000–1500ms is usually safe

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
