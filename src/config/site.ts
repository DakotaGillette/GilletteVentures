export interface Site {
  name: string;
  legalName: string;
  url: string;
  tagline: string;
  description: string;
  /** schema.org LocalBusiness subtype, or "Organization" if there is no storefront. */
  schemaType: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    postal: string;
    country: string;
  };
  /** Five decimal places. Leave at 0 if the business has no public location. */
  geo: { lat: number; lng: number };
  /** ISO day names; 24-hour times. */
  hours: Array<{ days: string[]; opens: string; closes: string }>;
  priceRange: string;
  /** Profile URLs; becomes schema.org sameAs. */
  social: string[];
  logo: string;
  ogImage: string;
  verification: { google: string; bing: string };
}

/**
 * Single source of truth for business facts.
 * NAP (name, address, phone) must match the Google Business Profile exactly.
 */
export const site: Site = {
  name: "Gillette Ventures",
  legalName: "Gillette Ventures LLC",
  url: "https://gilletteventures.com",
  tagline: "A holding company for independent ventures",
  description: "Gillette Ventures LLC is a holding company that builds and operates independent software and media ventures.",

  schemaType: "Organization",

  phone: "",
  email: "admin@gilletteventures.com",

  // TBD: registered agent address.
  address: {
    street: "",
    city: "",
    region: "",
    postal: "",
    country: "US",
  },

  geo: { lat: 0, lng: 0 },

  hours: [],

  priceRange: "",

  social: [],

  // TBD: set to "/logo.svg" once a wordmark file exists.
  logo: "",
  ogImage: "/og/default.png",

  verification: {
    google: "",
    bing: "",
  },
};
