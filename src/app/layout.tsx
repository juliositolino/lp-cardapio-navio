import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Great_Vibes, Nunito_Sans, Playfair_Display, Rye } from "next/font/google";
import { SITE_CONFIG } from "@/data/config";

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

const displayFont = Rye({
  subsets: ["latin"],
  weight: ["400"],
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
