import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const targetUrl =
      "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

    const payload = {
      v: "2", // GA4 protocol version
      tid: "G-QMY9ZR38N1", // Your Measurement ID
      cid: "555", // Dummy Client ID (or retrieve from cookie if needed)
      t: "event",
      en: "instagram_redirect",
      dl: "https://www.eandp.events/5q",
      dt: "Instagram Redirect Page",
    };

    const formData = new URLSearchParams(payload).toString();

    navigator.sendBeacon(
      "https://www.google-analytics.com/mp/collect?measurement_id=G-QMY9ZR38N1",
      formData
    );

    setTimeout(() => {
      window.location.href = targetUrl;
    }, 200); // Short delay to ensure beacon sends

  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
