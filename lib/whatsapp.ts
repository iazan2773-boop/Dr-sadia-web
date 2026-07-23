import { siteConfig } from "@/data/siteConfig";

export function getWhatsAppLink(message?: string): string {
  const text = message ?? "Hi, I'd like to book an appointment with Dr. Sadia Ghufran.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
