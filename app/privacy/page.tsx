import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground mb-8"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to home
        </Link>

        <h1 className="font-display text-4xl font-medium text-foreground mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-muted leading-relaxed mb-6">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              Information We Collect
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              We collect information you provide directly:
            </p>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li>Email address when you sign up</li>
              <li>Payment information processed securely by Stripe</li>
              <li>Usage data to improve our service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p className="text-muted leading-relaxed">
              We use your information to provide and improve MemeMarket, process
              payments, and communicate important updates about your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              Data Security
            </h2>
            <p className="text-muted leading-relaxed">
              We implement industry-standard security measures. Payment processing
              is handled by Stripe, a PCI-compliant payment processor. We never
              store your full credit card information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              Your Rights
            </h2>
            <p className="text-muted leading-relaxed">
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              Contact
            </h2>
            <p className="text-muted leading-relaxed">
              For privacy-related questions, contact us at{" "}
              <a
                href="mailto:hello@mememarket.com"
                className="text-accent hover:underline"
              >
                hello@mememarket.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
