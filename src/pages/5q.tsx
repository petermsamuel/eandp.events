import { useEffect } from "react";

const InstagramRedirect = () => {
  useEffect(() => {
    const targetUrl =
      "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

    const waitForGtag = () =>
      new Promise<void>((resolve) => {
        const maxWait = 2000;
        let waited = 0;
        const interval = setInterval(() => {
          if (typeof window !== "undefined" && typeof window.gtag === "function") {
            clearInterval(interval);
            resolve();
          }
          waited += 100;
          if (waited >= maxWait) {
            clearInterval(interval);
            resolve(); // Proceed anyway
          }
        }, 100);
      });

    waitForGtag().then(() => {
      window.gtag("event", "page_view", {
        page_location: "https://www.eandp.events/5q",
        page_title: "Instagram Redirect Page",
      });

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Redirecting you to the resource...</p>
    </div>
  );
};

export default InstagramRedirect;
