import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JPG to PNG Converter - Free Online",
  description:
    "Convert JPG/JPEG images to PNG format with transparency support. Free, fast, and 100% browser-based. No upload required.",
  keywords: ["jpg to png", "jpeg to png", "convert jpg to png", "image converter", "free converter"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "JPG to PNG Converter",
  description: "Convert JPG/JPEG images to PNG format with transparency support.",
  url: "https://www.convertfree.cc/tools/jpg-to-png",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "JPG to PNG", item: "https://www.convertfree.cc/tools/jpg-to-png" }] };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
