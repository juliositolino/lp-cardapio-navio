import type { Campaign } from "@/types/campaign";
import type { MenuVariation } from "@/types/menu";

const photo = (name: string) => `/campaigns/final-de-ano-2026/${name}.jpg`;
const sizes = (productId: string, prices: Array<[string, number, string?]>): MenuVariation[] =>
  prices.map(([label, price, size]) => ({
    id: `${productId}-${label.toLowerCase()}`,
    label,
    price,
    ...(size ? { size } : {})
  }));

export const yearEnd2026: Campaign = {
  id: "final-de-ano-2026",
  event: "final-de-ano",
  year: 2026,
  eyebrow: "Fim de ano no Navio",
  title: "Cardápio de Final de Ano 2026",
  subtitle: "Os pratos da casa, prontos para a sua mesa de Natal.",
  primaryCta: "Ver pedido",
  secondaryCta: "Enviar pelo WhatsApp",
  deadline: "Encomendas até 20/12",
  eventDate: "Retirada até 24/12, às 14h",
  pickupAddress: "Av. Manoel Goulart, 1453",
  packaging: "Embalagens para viagem",
  banner: {
    image: "/campaigns/final-de-ano-2026/mesa-natal-sem-texto.png",
    alt: "Mesa de Natal da Navio com bacalhau, frutos do mar e acompanhamentos",
    position: "center 75%",
    headline: "Fim de ano com gosto de mar começa no Navio."
  },
  orderMessage: "Olá! Gostaria de fazer uma encomenda de rotisseria para o Final de Ano 2026:",
  questionMessage: "Olá! Tenho uma dúvida sobre o cardápio de Final de Ano 2026.",
  products: {
    "bacalhau-a-moda": {
      image: "/campaigns/final-de-ano-2026/bacalhau-a-moda-campanha.png",
      variations: sizes("bacalhau-a-moda", [["P", 380], ["M", 690], ["G", 1400]])
    },
    "bacalhau-a-siqueira": {
      variations: sizes("bacalhau-a-siqueira", [["P", 380], ["M", 690], ["G", 1400]])
    },
    "bacalhau-nas-natas": {
      name: "Bacalhau de Natas em Postas",
      description: "Bacalhau em postas, cremoso e dourado.",
      image: photo("bacalhau-de-natas"),
      variations: sizes("bacalhau-nas-natas", [["P", 360], ["M", 650], ["G", 1200]])
    },
    paella: {
      image: photo("paella"),
      variations: sizes("paella", [["P", 260], ["M", 380], ["G", 650]])
    },
    "camarao-ao-thermidor": {
      image: photo("camarao-ao-thermidor"),
      variations: sizes("camarao-ao-thermidor", [["M", 220, "1kg"], ["G", 340, "1,5kg"]])
    },
    "bobo-de-camarao": {
      image: photo("bobo-de-camarao"),
      variations: sizes("bobo-de-camarao", [["M", 220, "1kg"], ["G", 340, "1,5kg"]])
    },
    "arroz-cremoso-de-camarao": {
      variations: sizes("arroz-cremoso-de-camarao", [["M", 220, "1kg"], ["G", 340, "1,5kg"]])
    },
    "salmao-a-moda": {
      variations: sizes("salmao-a-moda", [["M", 240], ["G", 380]])
    },
    "salmao-a-belle-muniere": {
      variations: sizes("salmao-a-belle-muniere", [["M", 280], ["G", 460]])
    },
    "tilapia-a-moda": {
      variations: sizes("tilapia-a-moda", [["M", 180], ["G", 280]])
    },
    "tilapia-a-belle-muniere": {
      variations: sizes("tilapia-a-belle-muniere", [["M", 260], ["G", 420]])
    },
    "abadejo-a-moda": {
      variations: sizes("abadejo-a-moda", [["M", 290], ["G", 480]])
    },
    "abadejo-a-belle-muniere": {
      variations: sizes("abadejo-a-belle-muniere", [["M", 320], ["G", 540]])
    },
    "antepasto-polvo-e-lula": {
      image: photo("antepasto-polvo-e-lula"),
      variations: sizes("antepasto-polvo-e-lula", [["P", 75, "300g"]])
    },
    "migas-de-bacalhau": {
      variations: sizes("migas-de-bacalhau", [["P", 65, "300g"]])
    },
    ceviche: {
      image: photo("ceviche"),
      variations: sizes("ceviche", [["P", 70, "500g"]])
    },
    "torta-de-bacalhau": {
      variations: sizes("torta-de-bacalhau", [["800g", 95]])
    },
    "torta-de-camarao": {
      image: photo("torta-de-camarao"),
      variations: sizes("torta-de-camarao", [["800g", 95]])
    },
    "vinagrete-de-marisco": { image: photo("vinagrete-de-marisco") }
  },
  extraProducts: [{
    id: "bacalhau-de-natas-em-lascas",
    name: "Bacalhau de Natas em Lascas",
    category: "pratos-principais",
    subcategory: "Bacalhau",
    description: "Bacalhau em lascas ao creme de natas.",
    variations: sizes("bacalhau-de-natas-em-lascas", [["M", 650]])
  }]
};
