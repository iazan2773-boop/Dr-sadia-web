import { siteConfig } from "@/data/siteConfig";
import { getWhatsAppLink } from "@/lib/whatsapp";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-gradient py-12 md:py-16 border-b border-card-border">
      {/* Decorative blurred background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-soft-pulse" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float-slow" />

      {/* Dot grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">

          {/* ── Left: Hero Copy ── */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Accent Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-warm-sm animate-float"
              style={{ background: '#FAEEDA', color: '#854F0B', border: '1px solid #F7E2B9' }}
            >
              <span className="flex h-2 w-2 rounded-full" style={{ background: '#854F0B' }} />
              <span>PMDC Verified &bull; 10+ Years Dedicated Care</span>
            </div>

            {/* Doctor's Name */}
            <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-headline sm:text-5xl lg:text-6xl leading-[1.15]">
              {siteConfig.doctorName}
            </h1>

            {/* Title / Specialty */}
            <p className="mt-3 font-sans text-xl font-semibold text-primary sm:text-2xl">
              {siteConfig.title}
            </p>

            {/* Subtext */}
            <p className="mt-4 text-base leading-relaxed text-secondary-text sm:text-lg max-w-xl">
              {siteConfig.closingLine} Gentle, comprehensive pediatric care for babies, toddlers, and young children in Gulistan-e-Johar, Karachi.
            </p>

            {/* Credential Checkmarks */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-headline">
              {[
                "MBBS, MCPS Specialist",
                "Pediatric Surgical Care",
                "2 Clinic Locations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <Link
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-warm-md shadow-accent-glow transition-all duration-300 hover:bg-primary-hover hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon />
                <span>Book Appointment</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-card-border bg-white px-8 py-4 text-base font-semibold text-headline shadow-warm-sm transition-all duration-300 hover:bg-slate-50 hover:border-primary hover:text-primary hover:scale-105 active:scale-95"
              >
                <span>Explore Services</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── Right: Doctor Photo ── */}
          <div className="lg:col-span-5 relative flex justify-center items-end">

            {/* Photo */}
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dr-sadia.png"
                alt="Dr. Sadia Ghufran — Child Specialist & Pediatric Surgeon"
                className="relative z-10 w-full max-w-[17rem] sm:max-w-[20rem] lg:max-w-[24rem] object-contain mb-4"
                style={{ mixBlendMode: "multiply" }}
              />

              {/* Floating trust badges — bottom of photo */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2 px-4">
                {/* Badge 1 */}
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold shadow-warm-md backdrop-blur-sm"
                  style={{ background: '#042C53', color: '#ffffff' }}
                >
                  <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  10+ Years Experience
                </div>

                {/* Badge 2 */}
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold shadow-warm-md backdrop-blur-sm"
                  style={{ background: '#185FA5', color: '#ffffff' }}
                >
                  <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Warm &amp; Compassionate Care
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
