import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-card-border bg-white pt-16 pb-12 shadow-warm-md overflow-hidden">
      {/* Soft background dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-light text-primary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-headline">
                {siteConfig.doctorName}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-secondary-text max-w-sm">
              {siteConfig.closingLine} Dedicated to providing compassionate, evidence-based care for every child.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider" style={{ background: '#FAEEDA', color: '#854F0B', border: '1px solid #F7E2B9' }}>
                PMDC Verified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider" style={{ background: '#FAEEDA', color: '#854F0B', border: '1px solid #F7E2B9' }}>
                10+ Years Experience
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-bold uppercase tracking-wider" style={{ color: '#854F0B' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="text-secondary-text transition-colors hover:text-primary">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-text transition-colors hover:text-primary">
                  About Dr. Sadia
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-text transition-colors hover:text-primary">
                  Pediatric Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-text transition-colors hover:text-primary">
                  Clinics & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-sans text-xs font-bold uppercase tracking-wider" style={{ color: '#854F0B' }}>
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-secondary-text">
              <li className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <a
                  href={`tel:${siteConfig.whatsappNumber}`}
                  className="font-semibold text-headline transition-colors hover:text-primary"
                >
                  0333-2243012
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                <span>Gulistan-e-Johar, Karachi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-card-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-text">
          <p>&copy; {year} {siteConfig.doctorName}. All rights reserved.</p>
          <p className="font-bold uppercase tracking-wider" style={{ color: '#854F0B' }}>Child Specialist & Pediatric Surgeon</p>
        </div>
      </div>
    </footer>
  );
}
