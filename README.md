# Navio | Cardápio Especial de Dia dos Pais

Landing page em Next.js para apresentar o cardápio especial de Dia dos Pais da Navio Pescados e Gastronomia, com foco em conversão para pedido via WhatsApp.

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

- Dados do cardápio: `src/data/menu.ts`
- Textos da campanha, Instagram e contato: `src/data/config.ts`
- Mensagem do WhatsApp: `src/lib/whatsapp.ts`
- Lógica de imagens por nome: `src/lib/menu-images.ts`

## Observações

- As imagens da campanha devem ficar em `public/Fotos`.
- Se uma foto não existir, o card não renderiza placeholder quebrado.
- O carrinho persiste em `localStorage`.
