import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-accent"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <h1 className="font-display text-3xl font-medium text-foreground mb-4">
          Welcome to MemeMarket!
        </h1>

        <p className="text-muted mb-8">
          Your free trial has started. You now have full access to our library of
          200+ licensed corporate memes. Happy memeing!
        </p>

        <div className="space-y-4">
          <Link href="/#catalog" className="btn-primary w-full block">
            Browse Memes
          </Link>
          <Link
            href="/"
            className="btn-secondary w-full block"
          >
            Return Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted">
          Questions? Contact us at{" "}
          <a href="mailto:hello@mememarket.com" className="text-accent hover:underline">
            hello@mememarket.com
          </a>
        </p>
      </div>
    </main>
  );
}
