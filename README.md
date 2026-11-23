# Cardapio Navio

Cardápio sazonal da Navio Pescados e Gastronomia em Next.js, com pedidos via WhatsApp. Campanha ativa: Final de Ano 2026.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Componentização modular
- Dados do cardápio em arquivo separado

## Estrutura principal

```text
public/
public/Fotos/
src/app/
src/components/
src/data/
src/hooks/
src/lib/
src/types/
```

## Como rodar localmente

1. Instale o Node.js 20 ou superior.
2. Instale as dependências:

```bash
npm install
```

3. Copie as variáveis de ambiente:

```powershell
Copy-Item .env.example .env.local
```

4. Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

5. Acesse [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Suba o projeto para um repositório Git.
2. Importe o repositório na Vercel.
3. Configure a variável `NEXT_PUBLIC_WHATSAPP_NUMBER`.
4. Faça o deploy.

## Onde editar depois

- Catálogo base: `src/data/catalog.ts`
- Campanha ativa: `src/data/campaigns/index.ts`
- Banner, prazos, fotos, preços e tamanhos de Final de Ano: `src/data/campaigns/final-de-ano-2026.ts`
- Cardápio resultante: `src/data/menu.ts`
- Textos da campanha, Instagram e contato: `src/data/config.ts`
- Mensagem do WhatsApp: `src/lib/whatsapp.ts`
- Lógica de imagens por nome: `src/lib/menu-images.ts`

## Observações

- As imagens da campanha devem ficar em `public/Fotos`.
- Se uma foto não existir, o card não renderiza placeholder quebrado.
- O carrinho persiste em `localStorage`, separado por campanha e ano. Ao restaurar um pedido, os preços são conferidos com o catálogo atual.

## Troca de campanha

O mesmo projeto atende Quaresma, Dia das Mães, Dia dos Pais e Final de Ano. Cada campanha tem um arquivo em `src/data/campaigns/`, com identificação do evento e ano, banner, textos, prazos, fotos e alterações de valores/tamanhos. O catálogo base conserva os produtos e preços anteriores.

Para uma nova edição, copie um arquivo de campanha, informe os dados aprovados, registre em `campaigns` e altere `ACTIVE_CAMPAIGN_ID` em `src/data/campaigns/index.ts`. Layout, categorias, carrinho e envio pelo WhatsApp usam automaticamente a campanha selecionada. Não há troca automática por data nem datas ou preços presumidos para campanhas futuras. O Dia dos Pais 2026 foi preservado como referência.

## Final de Ano 2026

- Encomendas da rotisseria até 20/12/2026.
- Retirada até 24/12/2026, às 14h, na Av. Manoel Goulart, 1453.
- Preços atualizados conforme a tabela enviada pelo responsável; itens não citados mantêm os valores atuais.
- Pesos anteriores mantidos onde não houve alteração; Ceviche atualizado para 500g.
- Bacalhau de Natas em Postas e em Lascas são produtos separados.
- Fotos extraídas das artes da agência em `public/campaigns/final-de-ano-2026/`. O script `scripts/extract-campaign-photos.py` reproduz os recortes a partir do PDF original (requer pypdf e Pillow).
- Repositório: https://github.com/juliositolino/lp-cardapio-navio.git
- Pasta local: `C:\Projetos\Cadapio Navio`.
- Ao renomear a pasta, reinicie o servidor a partir do novo diretório. Se houver um build anterior, remova o cache `.next` e execute `npm run dev` (desenvolvimento) ou `npm run build` seguido de `npm start` (produção).
