import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const sendAnalyticsEvent = async () => {
      const payload = {
        client_id: "555.123456789", // use a real or random UUIDv4 if possible
        events: [
          {
            name: "page_view",
            params: {
              page_location: "https://www.eandp.events/5q",
              page_title: "Instagram Redirect Page",
            },
          },
        ],
      };

      navigator.sendBeacon(
        "https://www.google-analytics.com/mp/collect?measurement_id=G-QMY9ZR38N1&api_secret=_3IwR0sMQ4etFV6o_Z67RA",
        JSON.stringify(payload)
      );
    };

    sendAnalyticsEvent();

    // Redirect after short delay
    setTimeout(() => {
      window.location.href =
        "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";
    }, 300); // gives beacon enough time
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
