export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mossfund",
    "description": "Community-owned OSS funding DAO on Solana. Stakers use quadratic voting to allocate real-time streaming payments to open-source repos.",
    "url": "https://mossfund.io",
    "logo": "https://mossfund.io/logo.png",
    "sameAs": [
      "https://twitter.com/mossfund",
      "https://github.com/mossfund",
      "https://discord.gg/mossfund"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@mossfund.io"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
