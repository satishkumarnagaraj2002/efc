import { ArrowRight, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { clubInfo } from "@/src/data/clubInfo";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the club"
          title="More than a game."
          description="Elite Football Club London is built around ambition, discipline and player development in a positive football environment."
        />

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
            <Image
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80"
              alt="Football coaching session"
              width={1200}
              height={800}
              className="h-[520px] w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-8 text-slate-200">
              Based in Walthamstow, Elite Football Club London supports youth players through structured training, strong coaching values, and a culture that encourages confidence, teamwork and continuous improvement.
            </p>
            <p className="text-base leading-8 text-slate-300">
              The club places a premium on player development and technical growth, with a visible focus on FA England accreditation and competitive participation in youth football.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              {clubInfo.verifiedHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
            <Link href="/training" className="inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[#B8FF3B]">
              Explore programmes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0B1220]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:px-8">
          {clubInfo.stats.map((stat) => (
            <div key={stat.label} className="rounded-[26px] border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-black text-[#B8FF3B]">{stat.value}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-3 text-[#B8FF3B]">
          <Trophy size={20} />
          <span className="text-xs font-semibold uppercase tracking-[0.3em]">Club identity</span>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {clubInfo.values.map((value) => (
            <div key={value.title} className="rounded-[24px] border border-white/10 bg-white/5 p-8">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#B8FF3B]">{value.title}</div>
              <p className="text-lg leading-8 text-slate-200">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
