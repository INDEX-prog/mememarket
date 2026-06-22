import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-medium text-accent">
                Licensed for corporate use
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-6">
              Memes that close{" "}
              <span className="text-accent">investor deals</span>
            </h1>
            
            <p className="text-lg text-muted max-w-prose mb-8 leading-relaxed">
              Stop boring your investors. Get licensed corporate memes built for pitch decks and presentations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#pricing" className="btn-primary text-base">
                Try Free for 1 Month
              </Link>
              <Link href="#catalog" className="btn-secondary text-base">
                Browse Catalog
              </Link>
            </div>
            
            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <Image
                      src={`https://picsum.photos/seed/user${i}/80/80`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  500+ marketing teams
                </p>
                <p className="text-xs text-muted">trust MemeMarket</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main meme preview */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent/10">
                <Image
                  src="https://picsum.photos/seed/corporate-meme/600/600"
                  alt="Corporate meme preview"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-lg border border-border">
                  <span className="text-xs font-medium text-accent">✓ Licensed</span>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 lg:-right-8 card p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">200+ memes</p>
                    <p className="text-xs text-muted">Ready to use</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 lg:-left-8 card p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">100% legal</p>
                    <p className="text-xs text-muted">Full license</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
