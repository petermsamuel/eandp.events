// pages/5q.tsx
import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const targetUrl = "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

    // Make sure GA is loaded
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-QMY9ZR38N1", {
        page_path: "/5q",
        page_title: "Instagram Redirect",
      });
    }

    // Add a slightly longer delay
    const timeout = setTimeout(() => {
      window.location.href = targetUrl;
    }, 700); // GA needs ~500–700ms to reliably fire

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
