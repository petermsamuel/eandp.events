// src/pages/5q.tsx
import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const targetUrl =
      "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

    const payload = {
      client_id: "555", // Replace with actual GA client ID if needed
      events: [
        {
          name: "instagram_redirect",
          params: {
            page_location: "https://www.eandp.events/5q",
            page_path: "/5q",
            page_title: "Instagram Redirect Page",
          },
        },
      ],
    };

    const blob = new Blob([JSON.stringify(payload)], {
      type: "application/json",
    });

    navigator.sendBeacon(
  "https://www.google-analytics.com/mp/collect?measurement_id=G-QMY9ZR38N1&api_secret=_3IwR0sMQ4etFV6o_Z67RA",
      blob
    );

    // Short delay to ensure the beacon is sent before redirecting
    const timeout = setTimeout(() => {
      window.location.href = targetUrl;
    }, 250);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
