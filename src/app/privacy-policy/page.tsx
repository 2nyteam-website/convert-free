import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ConvertFree privacy policy. Learn how we handle your data — spoiler: we don't collect any.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 py-4">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Last updated: March 2026</p>

      <section className="space-y-4 text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">Summary</h2>
        <p>
          ConvertFree is designed with privacy as a core principle. <strong className="text-foreground">Your files never leave your device.</strong> All file processing happens entirely in your browser using client-side JavaScript. No files are uploaded to our servers.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What We Don&apos;t Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>We do not collect, store, or transmit your files.</li>
          <li>We do not require account creation or login.</li>
          <li>We do not sell or share personal data with third parties.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">What We May Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong className="text-foreground">Analytics</strong> — We may use Google Analytics to collect anonymous usage data (pages visited, browser type, country). This helps us understand which tools are popular and improve the site.</li>
          <li><strong className="text-foreground">Advertising</strong> — We may display ads through Google AdSense, which may use cookies to show relevant ads. You can opt out of personalized ads through Google&apos;s ad settings.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
        <p>
          ConvertFree itself does not set cookies. However, third-party services (Google Analytics, Google AdSense) may set cookies for analytics and advertising purposes. You can manage cookies through your browser settings.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Third-Party Services</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Google Analytics — <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li>Google AdSense — <a href="https://policies.google.com/technologies/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ad Policy</a></li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Changes</h2>
        <p>
          We may update this policy from time to time. Changes will be posted on this page with an updated date.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Contact</h2>
        <p>
          Questions about this policy? Email us at <a href="mailto:contact@convertfree.cc" className="text-primary hover:underline">contact@convertfree.cc</a>.
        </p>
      </section>
    </div>
  );
}
