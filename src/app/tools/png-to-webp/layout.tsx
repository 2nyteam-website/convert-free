import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNG to WebP Converter - Free Online",
  description: "Convert PNG images to WebP for smaller file sizes. Free, fast, 100% browser-based.",
  keywords: ["png to webp", "convert png to webp", "webp converter", "image optimizer"],
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "SoftwareApplication",
  name: "PNG to WebP Converter", description: "Convert PNG images to WebP for smaller file sizes.",
  url: "https://www.convertfree.cc/tools/png-to-webp", applicationCategory: "MultimediaApplication",
  operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "PNG to WebP", item: "https://www.convertfree.cc/tools/png-to-webp" }] };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{children}</>);
}
