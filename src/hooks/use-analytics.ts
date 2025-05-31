// src/hooks/useAnalytics.ts
useEffect(() => {
  gtag('config', 'G-QMY9ZR38N1', {
    page_path: location.pathname,
  });
}, [location]);

