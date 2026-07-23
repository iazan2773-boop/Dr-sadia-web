import { siteConfig } from "@/data/siteConfig";

export default function TrustBadges() {
  const badges = siteConfig.credentials;

  return (
    <section className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-y border-card-border py-10 shadow-warm-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-badge-text">
          Credentials & Verified Professional Standards
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {badges.map((badge) => (
            <div
              key={badge}
              className="group flex items-center gap-2.5 rounded-full border border-card-border bg-white px-5 py-2.5 text-sm font-semibold text-headline shadow-warm-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-warm-md hover:border-primary"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-light text-primary">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
