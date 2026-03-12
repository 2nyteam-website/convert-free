import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ConvertFree - a free, privacy-focused online file converter that runs entirely in your browser.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 py-4">
      <h1 className="text-3xl font-bold">About ConvertFree</h1>

      <section className="space-y-3 text-muted-foreground">
        <p>
          ConvertFree is a collection of free online file conversion tools that run <strong className="text-foreground">100% in your browser</strong>. No files are uploaded to any server — everything is processed locally on your device.
        </p>

        <h2 className="text-xl font-semibold text-foreground pt-4">Why ConvertFree?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-foreground">Privacy First</strong> — Your files never leave your device. Zero data collection, zero uploads.</li>
          <li><strong className="text-foreground">Completely Free</strong> — No sign-up, no watermarks, no limits. All tools are free to use.</li>
          <li><strong className="text-foreground">Fast & Reliable</strong> — Processing happens instantly in your browser using modern web technologies.</li>
          <li><strong className="text-foreground">No Software Install</strong> — Works in any modern browser. No downloads or plugins required.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground pt-4">How It Works</h2>
        <p>
          Our tools use client-side JavaScript APIs including Canvas API, pdf-lib, pdfjs-dist, FFmpeg.wasm, and jsPDF to process files directly in your browser. When you select a file, it stays on your computer — the conversion happens locally and the result is available for download immediately.
        </p>

        <h2 className="text-xl font-semibold text-foreground pt-4">Available Tools</h2>
        <p>
          We offer 15+ tools covering image conversion (JPG, PNG, WebP, SVG, HEIC), PDF operations (merge, split, convert), video conversion (GIF to MP4), and document tools (CSV to JSON, Markdown to PDF). We&apos;re always adding more.
        </p>
      </section>
    </div>
  );
}
