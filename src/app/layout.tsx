import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_CONFIG } from "@/data/config";

import "./globals.css";

const baseFont = localFont({
  src: "./fonts/nunito-sans-latin.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-base"
});

const headingFont = localFont({
  src: "./fonts/playfair-display-latin.woff2",
  weight: "600 700",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  variable: "--font-heading"
});

const scriptFont = localFont({
  src: "./fonts/great-vibes-latin.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-script"
});

const displayFont = localFont({
  src: "./fonts/rye-latin.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  applicationName: SITE_CONFIG.projectName,
  title: `Navio | ${SITE_CONFIG.campaign.title}`,
  description:
    `${SITE_CONFIG.campaign.subtitle} ${SITE_CONFIG.campaign.deadline}. ${SITE_CONFIG.campaign.eventDate}.`,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/navio-logo.jpeg", type: "image/jpeg" }
    ],
    shortcut: "/favicon.svg",
    apple: "/navio-logo.jpeg"
  },
  openGraph: {
    title: `Navio | ${SITE_CONFIG.campaign.title}`,
    description:
      `${SITE_CONFIG.campaign.subtitle} Escolha seus pratos e envie o pedido pelo WhatsApp.`,
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
        className={`${baseFont.variable} ${headingFont.variable} ${scriptFont.variable} ${displayFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
