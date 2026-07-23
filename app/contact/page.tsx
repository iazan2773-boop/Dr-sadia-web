import type { Metadata } from "next";
import Link from "next/link";
import LocationCard from "@/components/LocationCard";
import { clinics } from "@/data/clinics";
import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book an appointment with Dr. Sadia Ghufran at Cheezal Clinic or Fakhr-e-Ghazi Medical Center in Gulistan-e-Johar, Karachi.",
};

export default function ContactPage() {
  const phoneDisplay = "0333-2243012";

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
            Fast WhatsApp Booking
          </span>
          <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-headline sm:text-5xl lg:text-6xl">
            Contact &amp; Location Details
          </h1>
          <p className="mt-4 text-lg text-secondary-text">
            Visit Dr. Sadia Ghufran at Cheezal Clinic or Fakhr-e-Ghazi Medical Center in Gulistan-e-Johar, Karachi.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full" style={{ background: '#185FA5' }} />
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-16 sm:py-20 border-b border-card-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-headline sm:text-4xl">
              Clinic Locations &amp; Timings
            </h2>
            <p className="mt-2 text-secondary-text">
              Select your preferred location to book an appointment directly on WhatsApp.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {clinics.map((clinic) => (
              <LocationCard key={clinic.name} clinic={clinic} />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16 sm:py-20 border-b border-card-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold text-headline sm:text-4xl">
              Interactive Location Maps
            </h2>
            <p className="mt-2 text-secondary-text">
              Directions to Cheezal Clinic &amp; Fakhr-e-Ghazi Medical Center.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {clinics.map((clinic) => (
              <div
                key={clinic.name}
                className="overflow-hidden rounded-3xl border border-card-border bg-white shadow-warm-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-card-border px-6 py-5 bg-bg-sage/50">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-headline">
                      {clinic.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-primary">
                      {clinic.days.join(", ")} &bull; {clinic.hours}
                    </p>
                  </div>
                  {clinic.mapsLink && (
                    <Link
                      href={clinic.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-card-border bg-white px-4 py-2 text-xs font-bold text-headline shadow-warm-sm transition-all hover:bg-primary hover:border-primary hover:text-white"
                    >
                      <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                      </svg>
                      Open Maps
                    </Link>
                  )}
                </div>
                <div className="overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps?cid=${clinic.cid}&output=embed`}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${clinic.name} Location Map`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — blue bg, white text */}
      <section className="py-16 sm:py-20 text-center text-white shadow-warm-lg" style={{ background: '#185FA5' }}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Get in Touch Instantly
          </h2>
          <p className="mt-3 text-base text-white/85">
            Send a direct message to Dr. Sadia Ghufran&apos;s clinic on WhatsApp.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <Link
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-headline shadow-warm-md transition-all hover:bg-bg-sage hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon />
              <span>Message Clinic on WhatsApp</span>
            </Link>

            <a
              href={`tel:${siteConfig.whatsappNumber}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 underline-offset-4 hover:underline hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>Call Direct: {phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-headline" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
