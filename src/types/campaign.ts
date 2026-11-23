import type { MenuProduct } from "@/types/menu";

export type CampaignEvent = "quaresma" | "dia-das-maes" | "dia-dos-pais" | "final-de-ano";

export type Campaign = {
  id: string;
  event: CampaignEvent;
  year: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  deadline: string;
  eventDate: string;
  pickupAddress?: string;
  packaging: string;
  banner: { image: string; alt: string; headline?: string };
  orderMessage: string;
  questionMessage: string;
  products: Record<string, Partial<Omit<MenuProduct, "id">>>;
  extraProducts?: MenuProduct[];
};
