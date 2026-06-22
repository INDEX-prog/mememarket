"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What does 'licensed for corporate use' mean?",
    answer:
      "Every meme in our library is cleared for commercial use in business presentations, pitch decks, and marketing materials. No copyright concerns, no attribution required.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, cancel anytime from your dashboard. No penalties, no long-term commitment. Your access continues until the end of your billing period.",
  },
  {
    question: "What file formats do you provide?",
    answer:
      "All memes are available in high-resolution PNG (1080p+) and scalable SVG formats. Perfect for slides, reports, and social media.",
  },
  {
    question: "How often do you add new memes?",
    answer:
      "We add fresh memes every week. Our team monitors business trends and creates timely content that resonates with your audience.",
  },
  {
    question: "Can my whole team use one subscription?",
    answer:
      "Currently, subscriptions are per-user. For team pricing with multiple seats, reach out to us at hello@mememarket.com.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes. If you're not satisfied within your first 30 days as a paying subscriber, we'll refund you in full. No questions asked.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4">
            Questions & answers
          </h2>
          <p className="text-muted">
            Everything you need to know about MemeMarket.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-accent">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted mb-2">Still have questions?</p>
          <a
            href="mailto:hello@mememarket.com"
            className="text-accent hover:underline font-medium"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
