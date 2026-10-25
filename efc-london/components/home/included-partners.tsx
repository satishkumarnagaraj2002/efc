import { ArrowRight, CheckCircle2, ExternalLink, Footprints, Heart, MapPin, Shirt } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { included, kit, partners, supportNote, venue } from "@/src/data/clubInfo";

export function IncludedPartners() {
  return (
    <>
      <section className="border-y border-white/10 bg-[#0B1220]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#B8FF3B]">What’s included</p>
            <h2 className="font-['Barlow_Condensed','sans-serif'] text-4xl font-black uppercase tracking-[0.04em] text-white sm:text-5xl">
              Everything your player needs.
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#B8FF3B]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[28px] border border-white/10 bg-[#101827] p-6 sm:p-8">
              <div className="flex items-center gap-3 text-[#B8FF3B]">
                <Shirt size={20} />
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em]">Club kit available</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {kit.map((k) => (
                  <span key={k} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                    {k}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3 rounded-2xl border border-[#B8FF3B]/30 bg-[#B8FF3B]/5 p-4 text-sm leading-7 text-slate-200">
                <Heart size={18} className="mt-1 shrink-0 text-[#B8FF3B]" />
                <p>{supportNote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Community & partners" title="Backed by great people." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {Object.values(partners).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-[#B8FF3B]/50"
              >
                <Footprints size={20} className="text-[#B8FF3B]" />
                <h3 className="mt-4 text-xl font-black uppercase tracking-[0.04em] text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{p.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#B8FF3B]">
                  Visit <ExternalLink size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(184,255,59,0.14),rgba(37,99,235,0.12),rgba(255,255,255,0.03))] p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 opacity-20 sm:opacity-50">
            <Logo height={260} />
          </div>
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#B8FF3B]">First session free</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[0.04em] text-white sm:text-5xl">
              Come and try a Friday session.
            </h2>
            <p className="mt-4 text-slate-200">
              {venue.name}, {venue.address} · {venue.day}s {venue.time}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-6 py-3 text-sm font-bold text-[#070B12] transition hover:-translate-y-0.5"
              >
                Join us <ArrowRight size={16} />
              </Link>
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MapPin size={16} /> Get directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
