import React from "react";

const SchemaMarkup = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "E and P Events",
    "url": "https://www.eandp.events",
    "telephone": "+1-770-410-8302",
    "address": {
"@type": "PostalAddress",
"streetAddress": "1691 Ashbury Park Dr.",
"addressLocality": "Hoschton",
"addressRegion": "GA",
"postalCode": "30548",
"addressCountry": "US"
    },
    "description": "Luxury wedding and corporate event planning in Atlanta, specializing in South Asian and fusion weddings."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default SchemaMarkup;
