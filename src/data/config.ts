import { activeCampaign } from "@/data/campaigns";

export const SITE_CONFIG = {
  projectName: "Cardapio Navio",
  brandName: "Navio Pescados e Gastronomia",
  since: "Desde 1982",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5518997876655",
  instagramUrl: "https://instagram.com/naviopescados",
  address: "Navio Pescados e Gastronomia",
  campaign: activeCampaign
} as const;
