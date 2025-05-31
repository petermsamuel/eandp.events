// pages/5q.tsx
import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const targetUrl = "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

    // Manually send pageview to GA for /5q
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: "/5q",
        page_title: "Instagram Redirect",
      });
    }

    // Delay redirect slightly to allow GA event to fire
    const timeout = setTimeout(() => {
      window.location.href = targetUrl;
    }, 300); // 300ms is quick, but enough time for GA

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
