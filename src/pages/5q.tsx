import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const InstagramRedirect = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Trigger GA page_view manually
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: "/5q",
      });
    }

    // Give time for GA and UI to render before redirect
    const timer = setTimeout(() => {
      setShouldRedirect(true);
    }, 500); // 0.5 second delay for both GA and content render

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldRedirect) {
      const targetUrl =
        "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5-questions-lead-magnet";
      window.location.href = targetUrl;
    }
  }, [shouldRedirect]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">
        Redirecting you to the resource...
      </p>
    </div>
  );
};

export default InstagramRedirect;
