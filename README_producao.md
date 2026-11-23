# Produção - Cardapio Navio

## Escopo

Projeto sazonal para Quaresma, Dia das Mães, Dia dos Pais e Final de Ano. As campanhas alteram banner, textos da data, prazos, fotos, valores e tamanhos aprovados, preservando a estrutura e o fluxo de pedidos.

## Campanha ativa: Final de Ano 2026

- Conceito: Fim de ano com gosto de mar começa no Navio.
- Encomendas da rotisseria até 20/12/2026.
- Retirada até 24/12/2026, às 14h.
- Local: Av. Manoel Goulart, 1453.
- Preços: tabela enviada pelo responsável em 23/11/2026; demais valores mantidos.
- Fotos: extraídas do PDF da agência, sem recriar os pratos. O quadro de mariscos foi usado no Vinagrete de Marisco; a campanha não identifica esse prato como salada de bacalhau.
- O prazo de 31/12 da peixaria não foi aplicado às encomendas da rotisseria.

## Estrutura

- `src/data/campaigns/`: campanhas por evento e ano.
- `src/data/catalog.ts`: catálogo base preservado.
- `public/campaigns/`: fotos específicas de cada campanha.
- `01_referencias_agencia/`: referências oficiais e registros de origem.
- `02_assets_visuais/`, `03_editaveis/`, `04_exports/`, `05_aprovacao/`: arquivos da produção anterior preservados.

## Log de decisões

- 2026-08-05: campanha de Dia dos Pais.
- 2026-11-23: projeto e pasta atualizados para Cardapio Navio; campanhas isoladas por edição; Final de Ano 2026 ativado com preços fornecidos e imagens extraídas da agência.
