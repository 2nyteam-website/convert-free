import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Compressor - Reduce File Size Free",
  description:
    "Compress images to reduce file size while keeping quality. Supports JPG, PNG, WebP. Free, 100% browser-based.",
  keywords: ["image compressor", "compress image", "reduce image size", "optimize image", "free compressor"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Image Compressor",
  description: "Compress images to reduce file size while keeping quality.",
  url: "https://www.convertfree.cc/tools/image-compressor",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.convertfree.cc" }, { "@type": "ListItem", position: 2, name: "All Tools", item: "https://www.convertfree.cc/all-tools" }, { "@type": "ListItem", position: 3, name: "Image Compressor", item: "https://www.convertfree.cc/tools/image-compressor" }] };
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
