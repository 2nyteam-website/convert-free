import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter - Free Online",
  description: "Convert iPhone HEIC/HEIF photos to JPG format. Free, fast, 100% browser-based.",
  keywords: ["heic to jpg", "heif to jpg", "convert heic", "iphone photo converter"],
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "SoftwareApplication",
  name: "HEIC to JPG Converter", description: "Convert iPhone HEIC photos to universal JPG format.",
  url: "https://www.convertfree.cc/tools/heic-to-jpg", applicationCategory: "MultimediaApplication",
  operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "HEIC to JPG", item: "https://www.convertfree.cc/tools/heic-to-jpg" }] };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{children}</>);
}
