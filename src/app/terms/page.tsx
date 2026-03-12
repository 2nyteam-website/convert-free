import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ConvertFree terms of service. Simple, fair terms for using our free online file conversion tools.",
};

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 py-4">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="text-sm text-muted-foreground">Last updated: March 2026</p>

      <section className="space-y-4 text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">1. Acceptance</h2>
        <p>
          By using ConvertFree (&quot;the Service&quot;), you agree to these terms. If you don&apos;t agree, please don&apos;t use the Service.
        </p>

        <h2 className="text-xl font-semibold text-foreground">2. Service Description</h2>
        <p>
          ConvertFree provides free online file conversion tools that run entirely in your browser. All file processing is done client-side — no files are uploaded to our servers.
        </p>

        <h2 className="text-xl font-semibold text-foreground">3. No Warranty</h2>
        <p>
          The Service is provided &quot;as is&quot; without warranties of any kind. While we strive for accuracy and reliability, we cannot guarantee that conversions will be perfect for all file types and sizes. Always keep backups of your original files.
        </p>

        <h2 className="text-xl font-semibold text-foreground">4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Use the Service for any illegal purpose.</li>
          <li>Attempt to interfere with or disrupt the Service.</li>
          <li>Scrape or automate access to the Service in a way that degrades performance for other users.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
        <p>
          You retain all rights to your files. We claim no ownership over any content you process using our tools. The Service itself (code, design, branding) is our intellectual property.
        </p>

        <h2 className="text-xl font-semibold text-foreground">6. Limitation of Liability</h2>
        <p>
          ConvertFree shall not be liable for any damages arising from the use of the Service, including but not limited to data loss, file corruption, or service interruption.
        </p>

        <h2 className="text-xl font-semibold text-foreground">7. Changes</h2>
        <p>
          We may update these terms at any time. Continued use of the Service constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-semibold text-foreground">8. Contact</h2>
        <p>
          Questions? Email us at <a href="mailto:contact@convertfree.cc" className="text-primary hover:underline">contact@convertfree.cc</a>.
        </p>
      </section>
    </div>
  );
}
