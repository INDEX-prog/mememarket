import Link from "next/link";

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-muted leading-relaxed mb-6">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted leading-relaxed">
              By accessing and using MemeMarket, you accept and agree to be bound by
              these Terms of Service. If you do not agree, please do not use our
              service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              2. License Grant
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              With an active subscription, MemeMarket grants you a non-exclusive,
              worldwide license to use the memes in our library for:
            </p>
            <ul className="list-disc pl-6 text-muted space-y-2">
              <li>Business presentations and pitch decks</li>
              <li>Internal company communications</li>
              <li>Marketing materials and social media</li>
              <li>Educational and training materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              3. Restrictions
            </h2>
            <p className="text-muted leading-relaxed">
              You may not resell, redistribute, or sublicense our memes. You may not
              use our content in a way that is defamatory, obscene, or illegal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              4. Subscription and Billing
            </h2>
            <p className="text-muted leading-relaxed">
              Subscriptions are billed monthly at $19/month after a 30-day free
              trial. You may cancel at any time. Refunds are available within the
              first 30 days of paid service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-xl font-medium text-foreground mb-4">
              5. Contact
            </h2>
            <p className="text-muted leading-relaxed">
              For questions about these terms, contact us at{" "}
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
