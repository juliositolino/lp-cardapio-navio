import { baseMenuProducts } from "@/data/catalog";
import { activeCampaign } from "@/data/campaigns";
import type { MenuProduct } from "@/types/menu";
import type { Campaign } from "@/types/campaign";

export { menuCategories } from "@/data/catalog";

export function buildCampaignMenu(campaign: Campaign): MenuProduct[] {
  const products = baseMenuProducts.map((product) => ({
    ...product,
    ...campaign.products[product.id]
  }));

  for (const extra of campaign.extraProducts ?? []) {
    const group = extra.subcategory ?? extra.category;
    const index = products.map((product) => product.subcategory ?? product.category).lastIndexOf(group);
    products.splice(index < 0 ? products.length : index + 1, 0, extra);
  }

  return products;
}

export const menuProducts = buildCampaignMenu(activeCampaign);
