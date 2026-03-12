import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the ConvertFree team for questions, feedback, or support.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6 py-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <section className="space-y-3 text-muted-foreground">
        <p>
          Have a question, found a bug, or want to suggest a new tool? We&apos;d love to hear from you.
        </p>

        <h2 className="text-xl font-semibold text-foreground pt-4">Get In Touch</h2>
        <p>
          Email us at: <a href="mailto:contact@convertfree.cc" className="text-primary hover:underline">contact@convertfree.cc</a>
        </p>

        <h2 className="text-xl font-semibold text-foreground pt-4">Feature Requests</h2>
        <p>
          Want a specific file conversion tool? Let us know and we&apos;ll consider adding it to our collection.
        </p>

        <h2 className="text-xl font-semibold text-foreground pt-4">Bug Reports</h2>
        <p>
          If a tool isn&apos;t working as expected, please include your browser name and version, the file type you were trying to convert, and a description of the issue.
        </p>
      </section>
    </div>
  );
}
