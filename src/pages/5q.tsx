import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const targetUrl = "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

    if (typeof window.gtag === "function") {
      // Send page view
      window.gtag("config", "G-QMY9ZR38N1", {
        page_path: "/5q",
        page_title: "Instagram Redirect",
      });

      // Send custom event for redundancy
      window.gtag("event", "5q_redirect_view", {
        event_category: "Redirects",
        event_label: "Visited 5q landing",
        value: 1,
      });
    }

    // Wait longer than before
    const timeout = setTimeout(() => {
      window.location.href = targetUrl;
    }, 1200); // ⏱️ Give GA more time to send data

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
