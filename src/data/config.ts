export const SITE_CONFIG = {
  brandName: "Navio Pescados e Gastronomia",
  since: "Desde 1982",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5518997876655",
  instagramUrl: "https://instagram.com/naviopescados",
  address: "Navio Pescados e Gastronomia",
  campaign: {
    eyebrow: "Cardápio Especial de Dia das Mães",
    title: "Cardápio Especial de Dia das Mães",
    subtitle: "Monte seu pedido e envie direto pelo WhatsApp.",
    primaryCta: "Ver pedido",
    secondaryCta: "Enviar pelo WhatsApp",
    deadline: "Pedidos até 08/05",
    packaging: "Embalagens para viagem"
  }
} as const;
