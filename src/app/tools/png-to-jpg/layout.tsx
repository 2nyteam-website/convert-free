import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNG to JPG Converter - Free Online",
  description:
    "Convert PNG images to JPG format with adjustable quality. Free, fast, and 100% browser-based. No upload required.",
  keywords: ["png to jpg", "png to jpeg", "convert png to jpg", "image converter", "free converter"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PNG to JPG Converter",
  description: "Convert PNG images to JPG format with adjustable quality.",
  url: "https://www.convertfree.cc/tools/png-to-jpg",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "PNG to JPG", item: "https://www.convertfree.cc/tools/png-to-jpg" }] };
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
