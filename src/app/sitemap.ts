import type { MetadataRoute } from "next";

const BASE = "https://www.convertfree.cc";

const tools = [
  "jpg-to-png", "png-to-jpg", "webp-to-png", "png-to-webp", "svg-to-png",
  "heic-to-jpg", "image-resizer", "image-compressor", "pdf-to-image",
  "image-to-pdf", "pdf-merge", "pdf-split", "gif-to-mp4", "mp4-to-gif",
  "csv-to-json", "markdown-to-pdf",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const toolEntries = tools.map((t) => ({
    url: `${BASE}/tools/${t}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/all-tools`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...toolEntries,
  ];
}
