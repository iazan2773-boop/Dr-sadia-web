import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import LocationCard from "@/components/LocationCard";
import ConditionsGrid from "@/components/ConditionsGrid";
import { clinics } from "@/data/clinics";
import { conditions } from "@/data/conditions";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustBadges />

      {/* Clinic Locations Section */}
      <section className="relative bg-warm-gradient py-20 lg:py-24 border-b border-card-border overflow-hidden">
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            {/* Eyebrow Label — amber badge, inline styles for guaranteed rendering */}
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
              style={{ background: '#FAEEDA', color: '#854F0B', border: '1px solid #F7E2B9' }}
            >
              Convenient Appointments
            </span>
            <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-headline sm:text-4xl lg:text-5xl">
              Clinic Locations
            </h2>
            <p className="mt-3 text-base sm:text-lg text-secondary-text">
              Visit Dr. Sadia Ghufran at her modern clinics located in Gulistan-e-Johar.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {clinics.map((clinic) => (
              <LocationCard key={clinic.name} clinic={clinic} />
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Teaser Section */}
      <section className="relative bg-white py-20 lg:py-24 border-b border-card-border overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 bg-dot-grid h-full w-48 opacity-10" />
        
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              {/* Eyebrow Label — amber badge, inline styles for guaranteed rendering */}
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                style={{ background: '#FAEEDA', color: '#854F0B', border: '1px solid #F7E2B9' }}
              >
                Comprehensive Care
              </span>
              <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-headline sm:text-4xl lg:text-5xl">
                Conditions Treated
              </h2>
              <p className="mt-3 text-base sm:text-lg text-secondary-text max-w-xl">
                Expert medical care for pediatric health conditions.
              </p>
            </div>

            {/* Secondary Button: white bg, #042C53 text, thin border */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 rounded-full border border-card-border bg-white px-6 py-3 text-sm font-bold text-headline shadow-warm-sm transition-all duration-200 hover:bg-bg-sage hover:border-primary hover:text-primary hover:scale-105 active:scale-95 shrink-0"
            >
              <span>View All Services</span>
              <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <ConditionsGrid items={conditions} limit={8} variant="teaser" />
        </div>
      </section>

      {/* Closing CTA Banner - Primary Blue #185FA5 */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-24 shadow-warm-lg">
        {/* Soft background glow circles */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-black/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-10" />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          {/* Eyebrow Label — amber badge, inline styles for guaranteed rendering */}
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-md"
            style={{ background: '#FAEEDA', color: '#854F0B', border: '1px solid #F7E2B9' }}
          >
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: '#854F0B' }} />
            Instant WhatsApp Booking
          </span>

          <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight">
            {siteConfig.closingLine}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl mx-auto">
            Schedule your child&apos;s consultation today with Dr. Sadia Ghufran. Quick and effortless booking via WhatsApp.
          </p>

          <div className="mt-8 flex justify-center">
            {/* Primary Button on Dark Banner: White bg, #042C53 text */}
            <Link
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 text-base font-bold text-headline shadow-warm-lg transition-all duration-300 hover:bg-bg-sage hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon />
              <span>Book Appointment Now</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
