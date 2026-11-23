import type { CartItem, MenuProduct, MenuVariation } from "@/types/menu";

export function getVariationLabel(variation: MenuVariation) {
  if (variation.size && variation.label === "Única") return variation.size;
  return variation.size ? `${variation.label} ${variation.size}` : variation.label;
}

// O catálogo atual é a fonte dos preços, mesmo quando o pedido foi salvo antes de um reajuste.
export function restoreCartItems(stored: unknown, products: MenuProduct[]): CartItem[] {
  if (!Array.isArray(stored)) return [];

  return stored.flatMap((item) => {
    if (!item || typeof item !== "object" || !Number.isSafeInteger(item.quantity) || item.quantity <= 0) return [];
    const product = products.find((candidate) => candidate.id === item.productId);
    const variation = product?.variations.find((candidate) => candidate.id === item.variationId);
    if (!product || !variation) return [];

    return [{
      productId: product.id,
      variationId: variation.id,
      name: product.name,
      variationLabel: getVariationLabel(variation),
      price: variation.price,
      quantity: item.quantity,
      image: product.image
    }];
  });
}
