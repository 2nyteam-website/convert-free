"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-4xl font-bold text-muted-foreground">Something went wrong</h1>
      <p className="text-muted-foreground mt-4">An unexpected error occurred.</p>
      <button onClick={reset} className="mt-6 text-primary hover:underline">
        Try Again
      </button>
    </div>
  );
}
