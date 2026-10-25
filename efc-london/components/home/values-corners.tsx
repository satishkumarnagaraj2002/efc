import { CheckCircle2, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { clubInfo, fourCorners, pathway } from "@/src/data/clubInfo";

export function ValuesCorners() {
  return (
    <>
      <section className="border-y border-white/10 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Club values"
            title="Playing with purpose."
            description="A premium football culture built on development, respect and readiness for the next challenge."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {clubInfo.values.map((value) => (
              <div
                key={value.title}
                className="rounded-[26px] border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8FF3B]/50 hover:shadow-[0_18px_40px_rgba(184,255,59,0.08)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#B8FF3B]/30 bg-[#B8FF3B]/10 text-[#B8FF3B]">
                  <Sparkles size={16} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-[0.06em] text-white">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our coaching model"
          title="The four corners."
          description="Every session develops the whole player — not just the footballer."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fourCorners.map((corner, i) => (
            <Reveal key={corner.title} delay={i * 0.08}>
              <div className="h-full rounded-[26px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B8FF3B]/50">
                <div className="text-5xl font-black text-[#B8FF3B]/30">0{i + 1}</div>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.05em] text-white">{corner.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {corner.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#B8FF3B]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1220]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Player pathway"
            title="From first touch to academy."
            description="A clear route for every player, whatever their starting point."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {[...pathway].reverse().map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="h-full rounded-[24px] border border-white/10 bg-[#101827] p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#B8FF3B] font-black text-[#070B12]">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-[0.05em] text-white">{p.step}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
