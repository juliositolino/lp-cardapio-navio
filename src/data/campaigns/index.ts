import { fathersDay2026 } from "@/data/campaigns/dia-dos-pais-2026";
import { yearEnd2026 } from "@/data/campaigns/final-de-ano-2026";

export const campaigns = {
  "dia-dos-pais-2026": fathersDay2026,
  "final-de-ano-2026": yearEnd2026
};

// Troque somente este identificador depois de cadastrar a próxima campanha.
export const ACTIVE_CAMPAIGN_ID: keyof typeof campaigns = "final-de-ano-2026";
export const activeCampaign = campaigns[ACTIVE_CAMPAIGN_ID];
