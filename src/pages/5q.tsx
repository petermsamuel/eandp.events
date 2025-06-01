useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const isDebug = urlParams.has("debug");

  const targetUrl =
    "https://www.eandp.events/5-questions?utm_source=instagram&utm_medium=bio&utm_campaign=5q-redirect";

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_location: "https://www.eandp.events/5q",
      page_title: "Instagram Redirect Page",
    });

    window.gtag("event", "instagram_redirect", {
      event_category: "engagement",
      event_label: "5q shortlink",
    });
  }

  // ✅ Only redirect if not in debug mode
  if (!isDebug) {
    const redirectTimeout = setTimeout(() => {
      window.location.href = targetUrl;
    }, 1200);

    return () => clearTimeout(redirectTimeout);
  }
}, []);
