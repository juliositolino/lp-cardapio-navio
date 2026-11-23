import Image from "next/image";

import { SITE_CONFIG } from "@/data/config";

export function MenuBanner() {
  const { campaign } = SITE_CONFIG;

  if (campaign.banner.headline) {
    return (
      <section className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[1.4rem] border border-white/15 bg-[#103b52] shadow-[0_12px_36px_rgba(0,0,0,0.22)] sm:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ff9b28]">
              {campaign.eyebrow} · {campaign.year}
            </p>
            <h1 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-[#f8efe5] lg:text-4xl">
              {campaign.banner.headline}
            </h1>
            <p className="mt-3 max-w-md text-base text-[#f8efe5]/85">{campaign.subtitle}</p>
          </div>
          <div className="relative min-h-[250px] sm:min-h-[320px]">
            <Image src={campaign.banner.image} alt={campaign.banner.alt} fill priority
              sizes="(min-width: 1280px) 580px, (min-width: 640px) 48vw, calc(100vw - 32px)"
              className="object-cover" style={{ objectPosition: campaign.banner.position ?? "center" }} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
      <h1 className="sr-only">{SITE_CONFIG.campaign.eyebrow}</h1>
      <div className="relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-[var(--color-ivory)] shadow-[0_12px_36px_rgba(0,0,0,0.22)]">
        <div className="relative aspect-[3.2/1] min-h-[108px] w-full sm:aspect-[4.2/1] md:min-h-[132px]">
          <Image
            src={campaign.banner.image}
            alt={campaign.banner.alt}
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
