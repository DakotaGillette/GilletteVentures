import { site } from "../config/site";

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

type Node = Record<string, unknown>;

/** Organization, or a LocalBusiness subtype when the business has a location. */
export function organization(): Node {
  const node: Node = {
    "@type": site.schemaType,
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    description: site.description,
  };

  if (site.legalName && site.legalName !== site.name) node.legalName = site.legalName;
  if (site.logo) node.logo = { "@type": "ImageObject", url: new URL(site.logo, site.url).href };
  if (site.phone) node.telephone = site.phone;
  if (site.email) node.email = site.email;
  if (site.priceRange) node.priceRange = site.priceRange;
  if (site.social.length) node.sameAs = site.social;

  if (site.address.street) {
    node.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    };
  }

  if (site.geo.lat !== 0 || site.geo.lng !== 0) {
    node.geo = { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng };
  }

  if (site.hours.length) {
    node.openingHoursSpecification = site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }

  return node;
}

/** No SearchAction: Google retired the sitelinks search box. */
export function website(): Node {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbs(items: Array<{ name: string; path: string }>): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}

export function article(input: {
  title: string;
  description: string;
  path: string;
  published: Date;
  modified?: Date;
  image?: string;
}): Node {
  return {
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: new URL(input.path, site.url).href,
    datePublished: input.published.toISOString(),
    dateModified: (input.modified ?? input.published).toISOString(),
    image: new URL(input.image ?? site.ogImage, site.url).href,
    publisher: { "@id": ORG_ID },
    author: { "@id": ORG_ID },
  };
}

export function graph(...nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
