import { ArrowRight, Goal, Trophy } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { milestones, playerStories } from "@/src/data/clubInfo";

export function Stories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Success stories"
        title="Our players go places."
        description="Elite FC London players have progressed to academies at Watford, Barnet and West Ham United."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {playerStories.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.1}>
            <article className="h-full rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-[#B8FF3B]/50">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#B8FF3B]/30 bg-[#B8FF3B]/10 text-[#B8FF3B]">
                <Trophy size={18} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8FF3B]">{s.club}</div>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.05em] text-white">{s.name}</h3>
              <p className="mt-4 text-base leading-7 text-slate-300">{s.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <div className="rounded-[28px] border border-white/10 bg-[#0B1220] p-6 sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B8FF3B]">Club milestones</h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {milestones.map((m) => (
              <li key={m} className="flex gap-3 text-slate-200">
                <Goal size={18} className="mt-1 shrink-0 text-[#B8FF3B]" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
          <Link href="/achievements" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B8FF3B]">
            All achievements <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
