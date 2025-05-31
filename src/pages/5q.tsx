// pages/5q.tsx
import { useEffect } from "react";
import { useRouter } from "next/router"; // or 'react-router-dom' if you're using that instead

const InstagramRedirect = () => {
  useEffect(() => {
    // Manually send the GA event
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: "/5q",
      });
    }

    // Redirect after short delay to allow GA event to register
    const timer = setTimeout(() => {
      const targetUrl = "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5-questions-lead-magnet";
      window.location.href = targetUrl;
    }, 300); // ~300ms is typically enough

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
