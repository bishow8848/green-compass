import { serializeJsonLd } from "@/lib/seo";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders one JSON-LD block. Escaping lives in `serializeJsonLd` so every
 * structured-data block on the site — whether it goes through this component or
 * is inlined in a page — is emitted by exactly one code path.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
