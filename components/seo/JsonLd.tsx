import { SITE_URL } from "@/lib/seo";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

// Schema.org helper for TouristTrip
export function touristTripSchema({
  name,
  description,
  price,
  currency = "USD",
  durationDays,
  itinerary,
}: {
  name: string;
  description: string;
  price: number;
  currency?: string;
  durationDays: number;
  itinerary?: Array<{ name: string; description: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description: description.slice(0, 200),
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
    },
    duration: `P${durationDays}D`,
    itinerary: itinerary?.map((day) => ({
      "@type": "Itinerary",
      name: day.name,
      description: day.description.slice(0, 200),
    })),
  };
}

// Schema.org helper for Organization (homepage)
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mardi Treks",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Premier trekking and tour agency in Nepal",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [
      "https://facebook.com/greencompasstreks",
      "https://instagram.com/greencompasstreks",
    ],
  };
}

// Schema.org helper for BlogPosting
export function blogPostSchema({
  title,
  description,
  author,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description.slice(0, 200),
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished,
    image,
  };
}
