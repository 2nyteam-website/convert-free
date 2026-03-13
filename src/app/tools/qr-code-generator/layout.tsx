import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code Generator - Free Online",
  description: "Generate QR codes for URLs, text, Wi-Fi, email, and more. Free, 100% browser-based. No upload required.",
  keywords: ["qr code generator", "create qr code", "qr code maker", "free qr code", "qr code online"],
};

const jsonLd = {
  "@context": "https://schema.org", "@type": "SoftwareApplication",
  name: "QR Code Generator", description: "Generate QR codes for URLs, text, Wi-Fi, email, and more.",
  url: "https://www.convertfree.cc/tools/qr-code-generator", applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "QR Code Generator", item: "https://www.convertfree.cc/tools/qr-code-generator" }] };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{children}</>);
}
