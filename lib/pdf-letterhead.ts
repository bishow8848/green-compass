import type { PdfOptions } from "@/lib/page-pdf";

/**
 * The letterhead on every page of an admin PDF (lib/page-pdf.ts): the trip
 * page's "Share as PDF" and the admin PDF builder both print it.
 */
const CONTACT_LABEL = "Call / WhatsApp";
const CONTACT_NUMBER = "+977 9864379436";
const LOCATION = "Location: Lakeside, Pokhara";
/** In the header when the PDF has no title of its own (a blank PDF left untitled). */
const COMPANY = "Green Compass Treks";

/** `website` is the site's origin (SITE_URL), which only the server knows. */
export function pdfLetterhead({ fileName, title, website }: { fileName: string; title: string; website: string }): PdfOptions {
  return {
    fileName,
    title: title.trim() || COMPANY,
    contactLabel: CONTACT_LABEL,
    contactNumber: CONTACT_NUMBER,
    contactUrl: `https://wa.me/${CONTACT_NUMBER.replace(/\D/g, "")}`,
    website,
    location: LOCATION,
  };
}
