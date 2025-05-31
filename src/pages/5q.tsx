import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const targetUrl =
      "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

    // Fire GA4 page_view manually before redirect
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_location: "https://www.eandp.events/5q",
        page_title: "Instagram Redirect Page",
      });
    }

    // Add delay to let the event process before redirecting
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); // 500ms is usually enough
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
