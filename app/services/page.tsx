import type { Metadata } from "next";
import Link from "next/link";
import ConditionsGrid from "@/components/ConditionsGrid";
import { conditions, featuredService } from "@/data/conditions";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pediatric services by Dr. Sadia Ghufran including All Congenital Anomalies, Fever, Infection, Digestive Disorders, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-warm-gradient py-16 sm:py-20 border-b border-card-border">
        <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-dot-grid" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          {/* Eyebrow Label — amber badge, inline styles for guaranteed rendering */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
            style={{ background: '#FAEEDA', color: '#854F0B', border: '1px solid #F7E2B9' }}
          >
            Pediatric &amp; Surgical Care
          </span>
          <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-headline sm:text-5xl lg:text-6xl">
            Medical Services &amp; Conditions
          </h1>
          <p className="mt-4 text-lg text-secondary-text">
            Comprehensive medical and surgical pediatric management for infants, toddlers, and young adolescents.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full" style={{ background: '#185FA5' }} />
        </div>
      </section>

      {/* Featured Service Spotlight */}
      <section className="bg-white py-16 sm:py-20 border-b border-card-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-card-border bg-bg-sage/60 p-8 sm:p-10 shadow-warm-md">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Icon Container — blue, NOT teal */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-light shadow-warm-sm animate-float" style={{ color: '#185FA5' }}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              <div>
                {/* "FEATURED SPECIALTY" tag — amber badge, inline styles for guaranteed rendering */}
                <span
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider"
                  style={{ background: '#FAEEDA', color: '#854F0B', border: '1px solid #F7E2B9' }}
                >
                  Featured Specialty
                </span>
                <h2 className="mt-2.5 font-serif text-2xl font-bold text-headline sm:text-3xl">
                  {featuredService}
                </h2>
                <p className="mt-2 text-base text-secondary-text leading-relaxed">
                  Specialized evaluation, diagnosis, and surgical management for pediatric birth defects and congenital conditions with compassionate care.
                </p>
                <div className="mt-6">
                  <Link
                    href={getWhatsAppLink(`Hi Dr. Sadia, I'd like to consult regarding ${featuredService}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-warm-sm transition-all hover:bg-primary-hover hover:scale-105 active:scale-95"
                  >
                    <span>Consult on Congenital Conditions</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated Grid */}
      <section className="bg-white py-16 sm:py-20 border-b border-card-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-headline sm:text-4xl">
              All Conditions Treated
            </h2>
            <p className="mt-3 text-secondary-text">
              Providing expert clinical care for {conditions.length} pediatric health concerns.
            </p>
          </div>

          <ConditionsGrid items={conditions} />
        </div>
      </section>

      {/* Services CTA Banner */}
      <section className="py-16 text-center text-white shadow-warm-lg" style={{ background: '#185FA5' }}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Need Expert Care for Your Child?
          </h2>
          <p className="mt-3 text-base text-white/85">
            Book a hassle-free consultation via WhatsApp today.
          </p>
          <div className="mt-8">
            <Link
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-bold text-headline shadow-warm-md transition-all hover:bg-bg-sage hover:scale-105 active:scale-95"
            >
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
