import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-background"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <circle cx="15.5" cy="8.5" r="1.5" />
                  <path d="M9 15c.83.67 1.83 1 3 1s2.17-.33 3-1" />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold text-foreground">
                MemeMarket
              </span>
            </Link>
            <p className="text-sm text-muted max-w-xs">
              Licensed corporate memes for investor decks and business presentations.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#catalog"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@mememarket.com"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://twitter.com/mememarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/mememarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} MemeMarket. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>Payments secured by</span>
            <svg
              width="48"
              height="20"
              viewBox="0 0 60 25"
              fill="currentColor"
              className="text-foreground"
            >
              <path d="M5 10.714c0-.36.293-.654.654-.654h2.04c.36 0 .653.293.653.654v3.572c0 .36-.293.654-.654.654h-2.04a.654.654 0 0 1-.653-.654v-3.572Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 6.786C0 3.037 3.037 0 6.786 0h46.428C56.963 0 60 3.037 60 6.786v11.428C60 21.963 56.963 25 53.214 25H6.786C3.037 25 0 21.963 0 18.214V6.786Zm6.786-3.929a3.929 3.929 0 0 0-3.929 3.929v11.428a3.929 3.929 0 0 0 3.929 3.929h46.428a3.929 3.929 0 0 0 3.929-3.929V6.786a3.929 3.929 0 0 0-3.929-3.929H6.786Z"
              />
              <path d="M14.048 15.179c.59 0 1.07-.107 1.438-.32.37-.214.64-.507.81-.88h.037v1.127h1.14V9.713h-1.14v1.108h-.037c-.18-.38-.454-.676-.82-.888-.365-.211-.84-.317-1.426-.317-1.01 0-1.793.347-2.351 1.041-.558.694-.837 1.654-.837 2.88 0 1.212.274 2.157.82 2.834.547.678 1.323 1.017 2.33 1.017l.036-.21Zm.29-5.052c.637 0 1.125.237 1.463.712.339.475.508 1.13.508 1.969 0 .852-.17 1.519-.508 2-.339.483-.826.724-1.463.724-.656 0-1.152-.235-1.49-.707-.336-.472-.505-1.145-.505-2.017 0-.858.169-1.522.506-1.993.337-.47.833-.706 1.49-.706V10.127Z" />
              <path d="M19.444 15.106h1.14V8.929h-1.14v6.177Zm.57-7.104c.207 0 .384-.07.53-.21a.7.7 0 0 0 .22-.524.689.689 0 0 0-.22-.515.736.736 0 0 0-.53-.206.736.736 0 0 0-.53.206.689.689 0 0 0-.22.515c0 .207.073.384.22.524.146.14.323.21.53.21Z" />
              <path d="M24.321 15.179c.505 0 .943-.092 1.315-.275a2.32 2.32 0 0 0 .892-.761l-.779-.606a1.72 1.72 0 0 1-.615.52c-.236.121-.51.181-.822.181-.522 0-.938-.161-1.25-.484-.31-.324-.478-.774-.502-1.352h4.097v-.452c0-.938-.246-1.678-.738-2.22-.491-.543-1.182-.814-2.072-.814-.58 0-1.09.137-1.528.41-.437.272-.776.657-1.015 1.155-.24.497-.359 1.08-.359 1.749 0 1.02.28 1.83.838 2.43.558.6 1.317.9 2.275.9l.263-.38Zm-.474-5.088c.457 0 .827.14 1.11.42.284.278.442.659.475 1.143h-3.098c.055-.49.209-.874.461-1.152.253-.278.595-.417 1.025-.417l.027.006Z" />
              <path d="m32.267 9.858-.016.016.016-.016Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.964 15.106V6.643h1.14v3.16h.036c.175-.36.442-.645.802-.857.36-.212.802-.318 1.326-.318.733 0 1.307.217 1.722.651.415.434.622 1.038.622 1.813v4.014h-1.14v-3.796c0-.525-.127-.927-.38-1.207-.254-.28-.623-.42-1.106-.42-.547 0-.977.178-1.29.534-.312.356-.469.84-.469 1.45v3.439h-1.14.877Z"
              />
              <path d="M37.964 15.179c.505 0 .943-.092 1.315-.275a2.32 2.32 0 0 0 .892-.761l-.78-.606a1.72 1.72 0 0 1-.614.52c-.236.121-.51.181-.822.181-.522 0-.939-.161-1.25-.484-.31-.324-.478-.774-.502-1.352h4.097v-.452c0-.938-.246-1.678-.738-2.22-.491-.543-1.182-.814-2.072-.814-.58 0-1.09.137-1.528.41-.437.272-.776.657-1.015 1.155-.24.497-.36 1.08-.36 1.749 0 1.02.28 1.83.839 2.43.558.6 1.317.9 2.275.9l.263-.38Zm-.474-5.088c.457 0 .827.14 1.11.42.284.278.442.659.475 1.143h-3.098c.055-.49.209-.874.461-1.152.253-.278.595-.417 1.025-.417l.027.006Z" />
              <path d="M44.31 9.713h-1.14v5.393h1.14V9.713Zm-.57-1.71c-.207 0-.384.069-.53.207a.689.689 0 0 0-.22.515c0 .206.073.382.22.524.146.14.323.21.53.21a.736.736 0 0 0 .53-.21.699.699 0 0 0 .22-.524.689.689 0 0 0-.22-.515.736.736 0 0 0-.53-.206Z" />
              <path d="M48.107 15.179c.505 0 .943-.092 1.315-.275a2.32 2.32 0 0 0 .892-.761l-.78-.606a1.72 1.72 0 0 1-.614.52c-.236.121-.51.181-.822.181-.522 0-.938-.161-1.25-.484-.31-.324-.478-.774-.502-1.352h4.097v-.452c0-.938-.246-1.678-.738-2.22-.491-.543-1.181-.814-2.072-.814-.58 0-1.09.137-1.527.41-.438.272-.776.657-1.016 1.155-.24.497-.36 1.08-.36 1.749 0 1.02.28 1.83.839 2.43.558.6 1.317.9 2.275.9l.263-.38Zm-.474-5.088c.457 0 .827.14 1.11.42.284.278.442.659.476 1.143H46.12c.055-.49.209-.874.462-1.152.252-.278.594-.417 1.024-.417l.027.006Z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
