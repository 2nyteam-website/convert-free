import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image to PDF Converter - Free Online",
  description: "Combine multiple images into a single PDF document. Free, 100% browser-based.",
  keywords: ["image to pdf", "jpg to pdf", "png to pdf", "convert image to pdf"],
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "SoftwareApplication",
  name: "Image to PDF Converter", description: "Combine images into a single PDF document.",
  url: "https://www.convertfree.cc/tools/image-to-pdf", applicationCategory: "MultimediaApplication",
  operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "Image to PDF", item: "https://www.convertfree.cc/tools/image-to-pdf" }] };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{children}</>);
}
