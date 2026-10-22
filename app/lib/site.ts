/**
 * Single source of truth for the business's public contact details and
 * navigation targets. These appear in the header, the footer, the quote form
 * and the legal pages, so they live here rather than being repeated per file.
 */

export const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F53330abe4fc44fbea39222e8deb82a96%2Fa9ed004b29fa40e7a1d66e17f7d40f60?format=webp&width=800&height=1200";

export const EMAIL = "martruthertransport@gmail.com";

export const PHONE_PRIMARY = "+263 771 316 085";
export const PHONE_SECONDARY = "+263 771 191 655";

/** Strips spaces so the value can be dropped straight into a `tel:` href. */
export const PHONE_PRIMARY_HREF = `tel:${PHONE_PRIMARY.replace(/ /g, "")}`;
export const PHONE_SECONDARY_HREF = `tel:${PHONE_SECONDARY.replace(/ /g, "")}`;

/** Country code + number, no separators — for composing wa.me links. */
export const WHATSAPP_NUMBER = "263771316085";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Martruther%20Logistics%2C%20I%27d%20like%20to%20request%20a%20freight%20quote.`;

export const ADDRESS_LINES = [
  "1401 3rd Avenue, Glen View 1",
  "Harare, Zimbabwe",
];

export const HOURS = {
  weekdays: { label: "Mon\u2013Fri", value: "07:00\u201317:00", closed: false },
  saturday: { label: "Saturday", value: "08:00\u201313:00", closed: false },
  sunday: { label: "Sunday", value: "Closed", closed: true },
} as const;

/** Primary navigation. Hash targets live on the home page. */
export const NAV_ITEMS = [
  { label: "Services", hash: "services" },
  { label: "Fleet", hash: "fleet" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
] as const;
