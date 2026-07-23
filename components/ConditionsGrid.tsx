import type { ReactNode } from "react";

interface Props {
  items: string[];
  limit?: number;
  variant?: "teaser" | "full";
}

const conditionIcons: Record<string, ReactNode> = {
  Fever: <ThermometerIcon />,
  Infection: <BugIcon />,
  "Digestive Disorder": <StomachIcon />,
  "Common Cold": <NoseIcon />,
  "Developmental Disorder": <BrainIcon />,
  Vomiting: <StomachIcon />,
  "Loose Motion": <StomachIcon />,
  Pneumonia: <LungsIcon />,
  Jaundice: <LiverIcon />,
  "Decreased Appetite": <AppleIcon />,
  Typhoid: <BugIcon />,
  "T.B": <LungsIcon />,
  Anemia: <DropletIcon />,
  Epilepsy: <BrainIcon />,
  "Skin Allergy": <SkinIcon />,
  "Complications in CP Child": <BrainIcon />,
};

export default function ConditionsGrid({ items, limit, variant = "full" }: Props) {
  const displayed = limit ? items.slice(0, limit) : items;

  return (
    <div
      className={`grid gap-4 ${
        variant === "teaser"
          ? "grid-cols-2 sm:grid-cols-4"
          : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      }`}
    >
      {displayed.map((condition) => (
        <div
          key={condition}
          className="group flex items-center gap-3.5 rounded-2xl border border-card-border bg-white p-4 shadow-warm-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-md hover:border-primary/40"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary transition-transform duration-300 group-hover:scale-110">
            {conditionIcons[condition] ?? <HeartIcon />}
          </div>
          <span className="text-sm font-semibold text-headline group-hover:text-primary transition-colors leading-snug">
            {condition}
          </span>
        </div>
      ))}
    </div>
  );
}

function ThermometerIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  );
}

function BugIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="6" width="8" height="14" rx="4" />
      <path d="M6 9h12M6 15h12M9 3l1.5 3M15 3l-1.5 3" />
    </svg>
  );
}

function StomachIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6m0 0a4 4 0 0 1 4 4v2a6 6 0 0 1-12 0v-2a4 4 0 0 1 4-4m4 0H8" />
    </svg>
  );
}

function NoseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0a3 3 0 0 1-3 3h-1a2 2 0 0 1 0-4h.5M12 15a3 3 0 0 0 3 3h1a2 2 0 0 0 0-4h-.5" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5V6a2.5 2.5 0 0 0 2.5 2.5h.5A2.5 2.5 0 0 0 12.5 6V4.5A2.5 2.5 0 0 0 10 2h-.5z" />
      <path d="M12 12c-2.5 0-4.5 2-4.5 4.5v1.5a2.5 2.5 0 0 0 5 0V16c0-.5.5-1 1-1s1 .5 1 1v2a2.5 2.5 0 0 0 5 0V16.5C19.5 14 17.5 12 15 12h-3z" />
    </svg>
  );
}

function LungsIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v9M12 12c-2.5 0-6 1.5-6 6.5A3.5 3.5 0 0 0 9.5 22c2.5 0 2.5-3 2.5-3s0 3 2.5 3a3.5 3.5 0 0 0 3.5-3.5c0-5-3.5-6.5-6-6.5z" />
    </svg>
  );
}

function LiverIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C6.5 3 2 7.5 2 13c0 4.5 3.5 8 8 8h4c4.5 0 8-3.5 8-8 0-5.5-4.5-10-10-10z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20a7 7 0 0 0 7-7c0-3.8-3-5.5-4.5-8-1.2 1.5-1.5 3.5-2.5 3.5s-1.3-2-2.5-3.5C8 7.5 5 9.2 5 13a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function SkinIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}
