import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
      <p className="text-lg text-muted-foreground mt-4">Page not found</p>
      <Link href="/" className="mt-6 text-primary hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
