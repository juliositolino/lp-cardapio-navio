import { resolveMenuImage } from "@/lib/menu-images";
import type { MenuCategory, MenuProduct, MenuVariation } from "@/types/menu";

const createVariations = (
  productId: string,
  variations: Array<{ label: string; size?: string; price: number }>
): MenuVariation[] =>
  variations.map((variation, index) => ({
    id: `${productId}-variation-${index + 1}`,
    ...variation
  }));

const createProduct = (
  product: Omit<MenuProduct, "image"> & { image?: string }
): MenuProduct => ({
  ...product,
  image: product.image ?? resolveMenuImage(product.name)
});

export const menuCategories: MenuCategory[] = [
  {
    id: "pratos-principais",
    label: "Pratos principais",
    description: "Pratos para a mesa principal."
  },
  {
    id: "acompanhamentos",
    label: "Acompanhamentos",
    description: "Complementos para o pedido."
  },
  {
    id: "entradas-petiscos",
    label: "Entradas",
    description: "Opções para começar."
  },
  {
    id: "tortas",
    label: "Tortas",
    description: "Tortas prontas para encomenda."
  },
  {
    id: "saladas",
    label: "Saladas",
    description: "Saladas e opções frias."
  }
];

export const baseMenuProducts: MenuProduct[] = [
  createProduct({
    id: "bacalhau-a-moda",
    name: "Bacalhau à Moda",
    category: "pratos-principais",
    subcategory: "Bacalhau",
    description: "Bacalhau em postas altas grelhadas no azeite, batatas coradas, confit de pimentão e cebola ao vinho branco, brócolis, tomate, azeitona, ovos de codorna, alho e azeite.",
    image: "/Fotos/Bacalhau à moda.JPG",
    variations: createVariations("bacalhau-a-moda", [
      { label: "P", price: 280 },
      { label: "M", price: 480 },
      { label: "G", price: 880 }
    ])
  }),
  createProduct({
    id: "bacalhau-nas-natas",
    name: "Bacalhau de Natas",
    category: "pratos-principais",
    subcategory: "Bacalhau",
    description: "Bacalhau em postas altas, grelhadas no azeite, batatas coradas, confit de cebola ao vinho branco, creme de natas frescas, alho, azeite e azeitonas.",
    image: "/Fotos/Bacalhau de natas.jpg",
    variations: createVariations("bacalhau-nas-natas", [
      { label: "P", price: 280 },
      { label: "M", price: 480 },
      { label: "G", price: 880 }
    ])
  }),
  createProduct({
    id: "bacalhau-a-siqueira",
    name: "Bacalhau à Siqueira",
    category: "pratos-principais",
    subcategory: "Bacalhau",
    description: "Bacalhau em postas altas grelhadas no azeite, guarnecido de batatas coradas, confit de cebola, brócolis e azeitonas.",
    image: "/Fotos/Bacalhau à Siqueira.jpg",
    variations: createVariations("bacalhau-a-siqueira", [
      { label: "P", price: 280 },
      { label: "M", price: 480 },
      { label: "G", price: 880 }
    ])
  }),
  createProduct({
    id: "paella",
    name: "Paella",
    category: "pratos-principais",
    subcategory: "Camarão",
    description: "Base de arroz e açafrão acompanhado de frutos do mar (camarões, mariscos, mexilhões, lulas, polvo), ervilhas frescas e pimentão vermelho.",
    variations: createVariations("paella", [
      { label: "M", price: 260 },
      { label: "G", price: 380 }
    ])
  }),
  createProduct({
    id: "camarao-ao-thermidor",
    name: "Camarão ao Thermidor",
    category: "pratos-principais",
    subcategory: "Camarão",
    description: "Delicioso creme feito de leite fresco, queijo parmesão, mostarda, champignon, manteiga de ervas e camarões limpos e descascados.",
    variations: createVariations("camarao-ao-thermidor", [
      { label: "M", size: "1kg", price: 180 },
      { label: "G", size: "1,5kg", price: 240 }
    ])
  }),
  createProduct({
    id: "bobo-de-camarao",
    name: "Bobó de Camarão",
    category: "pratos-principais",
    subcategory: "Camarão",
    description: "Base cremosa feita com mandioca, leite de coco, colorau, azeite de dendê, recheado com camarões descascados, salteados em azeite.",
    variations: createVariations("bobo-de-camarao", [
      { label: "M", size: "1kg", price: 180 },
      { label: "G", size: "1,5kg", price: 240 }
    ])
  }),
  createProduct({
    id: "arroz-cremoso-de-camarao",
    name: "Arroz Cremoso de Camarão",
    category: "pratos-principais",
    subcategory: "Camarão",
    description: "Arroz branco, delicioso creme branco e camarões descascados e limpos, queijo parmesão.",
    variations: createVariations("arroz-cremoso-de-camarao", [
      { label: "M", size: "1kg", price: 180 },
      { label: "G", size: "1,5kg", price: 240 }
    ])
  }),
  createProduct({
    id: "salmao-a-moda",
    name: "Salmão à Moda",
    category: "pratos-principais",
    subcategory: "Salmão",
    description: "Filé de salmão grelhado, acompanhado de brócolis, palmito, alcaparras na manteiga e salsa.",
    variations: createVariations("salmao-a-moda", [{ label: "M", price: 240 }])
  }),
  createProduct({
    id: "salmao-a-belle-muniere",
    name: "Salmão à Belle Munière",
    category: "pratos-principais",
    subcategory: "Salmão",
    description: "Filé de salmão grelhado, acompanhado de camarões descascados, champignon, alcaparras e brócolis na manteiga.",
    variations: createVariations("salmao-a-belle-muniere", [
      { label: "M", price: 260 }
    ])
  }),
  createProduct({
    id: "tilapia-a-moda",
    name: "Tilápia à Moda",
    category: "pratos-principais",
    subcategory: "Tilápia",
    description: "Filé de tilápia grelhado, acompanhado de brócolis, palmito, alcaparras na manteiga e salsa.",
    variations: createVariations("tilapia-a-moda", [{ label: "M", price: 180 }])
  }),
  createProduct({
    id: "tilapia-a-belle-muniere",
    name: "Tilápia à Belle Munière",
    category: "pratos-principais",
    subcategory: "Tilápia",
    description: "Filé de tilápia grelhado, acompanhado de camarões descascados, champignon, alcaparras e brócolis na manteiga.",
    variations: createVariations("tilapia-a-belle-muniere", [
      { label: "M", price: 260 }
    ])
  }),
  createProduct({
    id: "abadejo-a-moda",
    name: "Abadejo à Moda",
    category: "pratos-principais",
    subcategory: "Abadejo",
    description: "Filé de abadejo grelhado, acompanhado de brócolis, palmito, alcaparras na manteiga e salsa.",
    variations: createVariations("abadejo-a-moda", [{ label: "M", price: 260 }])
  }),
  createProduct({
    id: "abadejo-a-belle-muniere",
    name: "Abadejo à Belle Munière",
    category: "pratos-principais",
    subcategory: "Abadejo",
    description: "Filé de abadejo grelhado, acompanhado de camarões descascados, champignon, alcaparras e brócolis na manteiga.",
    variations: createVariations("abadejo-a-belle-muniere", [
      { label: "M", price: 280 }
    ])
  }),
  createProduct({
    id: "cuscuz-sardinha",
    name: "Cuscuz de Sardinha",
    category: "acompanhamentos",
    description: "Base de farinha de milho, escabeche de sardinha da casa, palmito, ervilha fresca, azeite, cebola, pimentão vermelho.",
    variations: createVariations("cuscuz-sardinha", [
      { label: "M", size: "700g", price: 90 }
    ])
  }),
  createProduct({
    id: "cuscuz-camarao",
    name: "Cuscuz de Camarão",
    category: "acompanhamentos",
    description: "Base de farinha de milho, camarões limpos e descascados, palmito, ervilha fresca, azeite, cebola, pimentão vermelho.",
    variations: createVariations("cuscuz-camarao", [
      { label: "M", size: "700g", price: 130 }
    ])
  }),
  createProduct({
    id: "farofa-de-banana",
    name: "Farofa de Banana",
    category: "acompanhamentos",
    description: "Farinha de milho, cebola, pimentão e banana.",
    variations: createVariations("farofa-de-banana", [{ label: "M", price: 55 }])
  }),
  createProduct({
    id: "arroz-com-brocolis",
    name: "Arroz com Brócolis",
    category: "acompanhamentos",
    description: "Arroz branco, brócolis picado, refogado no azeite e alho.",
    variations: createVariations("arroz-com-brocolis", [{ label: "M", price: 75 }])
  }),
  createProduct({
    id: "arroz-a-grega",
    name: "Arroz à Grega",
    category: "acompanhamentos",
    description: "Arroz branco, cenoura, vagem, uva passa, pimentões e salsinha.",
    variations: createVariations("arroz-a-grega", [{ label: "M", price: 75 }])
  }),
  createProduct({
    id: "arroz-de-amendoas",
    name: "Arroz de Amêndoas",
    category: "acompanhamentos",
    description: "Arroz branco, guarnecido de amêndoas laminadas e manteiga de ervas.",
    variations: createVariations("arroz-de-amendoas", [{ label: "M", price: 90 }])
  }),
  createProduct({
    id: "arroz-alho-e-salsa",
    name: "Arroz Alho e Salsa",
    category: "acompanhamentos",
    description: "Arroz branco, alho frito no azeite e salsa fresca.",
    variations: createVariations("arroz-alho-e-salsa", [{ label: "M", price: 75 }])
  }),
  createProduct({
    id: "antepasto-polvo-e-lula",
    name: "Antepasto de Polvo e Lula",
    category: "entradas-petiscos",
    description: "Fatias de polvo e anéis de lulas cozidos, azeite, cebola roxa, mix de pimentões, vinho branco e ervas frescas.",
    variations: createVariations("antepasto-polvo-e-lula", [
      { label: "P", size: "300g", price: 65 }
    ])
  }),
  createProduct({
    id: "vinagrete-de-marisco",
    name: "Vinagrete de Marisco",
    category: "entradas-petiscos",
    description: "Mariscos frescos, cebola, mix de pimentões, vinagre, azeite, alho e salsinha.",
    variations: createVariations("vinagrete-de-marisco", [
      { label: "P", size: "300g", price: 55 }
    ])
  }),
  createProduct({
    id: "migas-de-bacalhau",
    name: "Migas de Bacalhau",
    category: "entradas-petiscos",
    description: "Bacalhau cozido e desfiado, temperado no azeite extra virgem, cebola, alho e salsinha.",
    variations: createVariations("migas-de-bacalhau", [
      { label: "P", size: "300g", price: 55 }
    ])
  }),
  createProduct({
    id: "sardela",
    name: "Sardela",
    category: "entradas-petiscos",
    description: "Sardinha da casa, pimentão, cebola, alho, pimenta fresca e azeite.",
    variations: createVariations("sardela", [
      { label: "P", size: "300g", price: 25 }
    ])
  }),
  createProduct({
    id: "ceviche",
    name: "Ceviche",
    category: "entradas-petiscos",
    description: "Filé de peixe branco (Saint Peter), limão, laranja, pimenta vermelha fresca, coentro, cebola roxa e azeite.",
    variations: createVariations("ceviche", [
      { label: "P", size: "300g", price: 45 }
    ])
  }),
  createProduct({
    id: "torta-de-bacalhau",
    name: "Torta de Bacalhau",
    category: "tortas",
    description: "Deliciosa e tradicional massa brisée, recheada com bacalhau do porto desfiado, refogado em azeite, mix de pimentões, cebola, tomate seco, creme de leite, azeite, azeitonas picadas e cheiro verde.",
    variations: createVariations("torta-de-bacalhau", [
      { label: "800g", price: 85 }
    ])
  }),
  createProduct({
    id: "torta-de-camarao",
    name: "Torta de Camarão",
    category: "tortas",
    description: "Deliciosa e tradicional massa brisée, recheada de pequenos camarões descascados, refinados em manteiga, mix de pimentões, cebola, palmito, creme de leite, requeijão e cheiro verde.",
    variations: createVariations("torta-de-camarao", [
      { label: "800g", price: 85 }
    ])
  }),
  createProduct({
    id: "salada-de-bacalhau-com-grao-de-bico",
    name: "Salada de Bacalhau com Grão-de-bico",
    category: "saladas",
    description: "Lascas de bacalhau do porto, grão de bico, azeitonas sem caroço, alho e azeite.",
    variations: createVariations("salada-de-bacalhau-com-grao-de-bico", [
      { label: "500g", price: 90 },
      { label: "1kg", price: 160 }
    ])
  }),
  createProduct({
    id: "salada-de-bacalhau-da-casa",
    name: "Salada de Bacalhau da Casa",
    category: "saladas",
    description: "Lascas de bacalhau do porto, cebola confitada ao vinho branco, tomate seco, azeitonas, salsa, alho e azeite.",
    variations: createVariations("salada-de-bacalhau-da-casa", [
      { label: "500g", price: 90 },
      { label: "1kg", price: 160 }
    ])
  }),
  createProduct({
    id: "maionese-de-camarao",
    name: "Maionese de Camarão",
    category: "saladas",
    description: "Maionese, cenoura, batata, palmito, camarão, mostarda, ervilhas e azeite.",
    variations: createVariations("maionese-de-camarao", [
      { label: "M", size: "800g", price: 120 }
    ])
  })
];
