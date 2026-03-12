import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Free Online Tools",
  description: "Browse all 15+ free online file conversion tools. Image converters, PDF tools, and more. 100% browser-based.",
};

const tools = [
  { category: "Image Converters", items: [
    { name: "JPG to PNG", description: "Convert JPG/JPEG to PNG with transparency support.", href: "/tools/jpg-to-png" },
    { name: "PNG to JPG", description: "Convert PNG to JPG with adjustable quality.", href: "/tools/png-to-jpg" },
    { name: "WebP to PNG", description: "Convert WebP to widely-supported PNG.", href: "/tools/webp-to-png" },
    { name: "PNG to WebP", description: "Convert PNG to WebP for smaller files.", href: "/tools/png-to-webp" },
    { name: "SVG to PNG", description: "Convert vector SVG to raster PNG.", href: "/tools/svg-to-png" },
    { name: "HEIC to JPG", description: "Convert iPhone HEIC photos to JPG.", href: "/tools/heic-to-jpg" },
    { name: "Image Resizer", description: "Resize images to any dimension.", href: "/tools/image-resizer" },
    { name: "Image Compressor", description: "Compress images while keeping quality.", href: "/tools/image-compressor" },
  ]},
  { category: "PDF Tools", items: [
    { name: "PDF to Image", description: "Convert PDF pages to PNG or JPG.", href: "/tools/pdf-to-image" },
    { name: "Image to PDF", description: "Combine images into a single PDF.", href: "/tools/image-to-pdf" },
    { name: "PDF Merge", description: "Merge multiple PDFs into one.", href: "/tools/pdf-merge" },
    { name: "PDF Split", description: "Split a PDF into separate pages.", href: "/tools/pdf-split" },
  ]},
  { category: "Other Converters", items: [
    { name: "GIF to MP4", description: "Convert GIF to MP4 for smaller size.", href: "/tools/gif-to-mp4" },
    { name: "MP4 to GIF", description: "Convert MP4 videos to GIF animations.", href: "/tools/mp4-to-gif" },
    { name: "CSV to JSON", description: "Convert CSV data to JSON format.", href: "/tools/csv-to-json" },
    { name: "Markdown to PDF", description: "Convert Markdown to formatted PDF.", href: "/tools/markdown-to-pdf" },
  ]},
];

export default function AllToolsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">All Tools</h1>
        <p className="text-muted-foreground mt-1">Browse all free online conversion tools. 100% browser-based, no data sent to servers.</p>
      </div>

      {tools.map((group) => (
        <section key={group.category}>
          <h2 className="text-lg font-semibold mb-4">{group.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {group.items.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:shadow-md transition-all">
                <h3 className="font-medium group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
