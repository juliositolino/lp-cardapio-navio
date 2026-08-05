import { SITE_CONFIG } from "@/data/config";
import { formatCurrency } from "@/lib/utils";
import type { CartItem } from "@/types/menu";

export function getItemSubtotal(item: CartItem) {
  return item.price * item.quantity;
}

export function getCartSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => total + getItemSubtotal(item), 0);
}

export function buildWhatsAppMessage(items: CartItem[], notes?: string) {
  const lines = [
    "Olá! Gostaria de fazer um pedido para o Dia dos Pais:",
    "",
    "Itens do pedido:"
  ];

  for (const item of items) {
    lines.push(
      `- ${item.quantity}x ${item.name}${item.variationLabel ? ` (${item.variationLabel})` : ""} - ${formatCurrency(item.price)}`
    );
  }

  if (notes?.trim()) {
    lines.push("");
    lines.push("Observações:");
    lines.push(notes.trim());
  }

  lines.push("");
  lines.push(`Total: ${formatCurrency(getCartSubtotal(items))}`);

  return lines.join("\n");
}

export function buildWhatsAppUrl(items: CartItem[], notes?: string) {
  const message = buildWhatsAppMessage(items, notes);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppQuestionUrl() {
  const message = "Olá! Tenho uma dúvida sobre o cardápio especial de Dia dos Pais.";
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
