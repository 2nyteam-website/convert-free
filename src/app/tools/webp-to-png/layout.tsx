import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebP to PNG Converter - Free Online",
  description: "Convert WebP images to PNG format. Free, fast, and 100% browser-based. No upload required.",
  keywords: ["webp to png", "convert webp to png", "webp converter", "image converter"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WebP to PNG Converter",
  description: "Convert WebP images to widely-supported PNG format.",
  url: "https://www.convertfree.cc/tools/webp-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "WebP to PNG", item: "https://www.convertfree.cc/tools/webp-to-png" }] };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
