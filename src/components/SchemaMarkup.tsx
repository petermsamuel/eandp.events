import React from "react";

type SchemaMarkupProps = {
  type?: "LocalBusiness" | "Organization" | "Service";
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  serviceType?: string;
};

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  type = "LocalBusiness",
  name = "E and P Events",
  description = "Luxury wedding and corporate event planning in Atlanta, specializing in South Asian and fusion weddings.",
  url = "https://www.eandp.events",
  telephone = "+1-770-410-8302",
  serviceType,
}) => {
  const baseSchema: any = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    url,
    telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1691 Ashbury Park Dr.",
      addressLocality: "Hoschton",
      addressRegion: "GA",
      postalCode: "30548",
      addressCountry: "US",
    },
    description,
  };

  if (type === "Service" && serviceType) {
    baseSchema.serviceType = serviceType;
    baseSchema.provider = {
      "@type": "Organization",
      name,
      url,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
};

export default SchemaMarkup;
