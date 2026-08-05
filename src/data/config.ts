export const SITE_CONFIG = {
  brandName: "Navio Pescados e Gastronomia",
  since: "Desde 1982",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5518997876655",
  instagramUrl: "https://instagram.com/naviopescados",
  address: "Navio Pescados e Gastronomia",
  campaign: {
    eyebrow: "Almoço Especial no Domingo dos Pais",
    title: "Cardápio Especial de Dia dos Pais",
    subtitle: "No almoço deste domingo, o prato principal é o tempo em família.",
    primaryCta: "Ver pedido",
    secondaryCta: "Enviar pelo WhatsApp",
    deadline: "Pedidos até 07/08",
    eventDate: "Domingo dos Pais: 09/08",
    packaging: "Embalagens para viagem"
  }
} as const;
