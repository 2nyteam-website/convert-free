import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVG to PNG Converter - Free Online",
  description: "Convert vector SVG files to raster PNG images with custom size. Free, 100% browser-based.",
  keywords: ["svg to png", "convert svg to png", "svg converter", "vector to raster"],
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "SoftwareApplication",
  name: "SVG to PNG Converter", description: "Convert vector SVG files to raster PNG images.",
  url: "https://www.convertfree.cc/tools/svg-to-png", applicationCategory: "MultimediaApplication",
  operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "SVG to PNG", item: "https://www.convertfree.cc/tools/svg-to-png" }] };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{children}</>);
}
