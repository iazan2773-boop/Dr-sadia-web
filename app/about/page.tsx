import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { clinics } from "@/data/clinics";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Dr. Sadia Ghufran — MBBS, MCPS, PMDC Verified Pediatrician with 15 years of experience in Karachi.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-warm-gradient py-16 sm:py-20 border-b border-card-border">
        <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-dot-grid" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {/* Eyebrow Label — amber badge, inline styles for guaranteed rendering */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{ background: '#FAEEDA', color: '#854F0B', border: '1px solid #F7E2B9' }}
          >
            Child Specialist &amp; Pediatrician
          </span>
          <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-headline sm:text-5xl lg:text-6xl">
            About {siteConfig.doctorName}
          </h1>
          <p className="mt-4 text-lg text-secondary-text max-w-xl mx-auto">
            15+ years of dedicated, compassionate pediatric care for children across Gulistan-e-Johar &amp; Karachi.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full" style={{ background: '#185FA5' }} />
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-card-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-card-border bg-bg-sage/50 p-8 sm:p-10 shadow-warm-sm">
            <h2 className="font-serif text-2xl font-bold text-headline sm:text-3xl mb-4">
              Dedicated to Children&apos;s Health &amp; Healing
            </h2>
            <p className="text-lg leading-relaxed text-secondary-text">
              {siteConfig.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications & Credentials Section */}
      <section className="bg-warm-gradient py-16 sm:py-20 border-b border-card-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-headline sm:text-3xl">
            Qualifications &amp; Certifications
          </h2>
          {/* Consistent blue credential badge treatment for all 3 qualifications */}
          <div className="mt-6 flex flex-wrap gap-3">
            {["MBBS", "MCPS", "PMDC Verified"].map((qual) => (
              <span
                key={qual}
                className="inline-flex items-center gap-2 rounded-full border border-primary-border bg-primary-light px-5 py-2.5 text-sm font-semibold text-headline shadow-warm-sm"
              >
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {qual}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-card-border bg-white p-6 shadow-warm-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-base font-bold text-headline">PMDC Official Verification</h3>
              <p className="text-xs text-secondary-text mt-0.5">Verified medical practitioner under PMDC Pakistan</p>
            </div>
            <Link
              href={siteConfig.meriSehatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-border bg-primary-light px-5 py-2.5 text-xs font-bold text-primary transition-all duration-200 hover:bg-primary hover:text-white"
            >
              <span>View Meri Sehat Profile</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-card-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-headline sm:text-3xl">
            Clinical Experience
          </h2>
          <div className="mt-6 rounded-3xl border border-card-border bg-white p-8 shadow-warm-md">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-light font-bold text-sm text-primary">
                15+
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-headline">
                  Pediatric Care
                </h3>
                <p className="text-sm font-medium text-primary">Consultation Locations</p>
              </div>
            </div>
            <div className="mt-6 space-y-6">
              {clinics.map((clinic) => (
                <div key={clinic.name} className="rounded-2xl border border-card-border bg-bg-sage/50 p-6">
                  <h4 className="font-serif text-base font-bold text-headline">
                    {clinic.name}
                  </h4>
                  <p className="mt-1 text-sm text-secondary-text">
                    {clinic.area} &middot; {clinic.days.join(", ")} &middot; {clinic.hours}
                  </p>
                  {clinic.address && (
                    <p className="mt-2 text-sm text-secondary-text leading-relaxed">
                      {clinic.address}
                    </p>
                  )}
                  <div className="mt-4 flex flex-wrap gap-3">
                    {clinic.mapsLink && (
                      <Link
                        href={clinic.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-card-border bg-white px-4 py-2 text-xs font-semibold text-headline transition-all hover:bg-primary hover:border-primary hover:text-white"
                      >
                        <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                        </svg>
                        Open in Maps
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — bg #185FA5, NOT teal */}
      <section className="py-16 sm:py-20 text-center shadow-warm-lg" style={{ background: '#185FA5' }}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Book a Consultation
          </h2>
          <p className="mt-3 text-base text-white/85">
            Connect directly with Dr. Sadia Ghufran&apos;s clinic via WhatsApp to schedule an appointment.
          </p>
          <div className="mt-8">
            <Link
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-base font-bold text-headline shadow-warm-md transition-all hover:bg-bg-sage hover:scale-105 active:scale-95"
            >
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
