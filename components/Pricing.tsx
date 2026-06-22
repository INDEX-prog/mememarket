"use client";

import { useState } from "react";

export default function Pricing() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else if (data.error) {
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    "Access to 200+ licensed corporate memes",
    "High-res PNG and vector downloads",
    "New memes added weekly",
    "Commercial use license included",
    "Cancel anytime, no questions asked",
    "Priority support via email",
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4">
            One plan. Full access.
          </h2>
          <p className="text-muted max-w-prose mx-auto">
            Start free for 30 days. Then $19/month if you love it.
          </p>
        </div>

        {/* Pricing card */}
        <div className="card p-8 lg:p-10 border-accent/30">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left - Price info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-xs font-medium text-accent">
                  30-day free trial
                </span>
              </div>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-5xl font-medium text-foreground">
                  $19
                </span>
                <span className="text-muted">/month</span>
              </div>
              
              <p className="text-sm text-muted">
                Billed monthly after trial. Cancel anytime.
              </p>
            </div>

            {/* Right - CTA */}
            <div className="lg:text-right">
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="btn-primary w-full lg:w-auto text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Start Free Trial"
                )}
              </button>
              
              {error && (
                <p className="mt-3 text-sm text-red-400">{error}</p>
              )}
              
              <p className="mt-3 text-xs text-muted">
                No credit card required to start
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-muted">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-10 text-muted">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-sm">Secure checkout via Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-sm">100% money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
