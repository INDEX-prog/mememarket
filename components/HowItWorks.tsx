import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Subscribe",
      description: "Start your free month. Cancel anytime, no questions asked.",
    },
    {
      number: "02",
      title: "Browse & download",
      description: "Access 200+ licensed memes. Download high-res PNG or vectors.",
    },
    {
      number: "03",
      title: "Drop into your deck",
      description: "Paste directly into PowerPoint, Keynote, or Google Slides.",
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src="https://picsum.photos/seed/presentation-deck/800/600"
                alt="Investor deck with memes"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 p-3 bg-background/90 backdrop-blur-sm rounded-lg border border-border">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Instant download
                    </p>
                    <p className="text-xs text-muted">PNG, SVG, high-res ready</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full rounded-2xl border border-accent/20" />
          </div>

          {/* Right - Steps */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground mb-4">
              Ready in 3 minutes
            </h2>
            <p className="text-muted max-w-prose mb-10">
              From signup to meme-filled slides. No onboarding calls needed.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <span className="font-display text-lg font-medium text-accent">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display text-lg font-medium text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 mt-14 w-px h-8 bg-border hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
