import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "E&P Events",
    "image": "https://www.eandp.events/lovable-uploads/SSTK_asset_small_new.jpg",
    "@id": "https://www.eandp.events",
    "url": "https://www.eandp.events",
    "telephone": "+1-770-410-8302",
    "address": {
  "@type": "PostalAddress",
  "addressLocality": "Atlanta",
  "addressRegion": "GA",
  "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7490",
      "longitude": "-84.3880"
    },
    "sameAs": [
      "https://www.instagram.com/eandp_events/",
      "https://www.facebook.com/eventsep/"
    ],
    "priceRange": "$$$",
    "description": "Luxury wedding and corporate event planning in Atlanta, specializing in South Asian and fusion weddings.",
    "openingHours": "Mo-Fr 09:00-18:00",
    "areaServed": {
      "@type": "Place",
      "name": "Atlanta"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
