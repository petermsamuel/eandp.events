// src/hooks/use-analytics.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-QMY9ZR38N1", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);
}
