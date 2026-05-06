import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Great_Vibes, Nunito_Sans, Playfair_Display } from "next/font/google";

import "./globals.css";

const baseFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-base"
});

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading"
});

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script"
});

export const metadata: Metadata = {
  title: "Navio | Cardápio Especial de Dia das Mães",
  description:
    "Landing page premium da Navio Pescados e Gastronomia para pedidos do cardápio especial de Dia das Mães via WhatsApp.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/navio-logo.jpeg", type: "image/jpeg" }
    ],
    shortcut: "/favicon.svg",
    apple: "/navio-logo.jpeg"
  },
  openGraph: {
    title: "Navio | Cardápio Especial de Dia das Mães",
    description:
      "Escolha pratos, acompanhamentos e envie seu pedido especial de Dia das Mães pelo WhatsApp.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${baseFont.variable} ${headingFont.variable} ${scriptFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
