import Image from "next/image";

import { SITE_CONFIG } from "@/data/config";

export function MenuBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
      <h1 className="sr-only">{SITE_CONFIG.campaign.eyebrow}</h1>
      <div className="relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-[var(--color-ivory)] shadow-[0_12px_36px_rgba(0,0,0,0.22)]">
        <div className="relative aspect-[3.2/1] min-h-[108px] w-full sm:aspect-[4.2/1] md:min-h-[132px]">
          <Image
            src="/campaign-cover-dia-dos-pais-web.png"
            alt="Almoço especial no Domingo dos Pais da Navio"
            fill
            priority
            sizes="(min-width: 1280px) 1280px, calc(100vw - 32px)"
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
