export const siteConfig = {
  name: "Беремо й веземо",
  shortName: "Беремо й веземо",
  description:
    "Вантажні перевезення у Зеленодольську, Криворізькому районі та між містами України. Меблі, техніка, особисті речі, будматеріали. Пакування, завантаження та занесення.",
  locale: "uk_UA",
  language: "uk",
  phone: "+380686673937",
  phoneLabel: "+38 068 667 39 37",
  city: "Зеленодольськ",
  region: "Дніпропетровська область",
  country: "UA",
  keywords: [
    "вантажні перевезення Зеленодольськ",
    "перевезення меблів Кривий Ріг",
    "вантажне таксі Криворізький район",
    "міжміські перевезення Україна",
    "переїзд квартира Зеленодольськ",
    "доставка будматеріалів",
    "Беремо й веземо",
  ],
  ogImage: "/images/hero/desktop-2x.jpg",
  get siteUrl() {
    return (
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "https://beremo-vezemo.vercel.app"
    );
  },
};

export function buildLocalBusinessJsonLd() {
  const { siteUrl } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.phone,
    image: `${siteUrl}${siteConfig.ogImage}`,
    areaServed: [
      {
        "@type": "City",
        name: "Зеленодольськ",
      },
      {
        "@type": "AdministrativeArea",
        name: "Криворізький район",
      },
      {
        "@type": "Country",
        name: "Україна",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      availableLanguage: ["Ukrainian", "Russian"],
    },
  };
}
