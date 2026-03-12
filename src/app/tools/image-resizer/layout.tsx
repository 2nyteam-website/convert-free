import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Resizer - Resize Images Free Online",
  description: "Resize images to any dimension. Supports JPG, PNG, WebP. Free, 100% browser-based.",
  keywords: ["image resizer", "resize image", "resize photo online", "change image size"],
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "SoftwareApplication",
  name: "Image Resizer", description: "Resize images to any dimension online.",
  url: "https://www.convertfree.cc/tools/image-resizer", applicationCategory: "MultimediaApplication",
  operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "Image Resizer", item: "https://www.convertfree.cc/tools/image-resizer" }] };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{children}</>);
}
